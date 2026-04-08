export const drawElement = (ctx, el, bgColor) => {
  ctx.save();

  const isDark =
    bgColor === "#0f172a" || bgColor === "#000000" || bgColor === "black";

  // 🖍 HIGHLIGHTER — neon glow on dark, flat marker on light
  if (el.type === "highlighter") {
    ctx.save();

    if (isDark) {
      // 🌟 NEON GLOW MODE
      ctx.globalCompositeOperation = "screen";
      ctx.globalAlpha = 0.85;
      ctx.strokeStyle = el.color;
      ctx.lineWidth = el.size * 3;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowColor = el.color;
      ctx.shadowBlur = el.size * 6;

      ctx.beginPath();
      el.points.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();

      // Wide soft halo pass for extra depth
      ctx.globalAlpha = 0.4;
      ctx.lineWidth = el.size * 7;
      ctx.stroke();
    } else {
      // 🖍 FLAT MARKER MODE
      ctx.globalCompositeOperation = "multiply";
      ctx.globalAlpha = 0.35;
      ctx.strokeStyle = el.color;
      ctx.lineWidth = el.size * 4;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.shadowBlur = 0;

      ctx.beginPath();
      el.points.forEach((p, i) => {
        if (i === 0) ctx.moveTo(p.x, p.y);
        else ctx.lineTo(p.x, p.y);
      });
      ctx.stroke();
    }

    ctx.restore();
    return;
  }

  // ✏️ PENCIL / BRUSH / ERASER
  if (el.type === "pencil" || el.type === "brush" || el.type === "eraser") {
    ctx.globalAlpha = el.opacity;
    ctx.strokeStyle = el.color;
    ctx.lineWidth = el.size;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    if (isDark && el.type !== "eraser") {
      ctx.shadowColor = el.color;
      ctx.shadowBlur = el.size * 2;
      ctx.globalCompositeOperation = "lighter";
    }

    ctx.beginPath();
    el.points.forEach((p, i) => {
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    });
    ctx.stroke();

    // Chalk core effect
    if (isDark && el.type !== "eraser") {
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 0.9;
      ctx.stroke();
    }

    ctx.globalCompositeOperation = "source-over";
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

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();

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
