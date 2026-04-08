export const isInside = (x, y, el) => {
  return x >= el.x && x <= el.x + el.w && y >= el.y && y <= el.y + el.h;
};
