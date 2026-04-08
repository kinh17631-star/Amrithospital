export default function Hero() {
  return (
    <section style={container}>

      <div style={overlay}></div>

      <div style={content}>
        <h1 className="slide-left" style={heading}>
          Your Health Is <br /> Our Top Priority
        </h1>

        <p className="slide-right" style={text}>
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
  position: "relative",
  width: "100%",
  height: "90vh",
  backgroundImage: "url('/hospital.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const overlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)"
};

const content = {
  position: "relative",
  color: "white",
  textAlign: "center",
  zIndex: 2
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
  background: "#0d6efd",
  color: "white"
};
