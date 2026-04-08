export default function Hero() {
  return (
    <section style={container}>

      <div style={content}>
        <h1 style={heading}>
          Your Health Is <br /> Our Top Priority
        </h1>

        <p style={text}>
          Advanced healthcare with expert doctors
        </p>

        <a href="/appointment">
          <button style={btn}>Book Appointment</button>
        </a>
      </div>

    </section>
  );
}

/* STYLES */

const container = {
  width: "100%",              // ✅ FIX
  minHeight: "90vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "80px 20px",
  background: "linear-gradient(135deg,#0d6efd,#4facfe)",
  margin: "0"                 // ✅ FIX
};

const content = {
  textAlign: "center",
  color: "white",
  maxWidth: "600px"
};

const heading = {
  fontSize: "40px",
  marginBottom: "20px"
};

const text = {
  marginBottom: "20px"
};

const btn = {
  padding: "12px 25px",
  borderRadius: "10px",
  border: "none",
  background: "white",
  color: "#0d6efd"
};
