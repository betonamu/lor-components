import { useEffect } from "react";
import { createPortal } from "react-dom";
import Flex from "./Flex";

const Modal = ({ isOpen, onClose, title, children, maxWidth = 500 }) => {
    // Đóng modal khi nhấn phím Esc
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            // Chặn scroll body khi mở modal
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div style={overlayStyle} onClick={onClose}>
            <div
                style={{ ...modalStyle, maxWidth }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <Flex align="center" justify="space-between" style={headerStyle}>
                    <h3 style={titleStyle}>{title}</h3>
                    <button onClick={onClose} style={closeBtnStyle}>
                        ✕
                    </button>
                </Flex>

                {/* Content */}
                <div style={contentStyle}>{children}</div>
            </div>
        </div>,
        document.body
    );
};

// ===== Styles =====
const overlayStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    backdropFilter: "blur(4px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: 20,
};

const modalStyle = {
    backgroundColor: "#1e293b",
    border: "1px solid #334155",
    borderRadius: 16,
    width: "100%",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    overflow: "hidden",
    animation: "modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
};

const headerStyle = {
    padding: "16px 24px",
    borderBottom: "1px solid #334155",
    background: "#1e293b",
};

const titleStyle = {
    margin: 0,
    fontSize: 18,
    fontWeight: 700,
    color: "#e2e8f0",
};

const closeBtnStyle = {
    background: "transparent",
    border: "none",
    color: "#94a3b8",
    fontSize: 18,
    cursor: "pointer",
    padding: 4,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "color 0.2s",
};

const contentStyle = {
    padding: 24,
    color: "#94a3b8",
};

// Cần thêm keyframe vào CSS hoặc inject style
const styleTag = document.createElement("style");
styleTag.innerHTML = `
    @keyframes modalFadeIn {
        from { opacity: 0; transform: scale(0.95) translateY(10px); }
        to { opacity: 1; transform: scale(1) translateY(0); }
    }
`;
document.head.appendChild(styleTag);

export default Modal;
