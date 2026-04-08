const TOOLS = [
  { id: "select", label: "🖱" },
  { id: "pencil", label: "✏️" },
  { id: "brush", label: "🖌" },
  { id: "highlighter", label: "🖍" }, // ✅ NEW
  { id: "eraser", label: "🧽" },
  { id: "line", label: "📏" },
  { id: "rect", label: "⬛" },
  { id: "ellipse", label: "⚪" },
  { id: "arrow", label: "➡️" },
  { id: "pan", label: "✋" },
  { id: "crop", label: "✂️" }
];

export default function Toolbar({
  tool, setTool,
  color, setColor,
  brushSize, setBrushSize,
  opacity, setOpacity,
  fillShape, setFillShape,
  zoom, setZoom,
  bgColor, setBgColor // ✅ NEW
}) {
  return (
    <div className="h-14 flex items-center gap-3 px-4 bg-white border-b flex-wrap">

      {/* 🔧 TOOLS */}
      <div className="flex gap-2">
        {TOOLS.map((t) => (
          <button
            key={t.id}
            title={t.id}
            onClick={() => setTool(t.id)}
            className={`w-10 h-10 flex items-center justify-center rounded-lg text-lg
              ${tool === t.id
                ? "bg-blue-500 text-white shadow"
                : "bg-gray-200 hover:bg-gray-300"
              }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {/* 🎨 COLOR */}
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-10 h-10 border rounded"
      />

      {/* 🖌 SIZE */}
      <div className="flex items-center gap-1">
        <span className="text-xs">Size</span>
        <input
          type="range"
          min="1"
          max="60"
          value={brushSize}
          onChange={(e) => setBrushSize(+e.target.value)}
        />
      </div>

      {/* 🌫 OPACITY */}
      <div className="flex items-center gap-1">
        <span className="text-xs">Opacity</span>
        <input
          type="range"
          min="0.1"
          max="1"
          step="0.1"
          value={opacity}
          onChange={(e) => setOpacity(+e.target.value)}
        />
      </div>

      {/* 🧱 FILL */}
      <label className="flex items-center gap-1 text-sm">
        <input
          type="checkbox"
          checked={fillShape}
          onChange={(e) => setFillShape(e.target.checked)}
        />
        Fill
      </label>

      {/* 🔍 ZOOM */}
      <div className="flex items-center gap-1">
        <span className="text-xs">Zoom</span>
        <input
          type="range"
          min="0.5"
          max="2"
          step="0.1"
          value={zoom}
          onChange={(e) => setZoom(+e.target.value)}
        />
      </div>

      {/* 🎨 BACKGROUND */}
      <div className="flex gap-2 items-center">
        <span className="text-xs">BG</span>

        <button
          onClick={() => setBgColor("#ffffff")}
          className="w-6 h-6 bg-white border"
        />

        <button
          onClick={() => setBgColor("#0f172a")}
          className="w-6 h-6 bg-gray-900"
        />

        <button
          onClick={() => setBgColor("transparent")}
          className="w-6 h-6 border"
        />
      </div>
    </div>
  );
}