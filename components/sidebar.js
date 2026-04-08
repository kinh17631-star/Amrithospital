import { useState } from "react";

export default function Sidebar() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <div style={hamburger} onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div style={{
        ...panel,
        right: open ? "0" : "-260px"
      }}>

        <a href="https://wa.me/919837537847" style={{ ...btn, background: "#25D366" }}>
          WhatsApp
        </a>

        <a href="tel:09837537847" style={{ ...btn, background: "#0d6efd" }}>
          Call
        </a>

        <a href="/appointment" style={{ ...btn, background: "#ff4d4d" }}>
          Appointment
        </a>

      </div>
    </>
  );
}

/* STYLES */

const hamburger = {
  position: "fixed",
  top: "20px",
  right: "20px",
  fontSize: "26px",
  cursor: "pointer",
  zIndex: 2000,
  background: "#0d6efd",
  color: "white",
  padding: "8px 12px",
  borderRadius: "8px"
};

const panel = {
  position: "fixed",
  top: 0,
  right: "-260px",
  height: "100%",
  width: "250px",
  background: "white",
  boxShadow: "-5px 0 20px rgba(0,0,0,0.1)",
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  gap: "15px",
  transition: "0.4s ease"
};

const btn = {
  padding: "12px",
  color: "white",
  textDecoration: "none",
  borderRadius: "8px",
  textAlign: "center",
  transition: "0.3s"
};
