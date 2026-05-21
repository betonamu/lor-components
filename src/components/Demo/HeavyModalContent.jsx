import { useEffect } from "react";
import Flex from "../Common/Flex";
import { use } from "react";

export default function HeavyModalContent({ onLoad, promise }) {
    const data = use(promise);
    console.log({ data });

    useEffect(() => {
        onLoad?.();
    }, [onLoad]);

    return (
        <div>
            <div style={infoBoxStyle}>
                <h4 style={{ color: "#38bdf8", marginTop: 0 }}>🚀 Dynamic Analysis Report</h4>
                <p style={{ fontSize: 14, lineHeight: 1.6 }}>
                    Báo cáo này được tải động qua mạng chỉ khi bạn nhấn nút mở Modal. 
                    Điều này giúp trang web chính nhẹ hơn khoảng <strong>~12kB</strong>.
                </p>
            </div>

            <Flex direction="col" gap={12} style={{ marginTop: 20 }}>
                {[
                    { label: "Security Audit", status: "Passed", score: 98 },
                    { label: "Performance Metrics", status: "Optimal", score: 94 },
                    { label: "Accessibility Check", status: "Verified", score: 100 },
                ].map((item) => (
                    <div key={item.label} style={rowStyle}>
                        <div style={{ flex: 1 }}>
                            <div style={{ fontWeight: 600, color: "#e2e8f0", fontSize: 14 }}>{item.label}</div>
                            <div style={{ fontSize: 12, color: "#64748b" }}>Status: {item.status}</div>
                        </div>
                        <div style={{ color: "#34d399", fontWeight: 700 }}>{item.score}%</div>
                    </div>
                ))}
            </Flex>

            <button style={actionButtonStyle}>Download Full Report (PDF)</button>
        </div>
    );
}

const infoBoxStyle = {
    padding: 16,
    borderRadius: 12,
    background: "#0f172a",
    border: "1px solid #334155",
};

const rowStyle = {
    display: "flex",
    alignItems: "center",
    padding: "12px 16px",
    background: "#1e293b",
    borderRadius: 8,
    border: "1px solid #334155",
};

const actionButtonStyle = {
    marginTop: 24,
    width: "100%",
    padding: "12px",
    borderRadius: 8,
    background: "linear-gradient(135deg, #38bdf8, #8b5cf6)",
    color: "white",
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
    transition: "opacity 0.2s",
};
