import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Toolbar from "./Components/Toolbar";
import Canvas from "./Components/Canvas";
import { useCanvas } from "./Components/Hooks/Canvas";

export default function App() {
  const [tool, setTool] = useState("pencil");
  const [color, setColor] = useState("#1a1a1a");
  const [brushSize, setBrushSize] = useState(6);
  const [opacity, setOpacity] = useState(1);
  const [fillShape, setFillShape] = useState(false);

  const {
    canvasRef,
    startDraw,
    draw,
    endDraw,
    handleUndo,
    handleRedo,
    clearCanvas,
  } = useCanvas({
    tool,
    color,
    brushSize,
    opacity,
    fillShape,
  });

  // ✅ Save canvas as image
  const handleSave = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const link = document.createElement("a");
    link.download = "sketch.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  // ✅ Keyboard shortcuts (Undo/Redo)
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key.toLowerCase() === "z") {
        e.preventDefault();
        handleUndo();
      }
      if (e.ctrlKey && e.key.toLowerCase() === "y") {
        e.preventDefault();
        handleRedo();
      }
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [handleUndo, handleRedo]);

  return (
    <div className="flex h-screen overflow-hidden font-sans">
      {/* Sidebar */}
      <Sidebar
        tool={tool}
        setTool={setTool}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onClear={clearCanvas}
        onSave={handleSave}
      />

      {/* Main Area */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Toolbar */}
        <Toolbar
          color={color}
          setColor={setColor}
          brushSize={brushSize}
          setBrushSize={setBrushSize}
          opacity={opacity}
          setOpacity={setOpacity}
          fillShape={fillShape}
          setFillShape={setFillShape}
        />

        {/* Canvas */}
        <div className="flex-1 bg-gray-100">
          <Canvas
            canvasRef={canvasRef}
            startDraw={startDraw}
            draw={draw}
            endDraw={endDraw}
          />
        </div>
      </div>
    </div>
  );
}
