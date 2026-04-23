import { useRef, useCallback } from "react";
import { useHistory } from "./History";

export function useCanvas({ tool, color, brushSize, opacity, fillShape }) {
  const canvasRef = useRef(null);
  const drawing = useRef(false);
  const startPos = useRef({ x: 0, y: 0 });
  const snapshot = useRef(null);
  const { save, undo, redo } = useHistory();

  // ✅ Works for mouse + touch + pen
  const getPos = (e) => {
    const canvas = canvasRef.current;
    const rect = canvas.getBoundingClientRect();

    let clientX, clientY;

    if (e.touches && e.touches[0]) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height),
    };
  };

  const hexToRgba = (hex, a) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r},${g},${b},${a})`;
  };

  const startDraw = useCallback(
    (e) => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // ✅ capture pointer (important for pen)
      if (e.pointerId) {
        e.target.setPointerCapture(e.pointerId);
      }

      const { x, y } = getPos(e);

      drawing.current = true;
      startPos.current = { x, y };
      snapshot.current = ctx.getImageData(0, 0, canvas.width, canvas.height);

      ctx.globalAlpha = opacity;
      ctx.lineWidth = brushSize;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.strokeStyle = tool === "eraser" ? "#ffffff" : color;
      ctx.fillStyle = color;
      ctx.globalCompositeOperation = "source-over";

      if (["pencil", "brush", "marker", "eraser"].includes(tool)) {
        ctx.beginPath();
        ctx.moveTo(x, y);
      }
    },
    [tool, color, brushSize, opacity],
  );

  const draw = useCallback(
    (e) => {
      if (!drawing.current) return;

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const { x, y } = getPos(e);

      // ✅ Pressure support (pen tablet magic)
      const pressure = e.pressure || 1;

      ctx.globalAlpha = opacity;

      if (tool === "pencil") {
        ctx.strokeStyle = color;
        ctx.lineWidth = brushSize * pressure;
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      if (tool === "brush") {
        ctx.strokeStyle = hexToRgba(color, 0.3);
        ctx.lineWidth = brushSize * 2.5 * pressure;
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
      }

      if (tool === "marker") {
        ctx.globalCompositeOperation = "multiply";
        ctx.strokeStyle = hexToRgba(color, 0.5);
        ctx.lineWidth = brushSize * 3 * pressure;
        ctx.lineCap = "square";
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(x, y);
      }

      if (tool === "eraser") {
        ctx.globalCompositeOperation = "destination-out";
        ctx.lineWidth = brushSize * 2 * pressure;
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      if (tool === "spray") {
        for (let i = 0; i < brushSize * 4; i++) {
          const angle = Math.random() * 2 * Math.PI;
          const r = Math.random() * brushSize * 1.5;
          ctx.fillStyle = hexToRgba(color, 0.3);
          ctx.fillRect(
            x + r * Math.cos(angle),
            y + r * Math.sin(angle),
            1.5,
            1.5,
          );
        }
      }

      // Shapes
      if (["line", "rect", "ellipse", "arrow"].includes(tool)) {
        ctx.putImageData(snapshot.current, 0, 0);

        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = brushSize;

        const { x: sx, y: sy } = startPos.current;
        ctx.beginPath();

        if (tool === "line") {
          ctx.moveTo(sx, sy);
          ctx.lineTo(x, y);
          ctx.stroke();
        }

        if (tool === "rect") {
          if (fillShape) ctx.fillRect(sx, sy, x - sx, y - sy);
          ctx.strokeRect(sx, sy, x - sx, y - sy);
        }

        if (tool === "ellipse") {
          const rx = Math.abs(x - sx) / 2;
          const ry = Math.abs(y - sy) / 2;
          ctx.ellipse(
            sx + (x - sx) / 2,
            sy + (y - sy) / 2,
            rx,
            ry,
            0,
            0,
            2 * Math.PI,
          );
          if (fillShape) ctx.fill();
          ctx.stroke();
        }

        if (tool === "arrow") {
          const angle = Math.atan2(y - sy, x - sx);
          const headLen = Math.max(brushSize * 3, 14);

          ctx.moveTo(sx, sy);
          ctx.lineTo(x, y);
          ctx.stroke();

          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(
            x - headLen * Math.cos(angle - 0.4),
            y - headLen * Math.sin(angle - 0.4),
          );
          ctx.lineTo(
            x - headLen * Math.cos(angle + 0.4),
            y - headLen * Math.sin(angle + 0.4),
          );
          ctx.closePath();
          ctx.fill();
        }
      }
    },
    [tool, color, brushSize, opacity, fillShape],
  );

  const endDraw = useCallback((e) => {
    if (!drawing.current) return;

    drawing.current = false;

    if (e?.pointerId) {
      e.target.releasePointerCapture(e.pointerId);
    }

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.globalCompositeOperation = "source-over";
    ctx.globalAlpha = 1;

    save(canvas.toDataURL());
  }, []);

  const handleUndo = () => {
    const canvas = canvasRef.current;
    undo(canvas, canvas.getContext("2d"));
  };

  const handleRedo = () => {
    const canvas = canvasRef.current;
    redo(canvas, canvas.getContext("2d"));
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    save(canvas.toDataURL());
  };

  return {
    canvasRef,
    startDraw,
    draw,
    endDraw,
    handleUndo,
    handleRedo,
    clearCanvas,
  };
}
