export default function Sidebar() {
  return (
    <div style={container}>

      {/* WHATSAPP */}
      <a
        href="https://wa.me/919837537847"
        target="_blank"
        style={{ ...btn, background: "#25D366" }}
      >
        💬
      </a>

      {/* CALL */}
      <a
        href="tel:09837537847"
        style={{ ...btn, background: "#0d6efd" }}
      >
        📞
      </a>

      {/* APPOINTMENT */}
      <a
        href="/appointment"
        style={{ ...btn, background: "#ff4d4d" }}
      >
        🏥
      </a>

    </div>
  );
}

/* STYLES */

const container = {
  position: "fixed",
  right: "15px",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  zIndex: 1000
};

const btn = {
  width: "50px",
  height: "50px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "white",
  fontSize: "20px",
  textDecoration: "none",
  boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  transition: "0.3s",
  cursor: "pointer"
};
