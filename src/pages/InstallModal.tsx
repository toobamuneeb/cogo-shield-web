import { useState, useEffect } from "react";

export default function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [show, setShow] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    // iOS detection
    const iOS = /iphone|ipad|ipod/i.test(navigator.userAgent);
    const inStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (navigator as any).standalone === true;

    if (iOS && !inStandalone) {
      setIsIOS(true);
      setShow(true);
    }

   
    const handler = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShow(true);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const install = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h3>Install App</h3>

        {isIOS ? (
          <p>
            Tap the <b>Share</b> icon → <b>Add to Home Screen</b>
          </p>
        ) : (
          <>
            <p>Install this app on your device.</p>
            <button onClick={install} style={styles.button}>
              Install
            </button>
          </>
        )}

        <button onClick={() => setShow(false)} style={styles.close}>
          Close
        </button>
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,0.5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10000,
  },
  modal: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    width: "280px",
  },
  button: {
    width: "100%",
    padding: "10px",
    background: "#4a90e2",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
  close: {
    width: "100%",
    padding: "10px",
    background: "#ccc",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
};
