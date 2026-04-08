import { useEffect } from "react";
import { drawElement } from "./utils/draw";

export default function Canvas({
  elements,
  canvasRef,
  startDraw,
  draw,
  endDraw,
  zoom,
  bgColor // ✅ NEW
}) {
  useEffect(() => {
  const canvas = canvasRef.current;

  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;

  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // 🎨 BACKGROUND
  if (bgColor !== "transparent") {
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }

  ctx.save();
  ctx.scale(zoom, zoom);

  // ✅ PASS bgColor here
  elements.forEach((el) => drawElement(ctx, el, bgColor));

  ctx.restore();
}, [elements, zoom, bgColor]);
  return (
    <canvas
      ref={canvasRef}
      style={{
        background: bgColor === "transparent" ? "transparent" : bgColor
      }}
      className="w-full h-full"
      onMouseDown={(e) => startDraw(e)}
      onMouseMove={(e) => draw(e)}
      onMouseUp={endDraw}
    />
  );
}