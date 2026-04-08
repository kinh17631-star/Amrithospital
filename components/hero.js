export default function Hero() {
  return (
    <section style={container}>

      {/* LEFT CONTENT */}
      <div style={content}>

        <h1 style={heading}>
          Advanced Healthcare <br /> You Can Trust
        </h1>

        <p style={text}>
          Amrit Hospital provides world-class medical services with
          experienced doctors, modern facilities, and 24/7 emergency care.
        </p>

        <div style={btnGroup}>
          <a href="/appointment">
            <button style={primaryBtn}>Book Appointment</button>
          </a>

          <a href="/doctors">
            <button style={secondaryBtn}>View Doctors</button>
          </a>
        </div>

      </div>

      {/* RIGHT IMAGE */}
      <div style={imageBox}>
        <img
          src="/hospital.jpg"
          alt="hospital"
          style={image}
        />
      </div>

    </section>
  );
}

/* STYLES */

const container = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "80px 20px",
  background: "linear-gradient(135deg,#e3f2fd,#ffffff)"
};

const content = {
  flex: "1",
  minWidth: "300px"
};

const heading = {
  fontSize: "42px",
  marginBottom: "20px",
  color: "#0d6efd"
};

const text = {
  fontSize: "16px",
  marginBottom: "25px",
  color: "#555",
  lineHeight: "1.6"
};

const btnGroup = {
  display: "flex",
  gap: "15px",
  flexWrap: "wrap"
};

const primaryBtn = {
  padding: "12px 25px",
  background: "#0d6efd",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer"
};

const secondaryBtn = {
  padding: "12px 25px",
  background: "white",
  color: "#0d6efd",
  border: "2px solid #0d6efd",
  borderRadius: "8px",
  cursor: "pointer"
};

const imageBox = {
  flex: "1",
  minWidth: "300px",
  textAlign: "center"
};

const image = {
  width: "100%",
  maxWidth: "400px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)"
};
