export default function Services() {

  const services = [
    {
      title: "Cardiology",
      desc: "Heart related treatments with advanced technology."
    },
    {
      title: "Neurology",
      desc: "Brain and nerve system specialist doctors."
    },
    {
      title: "Orthopedics",
      desc: "Bone and joint care with expert surgeons."
    },
    {
      title: "Pediatrics",
      desc: "Complete healthcare for children."
    },
    {
      title: "Emergency Care",
      desc: "24/7 emergency support available."
    },
    {
      title: "Laboratory",
      desc: "Accurate and fast testing services."
    }
  ];

  return (
    <section style={container}>

      <h2 style={heading}>Our Services</h2>

      <div style={grid}>
        {services.map((item, i) => (
          <div key={i} style={card} className="card-hover fade-up">

            <div style={icon}>🏥</div>

            <h3 style={title}>{item.title}</h3>

            <p style={desc}>{item.desc}</p>

          </div>
        ))}
      </div>

    </section>
  );
}

/* STYLES */

const container = {
  padding: "60px 20px",
  background: "#f5f9ff"
};

const heading = {
  textAlign: "center",
  marginBottom: "40px",
  fontSize: "30px",
  color: "#0d6efd"
};

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px"
};

const card = {
  background: "white",
  padding: "25px",
  borderRadius: "15px",
  textAlign: "center",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  transition: "0.3s"
};

const icon = {
  fontSize: "30px",
  marginBottom: "10px"
};

const title = {
  marginBottom: "10px"
};

const desc = {
  fontSize: "14px",
  color: "#555"
};
