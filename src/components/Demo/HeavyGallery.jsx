import { useEffect, useRef, useState } from "react";

const palette = [
  ["#38bdf8", "#0ea5e9"],
  ["#a78bfa", "#8b5cf6"],
  ["#34d399", "#10b981"],
  ["#fbbf24", "#f59e0b"],
  ["#f87171", "#ef4444"],
  ["#fb923c", "#f97316"],
];

const items = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: ["React Hooks", "Vite Setup", "TypeScript", "Zustand", "Framer Motion", "Code Split", "Lazy Load", "Suspense", "Bundle Opt"][i],
  tag: ["Framework", "Tooling", "Language", "State", "Animation", "Performance", "Loading", "UX", "Build"][i],
  views: Math.floor(Math.random() * 9000 + 1000),
  likes: Math.floor(Math.random() * 400 + 50),
  color: palette[i % palette.length],
}));

export default function HeavyGallery({ onLoad }) {
  const called = useRef(false);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    if (!called.current) {
      called.current = true;
      onLoad?.();
    }
  }, [onLoad]);

  return (
    <div style={{ padding: "20px 24px", background: "#0f172a" }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontWeight: 700, color: "#34d399", fontSize: 15 }}>Media Gallery</div>
        <div style={{ fontSize: 12, color: "#64748b" }}>Click card để xem chi tiết • {items.length} items</div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
          gap: 12,
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelected(selected?.id === item.id ? null : item)}
            style={{
              borderRadius: 12,
              overflow: "hidden",
              cursor: "pointer",
              border: selected?.id === item.id ? `2px solid ${item.color[0]}` : "2px solid transparent",
              transition: "all 0.25s",
              transform: selected?.id === item.id ? "scale(1.03)" : "scale(1)",
            }}
          >
            {/* thumbnail */}
            <div
              style={{
                height: 90,
                background: `linear-gradient(135deg, ${item.color[0]}, ${item.color[1]})`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 28,
                position: "relative",
              }}
            >
              {["⚛️", "⚡", "🔷", "🐻", "🎭", "✂️", "😴", "⏳", "📦"][item.id - 1]}
              <div
                style={{
                  position: "absolute",
                  top: 6,
                  right: 6,
                  fontSize: 9,
                  padding: "2px 6px",
                  borderRadius: 10,
                  background: "#00000044",
                  color: "#fff",
                  fontWeight: 700,
                  backdropFilter: "blur(4px)",
                }}
              >
                {item.tag}
              </div>
            </div>
            {/* info */}
            <div style={{ background: "#1e293b", padding: "8px 10px" }}>
              <div style={{ fontWeight: 700, fontSize: 12, color: "#e2e8f0", marginBottom: 4 }}>{item.title}</div>
              <div style={{ display: "flex", gap: 8, fontSize: 11, color: "#64748b" }}>
                <span>👁 {item.views.toLocaleString()}</span>
                <span>❤️ {item.likes}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div
          style={{
            marginTop: 16,
            padding: "14px 16px",
            borderRadius: 10,
            background: `linear-gradient(135deg, ${selected.color[0]}11, ${selected.color[1]}11)`,
            border: `1px solid ${selected.color[0]}55`,
          }}
        >
          <div style={{ fontWeight: 700, color: selected.color[0], marginBottom: 4 }}>
            {selected.title} — Chi tiết
          </div>
          <div style={{ fontSize: 13, color: "#94a3b8" }}>
            Tag: <strong>{selected.tag}</strong> · Lượt xem: <strong>{selected.views.toLocaleString()}</strong> · Likes: <strong>{selected.likes}</strong>
          </div>
          <div style={{ marginTop: 8, fontSize: 12, color: "#64748b" }}>
            Component này được lazy-loaded và chỉ xuất hiện sau khi user tương tác. Bundle size giảm đáng kể so với import tĩnh.
          </div>
        </div>
      )}
    </div>
  );
}
