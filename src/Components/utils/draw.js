export const drawElement = (ctx, el) => {
  ctx.save();

  // 🖍 HIGHLIGHTER (NEW - FIXED)
  if (el.type === "highlighter") {
    ctx.globalCompositeOperation = "multiply"; // 🔥 overlap effect
    ctx.globalAlpha = 0.35;

    ctx.strokeStyle = el.color;
    ctx.lineWidth = el.size * 3;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    ctx.shadowColor = el.color;
    ctx.shadowBlur = el.size * 2;

    ctx.beginPath();
    el.points.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();

    ctx.globalCompositeOperation = "source-over";
  }

  // ✏️ PENCIL / BRUSH / ERASER
  else if (
    el.type === "pencil" ||
    el.type === "brush" ||
    el.type === "eraser"
  ) {
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

  // 📏 LINE
  else if (el.type === "line") {
    ctx.globalAlpha = el.opacity;
    ctx.strokeStyle = el.color;
    ctx.lineWidth = el.size;

    ctx.beginPath();
    ctx.moveTo(el.x, el.y);
    ctx.lineTo(el.x + el.w, el.y + el.h);
    ctx.stroke();
  }

  // ⬛ RECTANGLE
  else if (el.type === "rect") {
    ctx.globalAlpha = el.opacity;
    ctx.strokeStyle = el.color;
    ctx.lineWidth = el.size;

    if (el.fill) {
      ctx.fillStyle = el.color;
      ctx.fillRect(el.x, el.y, el.w, el.h);
    } else {
      ctx.strokeRect(el.x, el.y, el.w, el.h);
    }
  }

  // ⚪ ELLIPSE
  else if (el.type === "ellipse") {
    ctx.globalAlpha = el.opacity;
    ctx.strokeStyle = el.color;
    ctx.lineWidth = el.size;

    ctx.beginPath();
    ctx.ellipse(
      el.x + el.w / 2,
      el.y + el.h / 2,
      Math.abs(el.w / 2),
      Math.abs(el.h / 2),
      0,
      0,
      Math.PI * 2,
    );

    if (el.fill) {
      ctx.fillStyle = el.color;
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }

  // ➡️ ARROW
  else if (el.type === "arrow") {
    const headLength = 10;

    const x1 = el.x;
    const y1 = el.y;
    const x2 = el.x + el.w;
    const y2 = el.y + el.h;

    const angle = Math.atan2(y2 - y1, x2 - x1);

    ctx.globalAlpha = el.opacity;
    ctx.strokeStyle = el.color;
    ctx.lineWidth = el.size;

    // line
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

    // arrow head
    ctx.beginPath();
    ctx.moveTo(x2, y2);
    ctx.lineTo(
      x2 - headLength * Math.cos(angle - Math.PI / 6),
      y2 - headLength * Math.sin(angle - Math.PI / 6),
    );
    ctx.lineTo(
      x2 - headLength * Math.cos(angle + Math.PI / 6),
      y2 - headLength * Math.sin(angle + Math.PI / 6),
    );
    ctx.lineTo(x2, y2);
    ctx.fillStyle = el.color;
    ctx.fill();
  }

  ctx.restore();
};
