export default function Stats() {

  const data = [
    { number: "1000+", label: "Happy Patients" },
    { number: "50+", label: "Expert Doctors" },
    { number: "24/7", label: "Emergency Service" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <section style={container}>

      {data.map((item, i) => (
        <div key={i} style={card}>
          <h2 style={number}>{item.number}</h2>
          <p style={label}>{item.label}</p>
        </div>
      ))}

    </section>
  );
}

/* STYLES */

const container = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
  gap: "20px",
  padding: "60px 20px",
  background: "#ffffff"
};

const card = {
  textAlign: "center",
  padding: "25px",
  borderRadius: "15px",
  background: "#f8fbff",
  boxShadow: "0 8px 25px rgba(0,0,0,0.05)",
  transition: "0.3s"
};

const number = {
  fontSize: "32px",
  color: "#0d6efd",
  marginBottom: "10px"
};

const label = {
  fontSize: "14px",
  color: "#555"
};
