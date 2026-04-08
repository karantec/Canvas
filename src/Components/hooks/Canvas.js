import { useRef } from "react";

export const useCanvas = ({
  setElements,
  tool,
  color,
  fillShape,
  brushSize,
  opacity,
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
    if (tool === "crop") {
      const { x, y } = getPos(e);

      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      const width = 200;
      const height = 200;

      const imageData = ctx.getImageData(x, y, width, height);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.putImageData(imageData, 0, 0);

      return;
    }
    if (["pencil", "brush", "eraser"].includes(tool)) {
      newEl = {
        id: Date.now(),
        type: tool,
        points: [{ x, y }],
        color: tool === "eraser" ? "#ffffff" : color,
        size: brushSize,
        opacity,
      };
    } else {
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
      if (!prev.length) return prev;

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
