import { useEffect, useState } from "react";

export default function InstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handler = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setVisible(true);
        };

        window.addEventListener("beforeinstallprompt", handler);

        return () => window.removeEventListener("beforeinstallprompt", handler);
    }, []);

    const handleInstall = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.finally(() => {
                setDeferredPrompt(null);
                setVisible(false);
            });
        }
    };

    if (!visible) return null;

    return (
        <div style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            background: "#000",
            color: "#fff",
            padding: "10px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            zIndex: 1000
        }}>
            <span>Install Africa's Campus Battle App?</span>
            <button onClick={handleInstall} style={{ background: "#fff", color: "#000", padding: "5px 10px", borderRadius: "5px" }}>
                Open in App
            </button>
        </div>
    );
}
