import { lazy, Suspense, useState } from "react";
import Container from "@/components/Common/Container";
import Modal from "@/components/Common/Modal";

// ===== Lazy-loaded demo components =====
const HeavyChart = lazy(() =>
    simulateDelay(1200).then(() => import("@/components/Demo/HeavyChart")),
);
const HeavyTable = lazy(() =>
    simulateDelay(1800).then(() => import("@/components/Demo/HeavyTable")),
);
const HeavyGallery = lazy(() =>
    simulateDelay(1500).then(() => import("@/components/Demo/HeavyGallery")),
);
const HeavyModalContent = lazy(() =>
    simulateDelay(1000).then(() =>
        import("@/components/Demo/HeavyModalContent"),
    ),
);

function simulateDelay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

// ===== Loading skeleton =====
const Skeleton = ({ height = 220, label = "Đang tải..." }) => (
    <div style={skeletonWrapStyle}>
        <div style={{ ...skeletonBoxStyle, height }}>
            <div style={skeletonShineStyle} />
        </div>
        <p style={skeletonLabelStyle}>{label}</p>
    </div>
);

// ===== Bundle info card =====
const BundleCard = ({ name, size, color, loaded, time }) => (
    <div
        style={{ ...bundleCardStyle, borderColor: loaded ? color : "#334155" }}
    >
        <div
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
        >
            <span style={{ fontWeight: 700, fontSize: 15 }}>{name}</span>
            <span
                style={{
                    fontSize: 11,
                    padding: "2px 10px",
                    borderRadius: 20,
                    background: loaded ? color + "22" : "#1e293b",
                    color: loaded ? color : "#64748b",
                    border: `1px solid ${loaded ? color : "#334155"}`,
                    fontWeight: 600,
                    transition: "all 0.4s",
                }}
            >
                {loaded ? "✓ Đã tải" : "Chờ..."}
            </span>
        </div>
        <div
            style={{
                marginTop: 10,
                display: "flex",
                gap: 16,
                flexWrap: "wrap",
            }}
        >
            <Stat label="Bundle size" value={size} />
            {loaded && time && (
                <Stat label="Load time" value={`${time}ms`} color={color} />
            )}
        </div>
        <div style={{ marginTop: 12 }}>
            <div
                style={{
                    height: 4,
                    borderRadius: 4,
                    background: "#1e293b",
                    overflow: "hidden",
                }}
            >
                <div
                    style={{
                        height: "100%",
                        width: loaded ? "100%" : "0%",
                        background: `linear-gradient(90deg, ${color}, ${color}99)`,
                        transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
                        borderRadius: 4,
                    }}
                />
            </div>
        </div>
    </div>
);

const Stat = ({ label, value, color }) => (
    <div>
        <div style={{ fontSize: 11, color: "#64748b" }}>{label}</div>
        <div
            style={{ fontSize: 14, fontWeight: 600, color: color || "#e2e8f0" }}
        >
            {value}
        </div>
    </div>
);


