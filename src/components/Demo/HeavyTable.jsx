import { useEffect, useRef, useState } from "react";

const generateRows = (n) =>
    Array.from({ length: n }, (_, i) => ({
        id: i + 1,
        name: [
            "Nguyễn Văn A",
            "Trần Thị B",
            "Lê Văn C",
            "Phạm Thị D",
            "Hoàng Văn E",
        ][i % 5],
        status: ["Hoàn thành", "Đang xử lý", "Chờ duyệt", "Huỷ"][i % 4],
        amount: (Math.sin(i * 1.3) * 5 + 6).toFixed(2) + "M",
        date: `2024-${String((i % 12) + 1).padStart(2, "0")}-${String((i % 28) + 1).padStart(2, "0")}`,
        score: Math.floor(60 + (Math.cos(i) * 0.5 + 0.5) * 40),
    }));

const rows = generateRows(12);

const statusColor = {
    "Hoàn thành": "#34d399",
    "Đang xử lý": "#fbbf24",
    "Chờ duyệt": "#60a5fa",
    Huỷ: "#f87171",
};

export default function HeavyTable({ onLoad }) {
    const called = useRef(false);
    const [sortKey, setSortKey] = useState(null);
    const [asc, setAsc] = useState(true);

    useEffect(() => {
        if (!called.current) {
            called.current = true;
            onLoad?.();
        }
    }, [onLoad]);

    const sorted = sortKey
        ? [...rows].sort((a, b) =>
              asc
                  ? String(a[sortKey]).localeCompare(String(b[sortKey]))
                  : String(b[sortKey]).localeCompare(String(a[sortKey])),
          )
        : rows;

    const handleSort = (key) => {
        if (sortKey === key) setAsc(!asc);
        else {
            setSortKey(key);
            setAsc(true);
        }
    };

    const cols = [
        { key: "id", label: "#", w: 40 },
        { key: "name", label: "Tên khách hàng", w: 160 },
        { key: "status", label: "Trạng thái", w: 120 },
        { key: "amount", label: "Giá trị", w: 80 },
        { key: "date", label: "Ngày", w: 110 },
        { key: "score", label: "Điểm", w: 70 },
    ];

    return (
        <div style={{ padding: "20px 24px", background: "#0f172a" }}>
            <div style={{ marginBottom: 14 }}>
                <div
                    style={{ fontWeight: 700, color: "#a78bfa", fontSize: 15 }}
                >
                    Data Table
                </div>
                <div style={{ fontSize: 12, color: "#64748b" }}>
                    Click header để sắp xếp • {rows.length} bản ghi
                </div>
            </div>

            <div style={{ overflowX: "auto" }}>
                <table
                    style={{
                        width: "100%",
                        borderCollapse: "collapse",
                        fontSize: 13,
                    }}
                >
                    <thead>
                        <tr>
                            {cols.map((c) => (
                                <th
                                    key={c.key}
                                    onClick={() => handleSort(c.key)}
                                    style={{
                                        textAlign: "left",
                                        padding: "8px 10px",
                                        color:
                                            sortKey === c.key
                                                ? "#a78bfa"
                                                : "#64748b",
                                        fontWeight: 600,
                                        cursor: "pointer",
                                        borderBottom: "1px solid #1e293b",
                                        whiteSpace: "nowrap",
                                        userSelect: "none",
                                        width: c.w,
                                    }}
                                >
                                    {c.label}{" "}
                                    {sortKey === c.key ? (asc ? "↑" : "↓") : ""}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {sorted.map((row, i) => (
                            <tr
                                key={row.id}
                                style={{
                                    background:
                                        i % 2 === 0 ? "#0f172a" : "#1e293b22",
                                    borderBottom: "1px solid #1e293b",
                                    transition: "background 0.15s",
                                }}
                            >
                                <td style={tdStyle}>{row.id}</td>
                                <td style={tdStyle}>{row.name}</td>
                                <td style={tdStyle}>
                                    <span
                                        style={{
                                            fontSize: 11,
                                            padding: "2px 8px",
                                            borderRadius: 12,
                                            background:
                                                statusColor[row.status] + "22",
                                            color: statusColor[row.status],
                                            fontWeight: 600,
                                        }}
                                    >
                                        {row.status}
                                    </span>
                                </td>
                                <td
                                    style={{
                                        ...tdStyle,
                                        color: "#34d399",
                                        fontWeight: 600,
                                    }}
                                >
                                    {row.amount}
                                </td>
                                <td style={{ ...tdStyle, color: "#64748b" }}>
                                    {row.date}
                                </td>
                                <td style={tdStyle}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: 6,
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: 40,
                                                height: 4,
                                                borderRadius: 4,
                                                background: "#334155",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <div
                                                style={{
                                                    width: `${row.score}%`,
                                                    height: "100%",
                                                    background:
                                                        row.score >= 80
                                                            ? "#34d399"
                                                            : row.score >= 60
                                                              ? "#fbbf24"
                                                              : "#f87171",
                                                    borderRadius: 4,
                                                }}
                                            />
                                        </div>
                                        <span
                                            style={{
                                                fontSize: 12,
                                                color: "#94a3b8",
                                            }}
                                        >
                                            {row.score}
                                        </span>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const tdStyle = {
    padding: "8px 10px",
    color: "#e2e8f0",
};
