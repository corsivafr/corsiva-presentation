interface Props {
  children: React.ReactNode;
  color?: string;
}

export default function EyebrowLabel({ children, color = "var(--accent-2)" }: Props) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        color,
        padding: "5px 12px",
        border: "1px solid var(--accent-line)",
        borderRadius: 20,
        background: "var(--accent-soft)",
      }}
    >
      {children}
    </span>
  );
}
