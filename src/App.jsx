import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Toolbar from "./Components/Toolbar";
import Canvas from "./Components/Canvas";
import { useCanvas } from "./Components/hooks/Canvas";

export default function App() {
  const [tool, setTool] = useState("pencil");
  const [color, setColor] = useState("#1a1a1a");
  const [brushSize, setBrushSize] = useState(6);
  const [opacity, setOpacity] = useState(1);
  const [fillShape, setFillShape] = useState(false);
  const [zoom, setZoom] = useState(1);

  const [slides, setSlides] = useState([[]]);
  const [currentSlide, setCurrentSlide] = useState(0);

  const [history, setHistory] = useState([[]]);
  const [redoStack, setRedoStack] = useState([]);

  // ✅ FIXED: handles function updater correctly
  const setElements = (updater) => {
    const current = slides[currentSlide] || [];

    const newElements =
      typeof updater === "function" ? updater(current) : updater;

    const updatedSlides = [...slides];
    updatedSlides[currentSlide] = newElements;
    setSlides(updatedSlides);

    setHistory((prev) => [...prev, newElements]);
    setRedoStack([]);
  };

  const { canvasRef, startDraw, draw, endDraw, clearCanvas } =
  useCanvas({
    tool,
    color,
    fillShape,
    brushSize,
    opacity,
    setElements,
  });

  const addSlide = () => {
    setSlides([...slides, []]);
    setCurrentSlide(slides.length);
  };

  const changeSlide = (i) => {
    setCurrentSlide(i);
  };

  const handleUndo = () => {
    if (history.length < 2) return;

    const newHistory = [...history];
    const last = newHistory.pop();

    setRedoStack((r) => [...r, last]);
    setHistory(newHistory);

    const prev = newHistory[newHistory.length - 1] || [];
    setElements(prev);
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;

    const next = redoStack.pop();
    setRedoStack([...redoStack]);

    setElements(next);
  };

  const handleSave = () => {
    const a = document.createElement("a");
    a.download = `slide-${currentSlide + 1}.png`;
    a.href = canvasRef.current.toDataURL();
    a.click();
  };

  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.key === "z") handleUndo();
      if (e.ctrlKey && e.key === "y") handleRedo();
    };

    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [history, redoStack]);

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar
        tool={tool}
        setTool={setTool}
        onClear={clearCanvas}
        onUndo={handleUndo}
        onRedo={handleRedo}
        onSave={handleSave}
      />

      <div className="flex flex-col flex-1">
        <Toolbar
          tool={tool}
          setTool={setTool}
          color={color}
          setColor={setColor}
          brushSize={brushSize}
          setBrushSize={setBrushSize}
          opacity={opacity}
          setOpacity={setOpacity}
          fillShape={fillShape}
          setFillShape={setFillShape}
          zoom={zoom}
          setZoom={setZoom}
        />

        <Canvas
          canvasRef={canvasRef}
          startDraw={startDraw}
          draw={draw}
          endDraw={endDraw}
          elements={slides[currentSlide] || []}
        />

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-white p-2 rounded shadow">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => changeSlide(i)}
              className={`px-3 py-1 rounded ${
                i === currentSlide
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={addSlide}
            className="bg-green-500 text-white px-3 py-1 rounded"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}