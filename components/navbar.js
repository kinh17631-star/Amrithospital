import { useState } from "react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  const links = [
    { name: "home", path: "/" },
    { name: "doctors", path: "/doctors" },
    { name: "patients", path: "/patients" },
    { name: "staff", path: "/staff" },
    { name: "appointment", path: "/appointment" }
  ];

  return (
    <nav style={nav}>
      
      <div style={logo}>
        amrit hospital
      </div>

      <div style={menu}>
        {links.map((link, i) => (
          <a key={i} href={link.path} style={linkStyle}>
            {link.name}
          </a>
        ))}
      </div>

      <div style={mobileBtn} onClick={() => setOpen(!open)}>
        ☰
      </div>

      {open && (
        <div style={mobileMenu}>
          {links.map((link, i) => (
            <a key={i} href={link.path} style={mobileLink}>
              {link.name}
            </a>
          ))}
        </div>
      )}

    </nav>
  );
}

/* STYLES */

const nav = {
  position: "sticky",
  top: 0,
  zIndex: 1000,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "15px 20px",
  background: "linear-gradient(90deg,#0d6efd,#4facfe)",
  color: "white",
  boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
};

const logo = {
  fontSize: "20px",
  fontWeight: "bold",
  textTransform: "uppercase"
};

const menu = {
  display: "flex",
  gap: "20px"
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500"
};

const mobileBtn = {
  display: "none",
  fontSize: "22px",
  cursor: "pointer"
};

const mobileMenu = {
  position: "absolute",
  top: "60px",
  right: "10px",
  background: "white",
  color: "#111",
  borderRadius: "10px",
  padding: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
};

const mobileLink = {
  display: "block",
  margin: "10px 0",
  color: "#111",
  textDecoration: "none"
};
