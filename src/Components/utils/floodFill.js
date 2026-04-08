function floodFill(ctx, canvas, startX, startY, fillColor) {
  const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const d = imgData.data;
  const W = canvas.width;
  const idx = (y, x) => (y * W + x) * 4;
  const i0 = idx(startY, startX);
  const [r0, g0, b0, a0] = [d[i0], d[i0 + 1], d[i0 + 2], d[i0 + 3]];
  const fr = parseInt(fillColor.slice(1, 3), 16);
  const fg = parseInt(fillColor.slice(3, 5), 16);
  const fb = parseInt(fillColor.slice(5, 7), 16);
  if (r0 === fr && g0 === fg && b0 === fb) return;
  const match = (i) =>
    Math.abs(d[i] - r0) < 30 &&
    Math.abs(d[i + 1] - g0) < 30 &&
    Math.abs(d[i + 2] - b0) < 30 &&
    Math.abs(d[i + 3] - a0) < 30;
  const stack = [[startX, startY]];
  while (stack.length) {
    const [x, y] = stack.pop();
    if (x < 0 || x >= W || y < 0 || y >= canvas.height) continue;
    const i = idx(y, x);
    if (!match(i)) continue;
    d[i] = fr;
    d[i + 1] = fg;
    d[i + 2] = fb;
    d[i + 3] = 255;
    stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
  }
  ctx.putImageData(imgData, 0, 0);
}
