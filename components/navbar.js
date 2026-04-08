import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <nav style={nav}>

      <div style={logo}>AMRIT HOSPITAL</div>

      <div style={menu}>
        <a href="/">home</a>
        <a href="/doctors">doctors</a>
        <a href="/patients">patients</a>
        <a href="/staff">staff</a>
        <a href="/appointment">appointment</a>
      </div>

      <div style={btn} onClick={() => setOpen(!open)}>☰</div>

    </nav>
  );
}

/* STYLES */

const nav = {
  width: "100%",          // ✅ FIX
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 20px",
  background: "linear-gradient(90deg,#0d6efd,#4facfe)",
  color: "white"
};

const logo = {
  fontWeight: "bold"
};

const menu = {
  display: "flex",
  gap: "15px"
};

const btn = {
  fontSize: "22px",
  cursor: "pointer"
};
