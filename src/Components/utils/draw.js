export const drawElement = (ctx, el) => {
  ctx.save();

  // 🖍 REAL HIGHLIGHTER
  if (el.type === "highlighter") {
    ctx.globalCompositeOperation = "multiply"; // 🔥 KEY MAGIC
    ctx.globalAlpha = 0.35;

    ctx.strokeStyle = el.color;
    ctx.lineWidth = el.size * 3; // thicker
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    // ✨ SOFT EDGE EFFECT
    ctx.shadowColor = el.color;
    ctx.shadowBlur = el.size * 2;

    ctx.beginPath();
    el.points.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();

    ctx.globalCompositeOperation = "source-over"; // reset
  }

  // ✏️ NORMAL TOOLS
  else if (el.points) {
    ctx.globalAlpha = el.opacity;
    ctx.strokeStyle = el.color;
    ctx.lineWidth = el.size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.beginPath();
    el.points.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();
  }

  ctx.restore();
};