// ===== Main Page =====
const promise = new Promise((res) => setTimeout(() => res("data"), 1000));
export default function CodeSplittingPage() {
    const [loaded, setLoaded] = useState({
        chart: false,
        table: false,
        gallery: false,
        modal: false,
    });
    const [times, setTimes] = useState({});
    const [show, setShow] = useState({
        chart: false,
        table: false,
        gallery: false,
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starts, setStarts] = useState({});

    const handleLoad = (key) => {
        const elapsed = Date.now() - (starts[key] || Date.now());
        setLoaded((prev) => ({ ...prev, [key]: true }));
        setTimes((prev) => ({ ...prev, [key]: elapsed }));
    };

    const toggleComponent = (key) => {
        if (!show[key]) {
            setStarts((prev) => ({ ...prev, [key]: Date.now() }));
        }
        setShow((prev) => ({ ...prev, [key]: !prev[key] }));
    };

    const resetAll = () => {
        setLoaded({
            chart: false,
            table: false,
            gallery: false,
            modal: false,
        });
        setTimes({});
        setShow({ chart: false, table: false, gallery: false });
        setStarts({});
        setIsModalOpen(false);
    };

    const bundles = [
        {
            key: "chart",
            name: "HeavyChart",
            size: "~42 kB",
            color: "#38bdf8",
            delay: "1.2s",
        },
        {
            key: "table",
            name: "HeavyTable",
            size: "~67 kB",
            color: "#a78bfa",
            delay: "1.8s",
        },
        {
            key: "gallery",
            name: "HeavyGallery",
            size: "~55 kB",
            color: "#34d399",
            delay: "1.5s",
        },
        {
            key: "modal",
            name: "HeavyModal",
            size: "~12 kB",
            color: "#f472b6",
            delay: "1.0s",
        },
    ];

    const allLoaded = loaded.chart && loaded.table && loaded.gallery;

    return (
        <div style={pageStyle}>
            <Container>
                {/* Hero */}
                <div style={heroStyle}>
                    <div style={badgeStyle}>⚡ React Code Splitting</div>
                    <h1 style={h1Style}>
                        Lazy Loading &{" "}
                        <span
                            style={{
                                background:
                                    "linear-gradient(135deg,#38bdf8,#a78bfa)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Code Splitting
                        </span>
                    </h1>
                    <p style={subtitleStyle}>
                        Demo trực quan về cách React chia nhỏ bundle và tải
                        component theo nhu cầu, giúp giảm thời gian tải trang
                        ban đầu đáng kể.
                    </p>
                </div>

                {/* Concept cards */}
                <div style={conceptGridStyle}>
                    {concepts.map((c) => (
                        <div key={c.title} style={conceptCardStyle}>
                            <div style={{ fontSize: 28, marginBottom: 8 }}>
                                {c.icon}
                            </div>
                            <div
                                style={{
                                    fontWeight: 700,
                                    marginBottom: 4,
                                    color: "#e2e8f0",
                                }}
                            >
                                {c.title}
                            </div>
                            <div
                                style={{
                                    fontSize: 13,
                                    color: "#94a3b8",
                                    lineHeight: 1.6,
                                }}
                            >
                                {c.desc}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Code snippet */}
                <div style={codeBlockStyle}>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            marginBottom: 12,
                        }}
                    >
                        <span style={{ fontSize: 12, color: "#64748b" }}>
                            code
                        </span>
                        <span
                            style={{
                                fontSize: 12,
                                fontWeight: 700,
                                color: "#38bdf8",
                            }}
                        >
                            lazy + Suspense pattern
                        </span>
                    </div>
                    <pre
                        style={preStyle}
                    >{`// ❌ Tải ngay lập tức — tăng bundle ban đầu
import HeavyChart from './HeavyChart';

// ✅ Tải khi cần — code splitting
const HeavyChart = lazy(() => import('./HeavyChart'));

// Wrap với Suspense để hiển thị fallback khi đang load
<Suspense fallback={<Skeleton />}>
  <HeavyChart />
</Suspense>`}</pre>
                </div>

                {/* Bundle tracker */}
                <div style={sectionStyle}>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: 20,
                        }}
                    >
                        <h2 style={h2Style}>📦 Bundle Tracker</h2>
                        <button onClick={resetAll} style={resetBtnStyle}>
                            ↺ Reset
                        </button>
                    </div>
                    <div style={bundleGridStyle}>
                        {bundles.map((b) => (
                            <BundleCard
                                key={b.key}
                                name={b.name}
                                size={b.size}
                                color={b.color}
                                loaded={loaded[b.key]}
                                time={times[b.key]}
                            />
                        ))}
                    </div>
                    {allLoaded && (
                        <div style={successBannerStyle}>
                            🎉 Tất cả 3 chunk đã được tải thành công! Tổng tiết
                            kiệm ~164 kB ở lần tải đầu.
                        </div>
                    )}
                </div>

                {/* Interactive demo */}
                <div style={sectionStyle}>
                    <h2 style={h2Style}>🚀 Demo Tương Tác</h2>
                    <p
                        style={{
                            color: "#64748b",
                            fontSize: 14,
                            marginBottom: 24,
                        }}
                    >
                        Click vào các nút bên dưới để tải từng component theo
                        nhu cầu. Quan sát Bundle Tracker thay đổi.
                    </p>

                    <div
                        style={{
                            display: "flex",
                            flexWrap: "wrap",
                            gap: 12,
                            marginBottom: 32,
                        }}
                    >
                        {bundles.map((b) => (
                            <button
                                key={b.key}
                                onClick={() => toggleComponent(b.key)}
                                style={{
                                    ...demoToggleBtnStyle,
                                    borderColor: b.color,
                                    color: show[b.key] ? "#0f172a" : b.color,
                                    background: show[b.key]
                                        ? b.color
                                        : "transparent",
                                }}
                            >
                                {show[b.key] ? "▼" : "▶"} {b.name}
                                <span
                                    style={{
                                        fontSize: 11,
                                        opacity: 0.7,
                                        marginLeft: 6,
                                    }}
                                >
                                    {b.delay}
                                </span>
                            </button>
                        ))}
                    </div>

                    {show.chart && (
                        <div style={demoSectionStyle}>
                            <div style={demoLabelStyle}>
                                📊 HeavyChart — lazy loaded
                            </div>
                            <Suspense
                                fallback={
                                    <Skeleton label="Đang tải HeavyChart (~42kB)..." />
                                }
                            >
                                <HeavyChartWrapper
                                    onLoad={() => handleLoad("chart")}
                                />
                            </Suspense>
                        </div>
                    )}

                    {show.table && (
                        <div style={demoSectionStyle}>
                            <div style={demoLabelStyle}>
                                📋 HeavyTable — lazy loaded
                            </div>
                            <Suspense
                                fallback={
                                    <Skeleton
                                        label="Đang tải HeavyTable (~67kB)..."
                                        height={180}
                                    />
                                }
                            >
                                <HeavyTableWrapper
                                    onLoad={() => handleLoad("table")}
                                />
                            </Suspense>
                        </div>
                    )}

                    {show.gallery && (
                        <div style={demoSectionStyle}>
                            <div style={demoLabelStyle}>
                                🖼️ HeavyGallery — lazy loaded
                            </div>
                            <Suspense
                                fallback={
                                    <Skeleton
                                        label="Đang tải HeavyGallery (~55kB)..."
                                        height={260}
                                    />
                                }
                            >
                                <HeavyGalleryWrapper
                                    onLoad={() => handleLoad("gallery")}
                                />
                            </Suspense>
                        </div>
                    )}

                    {/* Modal Demo Section */}
                    <div style={demoSectionStyle}>
                        <div style={demoLabelStyle}>
                            🪟 React Portal Modal — lazy loaded content
                        </div>
                        <div
                            style={{
                                padding: 24,
                                textAlign: "center",
                                background: "#0f172a",
                            }}
                        >
                            <p
                                style={{
                                    color: "#94a3b8",
                                    marginBottom: 20,
                                    fontSize: 14,
                                }}
                            >
                                Khi bạn nhấn nút dưới đây, một Modal sẽ được
                                render thông qua <strong>React Portal</strong>{" "}
                                (ngoài cây DOM hiện tại) và nội dung bên trong
                                nó được <strong>Lazy Load</strong>.
                            </p>
                            <button
                                onClick={() => {
                                    if (!loaded.modal)
                                        setStarts((prev) => ({
                                            ...prev,
                                            modal: Date.now(),
                                        }));
                                    setIsModalOpen(true);
                                }}
                                style={{
                                    padding: "12px 24px",
                                    borderRadius: 12,
                                    background: "#f472b6",
                                    color: "white",
                                    border: "none",
                                    fontWeight: 700,
                                    cursor: "pointer",
                                    boxShadow:
                                        "0 10px 15px -3px rgba(244, 114, 182, 0.3)",
                                }}
                            >
                                Open Lazy Modal
                            </button>
                        </div>
                    </div>

                    <Modal
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        title="Premium Analysis Report"
                    >
                        <Suspense
                            fallback={
                                <Skeleton
                                    label="Đang tải report..."
                                    height={200}
                                />
                            }
                        >
                            <HeavyModalContent
                                onLoad={() => handleLoad("modal")}
                                promise={promise}
                            />
                        </Suspense>
                    </Modal>
                </div>

                {/* When to use */}
                <div style={{ ...sectionStyle, marginBottom: 60 }}>
                    <h2 style={h2Style}>💡 Khi nào nên dùng?</h2>
                    <div style={tipsGridStyle}>
                        {tips.map((t) => (
                            <div key={t.title} style={tipCardStyle}>
                                <div
                                    style={{
                                        color: "#38bdf8",
                                        fontWeight: 700,
                                        marginBottom: 6,
                                    }}
                                >
                                    {t.title}
                                </div>
                                <div
                                    style={{
                                        color: "#94a3b8",
                                        fontSize: 13,
                                        lineHeight: 1.6,
                                    }}
                                >
                                    {t.desc}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    );
}

// Wrappers gọi onLoad sau khi render
function HeavyChartWrapper({ onLoad }) {
    return <HeavyChart onLoad={onLoad} />;
}
function HeavyTableWrapper({ onLoad }) {
    return <HeavyTable onLoad={onLoad} />;
}
function HeavyGalleryWrapper({ onLoad }) {
    return <HeavyGallery onLoad={onLoad} />;
}

// ===== Data =====
const concepts = [
    {
        icon: "✂️",
        title: "Code Splitting",
        desc: "Chia bundle JS thành nhiều chunk nhỏ, chỉ tải khi cần thiết.",
    },
    {
        icon: "😴",
        title: "Lazy Loading",
        desc: "Component chỉ được tải khi người dùng thực sự cần đến nó.",
    },
    {
        icon: "⏳",
        title: "Suspense",
        desc: "Hiển thị fallback UI trong khi component đang được tải về.",
    },
    {
        icon: "📉",
        title: "Giảm Bundle",
        desc: "Giảm kích thước bundle ban đầu, cải thiện Time-to-Interactive.",
    },
];

const tips = [
    {
        title: "✅ Route-level splitting",
        desc: "Tách từng page thành chunk riêng — đây là cách phổ biến và hiệu quả nhất.",
    },
    {
        title: "✅ Heavy components",
        desc: "Chart, Table, Editor, Map — các component nặng chỉ hiển thị theo điều kiện.",
    },
    {
        title: "✅ Modal / Drawer",
        desc: "Tải code của modal chỉ khi người dùng mở lần đầu.",
    },
    {
        title: "❌ Components nhỏ",
        desc: "Overhead network request có thể lớn hơn lợi ích nếu component quá nhỏ.",
    },
];

// ===== Styles =====
const pageStyle = {
    minHeight: "100vh",
    background:
        "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)",
    color: "#e2e8f0",
    paddingTop: 40,
    fontFamily: "'Inter', 'Segoe UI', sans-serif",
};

const heroStyle = { textAlign: "center", paddingBottom: 48 };

const badgeStyle = {
    display: "inline-block",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
    padding: "4px 16px",
    borderRadius: 20,
    background: "linear-gradient(135deg,#38bdf822,#a78bfa22)",
    border: "1px solid #38bdf844",
    color: "#38bdf8",
    marginBottom: 16,
};

const h1Style = {
    fontSize: "clamp(28px,5vw,52px)",
    fontWeight: 800,
    lineHeight: 1.2,
    margin: "0 0 16px",
};

const subtitleStyle = {
    fontSize: 16,
    color: "#94a3b8",
    maxWidth: 560,
    margin: "0 auto",
};

const conceptGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 16,
    marginBottom: 32,
};

const conceptCardStyle = {
    background: "#1e293b",
    border: "1px solid #334155",
    borderRadius: 12,
    padding: "20px 18px",
    transition: "border-color 0.3s",
};

const codeBlockStyle = {
    background: "#0f172a",
    border: "1px solid #334155",
    borderRadius: 12,
    padding: 24,
    marginBottom: 32,
    fontFamily: "monospace",
};

const preStyle = {
    margin: 0,
    color: "#94a3b8",
    fontSize: 13,
    lineHeight: 1.8,
    whiteSpace: "pre-wrap",
    wordBreak: "break-word",
};

const sectionStyle = { marginBottom: 40 };

const h2Style = {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 4,
    color: "#e2e8f0",
};

const resetBtnStyle = {
    fontSize: 13,
    fontWeight: 600,
    padding: "6px 16px",
    borderRadius: 8,
    border: "1px solid #334155",
    background: "transparent",
    color: "#64748b",
    cursor: "pointer",
};

const bundleGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: 16,
};

const bundleCardStyle = {
    background: "#1e293b",
    border: "1px solid",
    borderRadius: 12,
    padding: "16px 18px",
    transition: "border-color 0.5s",
};

const successBannerStyle = {
    marginTop: 16,
    padding: "12px 20px",
    background: "linear-gradient(135deg,#05966922,#38bdf822)",
    border: "1px solid #059669",
    borderRadius: 10,
    color: "#34d399",
    fontWeight: 600,
    fontSize: 14,
};

const demoToggleBtnStyle = {
    padding: "10px 20px",
    borderRadius: 10,
    border: "1px solid",
    cursor: "pointer",
    fontWeight: 700,
    fontSize: 13,
    transition: "all 0.25s",
    fontFamily: "inherit",
};

const demoSectionStyle = {
    marginBottom: 24,
    borderRadius: 12,
    border: "1px solid #334155",
    overflow: "hidden",
};

const demoLabelStyle = {
    background: "#1e293b",
    padding: "8px 16px",
    fontSize: 12,
    fontWeight: 700,
    color: "#64748b",
    borderBottom: "1px solid #334155",
};

const skeletonWrapStyle = { padding: "16px" };

const skeletonBoxStyle = {
    borderRadius: 8,
    background: "linear-gradient(90deg,#1e293b 25%,#334155 50%,#1e293b 75%)",
    backgroundSize: "400% 100%",
    animation: "shimmer 1.5s infinite",
    position: "relative",
    overflow: "hidden",
};

const skeletonShineStyle = {
    position: "absolute",
    inset: 0,
    background: "linear-gradient(90deg, transparent, #ffffff08, transparent)",
    animation: "shimmer 1.5s infinite",
};

const skeletonLabelStyle = {
    marginTop: 10,
    fontSize: 13,
    color: "#64748b",
    textAlign: "center",
};

const tipsGridStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 16,
};

const tipCardStyle = {
    background: "#1e293b",
    border: "1px solid #334155",
    borderRadius: 10,
    padding: "14px 16px",
};
