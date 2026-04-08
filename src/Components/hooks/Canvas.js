import { useRef } from "react";

export const useCanvas = ({
  setElements,
  tool,
  color,
  fillShape,
  brushSize,
  opacity,
  bgColor, // ✅ NEW
}) => {
  const canvasRef = useRef(null);
  const drawing = useRef(false);

  const getPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  const startDraw = (e) => {
    drawing.current = true;
    const { x, y } = getPos(e);

    let newEl;

    // ✂️ CROP
    if (tool === "crop") {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const width = 200;
      const height = 200;

      const imageData = ctx.getImageData(x, y, width, height);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.putImageData(imageData, 0, 0);

      return;
    }

    // ✏️ DRAWING TOOLS
    if (["pencil", "brush", "eraser", "highlighter"].includes(tool)) {
      newEl = {
        id: Date.now(),
        type: tool,
        points: [{ x, y }],

        // 🔥 FIX: dynamic eraser color
        color:
          tool === "eraser"
            ? bgColor === "transparent"
              ? "#ffffff"
              : bgColor
            : color,

        size: brushSize,
        opacity,
      };
    }

    // 📐 SHAPES
    else {
      newEl = {
        id: Date.now(),
        type: tool,
        x,
        y,
        w: 0,
        h: 0,
        color,
        fill: fillShape,
        size: brushSize,
        opacity,
      };
    }

    setElements((prev) => [...prev, newEl]);
  };

  const draw = (e) => {
    if (!drawing.current) return;

    const { x, y } = getPos(e);

    setElements((prev) => {
      const updated = [...prev];
      const el = updated[updated.length - 1];

      if (!el) return prev;

      if (el.points) {
        el.points.push({ x, y });
      } else {
        el.w = x - el.x;
        el.h = y - el.y;
      }

      return updated;
    });
  };

  const endDraw = () => {
    drawing.current = false;
  };

  const clearCanvas = () => {
    setElements([]);
  };

  return { canvasRef, startDraw, draw, endDraw, clearCanvas };
};
