import { useEffect } from "react";
import { drawElement } from "./utils/draw";

export default function Canvas({
  elements,
  canvasRef,
  startDraw,
  draw,
  endDraw,
   zoom,
}) {
  useEffect(() => {
  const canvas = canvasRef.current;

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.save();
  ctx.scale(zoom, zoom); // ✅ APPLY ZOOM

  elements.forEach((el) => drawElement(ctx, el));

  ctx.restore();
}, [elements, zoom]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full bg-white"
      onMouseDown={(e) => startDraw(e, elements)}
      onMouseMove={(e) => draw(e, elements)}
      onMouseUp={endDraw}
    />
  );
}