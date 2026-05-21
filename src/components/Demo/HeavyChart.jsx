import { useEffect, useRef } from "react";

const data = [
  { month: "T1", value: 42, prev: 30 },
  { month: "T2", value: 58, prev: 45 },
  { month: "T3", value: 35, prev: 50 },
  { month: "T4", value: 78, prev: 60 },
  { month: "T5", value: 91, prev: 72 },
  { month: "T6", value: 64, prev: 55 },
  { month: "T7", value: 87, prev: 80 },
  { month: "T8", value: 72, prev: 68 },
  { month: "T9", value: 95, prev: 85 },
  { month: "T10", value: 60, prev: 70 },
  { month: "T11", value: 83, prev: 75 },
  { month: "T12", value: 99, prev: 90 },
];

const maxVal = 100;
const chartH = 160;
const chartW = 100;

export default function HeavyChart({ onLoad }) {
  const called = useRef(false);
  useEffect(() => {
    if (!called.current) {
      called.current = true;
      onLoad?.();
    }
  }, [onLoad]);

  return (
    <div style={{ padding: "20px 24px", background: "#0f172a" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <div>
          <div style={{ fontWeight: 700, color: "#38bdf8", fontSize: 15 }}>Performance Chart</div>
          <div style={{ fontSize: 12, color: "#64748b" }}>Revenue so sánh năm nay vs năm trước</div>
        </div>
        <div style={{ display: "flex", gap: 16 }}>
          <Legend color="#38bdf8" label="Năm nay" />
          <Legend color="#334155" label="Năm trước" />
        </div>
      </div>

      <div style={{ display: "flex", gap: 6, alignItems: "flex-end", height: chartH }}>
        {data.map((d) => (
          <div key={d.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 2, height: "100%" }}>
            <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end", gap: 2 }}>
              <div
                style={{
                  flex: 1,
                  borderRadius: "3px 3px 0 0",
                  background: "linear-gradient(180deg, #38bdf8, #0ea5e9)",
                  height: `${(d.prev / maxVal) * chartH}px`,
                  opacity: 0.35,
                  transition: "height 1s cubic-bezier(.4,0,.2,1)",
                }}
              />
              <div
                style={{
                  flex: 1,
                  borderRadius: "3px 3px 0 0",
                  background: "linear-gradient(180deg, #38bdf8, #0ea5e9)",
                  height: `${(d.value / maxVal) * chartH}px`,
                  transition: "height 1s cubic-bezier(.4,0,.2,1)",
                }}
              />
            </div>
            <div style={{ fontSize: 9, color: "#64748b", marginTop: 4 }}>{d.month}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", gap: 24, marginTop: 20 }}>
        {[
          { label: "Tổng doanh thu", value: "₫2.4B", delta: "+18%" },
          { label: "Tháng cao nhất", value: "T12 — ₫890M", delta: "+10%" },
          { label: "Tăng trưởng TB", value: "+9.2%/tháng", delta: "✓" },
        ].map((s) => (
          <div key={s.label} style={{ background: "#1e293b", borderRadius: 8, padding: "10px 14px", flex: 1 }}>
            <div style={{ fontSize: 11, color: "#64748b" }}>{s.label}</div>
            <div style={{ fontWeight: 700, color: "#e2e8f0", fontSize: 14 }}>{s.value}</div>
            <div style={{ fontSize: 11, color: "#34d399" }}>{s.delta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 11, color: "#94a3b8" }}>
      <div style={{ width: 10, height: 10, borderRadius: 2, background: color }} />
      {label}
    </div>
  );
}
