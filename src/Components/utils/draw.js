export const drawElement = (ctx, el) => {
  if (!el) return;

  ctx.globalAlpha = el.opacity || 1;
  ctx.strokeStyle = el.color;
  ctx.fillStyle = el.color;
  ctx.lineWidth = el.size || 2;

  // ✏️ Free draw
  if (el.points) {
    if (el.points.length < 2) return;

    ctx.beginPath();
    ctx.moveTo(el.points[0].x, el.points[0].y);

    for (let i = 1; i < el.points.length; i++) {
      ctx.lineTo(el.points[i].x, el.points[i].y);
    }

    ctx.stroke();
    return;
  }

  const { x, y, w, h, type, fill } = el;

  // 🟦 RECT
  if (type === "rect") {
    ctx.strokeRect(x, y, w, h);
    if (fill) ctx.fillRect(x, y, w, h);
  }

  // 📏 LINE
  else if (type === "line") {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + w, y + h);
    ctx.stroke();
  }

  // ⚪ ELLIPSE
  else if (type === "ellipse") {
    ctx.beginPath();
    ctx.ellipse(
      x + w / 2,
      y + h / 2,
      Math.abs(w / 2),
      Math.abs(h / 2),
      0,
      0,
      2 * Math.PI,
    );
    ctx.stroke();
    if (fill) ctx.fill();
  }

  // ➡️ ARROW
  else if (type === "arrow") {
    const endX = x + w;
    const endY = y + h;

    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(endX, endY);
    ctx.stroke();
  }

  ctx.globalAlpha = 1; // reset
};
