const TOOLS = [
  { id: "pencil", label: "Pencil" },
  { id: "brush",  label: "Brush"  },
  { id: "eraser", label: "Eraser" },
  { id: "fill",   label: "Fill"   },
  { id: "line",   label: "Line"   },
  { id: "rect",   label: "Rect"   },
  { id: "ellipse",label: "Ellipse"},
  { id: "arrow",  label: "Arrow"  },
  { id: "text",   label: "Text"   },
];

export default function Sidebar({ tool, setTool, onUndo, onRedo, onClear, onSave }) {
  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-2 gap-1">
      {TOOLS.map((t) => (
        <button
          key={t.id}
          title={t.label}
          onClick={() => setTool(t.id)}
          className={`w-11 h-11 rounded-lg flex items-center justify-center text-sm transition-all
            ${tool === t.id
              ? "bg-blue-100 text-blue-600 border border-blue-300"
              : "text-gray-500 hover:bg-gray-100 border border-transparent"
            }`}
        >
          {t.label.slice(0, 3)}
        </button>
      ))}
      <hr className="w-8 my-1 border-gray-200" />
      <button onClick={onUndo} className="w-11 h-11 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100">↩</button>
      <button onClick={onRedo} className="w-11 h-11 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100">↪</button>
      <button onClick={onClear} className="w-11 h-11 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100">🗑</button>
      <button onClick={onSave} className="w-11 h-11 rounded-lg flex items-center justify-center text-gray-500 hover:bg-gray-100">💾</button>
    </div>
  );
}