import { useState } from "react";

const App = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Hello, React + TypeScript</h1>
      <p style={styles.subtitle}>Edit this file to start building your app.</p>

      <div style={styles.card}>
        <p style={styles.countLabel}>Count: <strong>{count}</strong></p>
        <div style={styles.buttonRow}>
          <button style={styles.button} onClick={() => setCount((c) => c - 1)}>−</button>
          <button style={styles.button} onClick={() => setCount(0)}>Reset</button>
          <button style={styles.button} onClick={() => setCount((c) => c + 1)}>+</button>
        </div>
      </div>
    </div>
  );
};

const styles: Record<string, React.CSSProperties> = {
  container: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Segoe UI', sans-serif",
    backgroundColor: "#f5f5f5",
    padding: "2rem",
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    marginBottom: "0.5rem",
    color: "#111",
  },
  subtitle: {
    color: "#666",
    marginBottom: "2rem",
    fontSize: "1rem",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "2rem",
    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
    textAlign: "center",
    minWidth: "240px",
  },
  countLabel: {
    fontSize: "1.25rem",
    marginBottom: "1.25rem",
    color: "#333",
  },
  buttonRow: {
    display: "flex",
    gap: "0.75rem",
    justifyContent: "center",
  },
  button: {
    padding: "0.5rem 1.25rem",
    fontSize: "1rem",
    borderRadius: "8px",
    border: "1px solid #ddd",
    backgroundColor: "#fff",
    cursor: "pointer",
    transition: "background 0.2s",
  },
};

export default App;