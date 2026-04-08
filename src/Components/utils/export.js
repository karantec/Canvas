export const exportJSON = (elements) => {
  const blob = new Blob([JSON.stringify(elements)], {
    type: "application/json",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = "drawing.json";
  a.click();
};
