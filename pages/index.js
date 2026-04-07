import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Home() {

  const services = [
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Pediatrics",
    "Dental Care",
    "Emergency Care"
  ];

  const doctors = [
    { name: "Dr. Amit Sharma", spec: "Cardiologist" },
    { name: "Dr. Neha Verma", spec: "Neurologist" },
    { name: "Dr. Raj Singh", spec: "Orthopedic Specialist" }
  ];

  return (
    <>
      {/* SEO */}
      <Head>
        <title>Amrit Hospital - Best Healthcare in Meerut</title>
        <meta name="description" content="Amrit Hospital provides expert doctors and modern healthcare services in Meerut." />
      </Head>

      {/* NAVBAR + SIDEBAR */}
      <Navbar />
      <Sidebar />

      {/* HERO SECTION */}
      <section style={{
        background: "linear-gradient(135deg,#0d6efd,#4facfe)",
        color: "white",
        padding: "90px 20px",
        textAlign: "center"
      }}>
        <h1 style={{
          fontSize: "42px",
          fontWeight: "bold",
          marginBottom: "10px"
        }}>
          Your Health Is Our Top Priority
        </h1>

        <p style={{
          fontSize: "18px",
          marginBottom: "25px"
        }}>
          Advanced healthcare with expert doctors in Meerut
        </p>

        <a href="/appointment">
          <button style={btnPrimary}>
            Book Appointment
          </button>
        </a>
      </section>

      {/* STATS SECTION */}
      <section style={{
        padding: "60px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        gap: "20px"
      }}>
        {[
          { title: "1000+", sub: "Patients Treated" },
          { title: "85%", sub: "Recovery Rate" },
          { title: "24/7", sub: "Emergency Support" },
          { title: "50+", sub: "Expert Doctors" }
        ].map((item, i) => (
          <div key={i} style={card}>
            <h2>{item.title}</h2>
            <p>{item.sub}</p>
          </div>
        ))}
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={title}>Our Medical Services</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px"
        }}>
          {services.map((s, i) => (
            <div key={i} style={card}>
              <h3>{s}</h3>
              <p>
                We provide advanced treatment and personalized care for {s.toLowerCase()} patients.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTORS PREVIEW */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={title}>Our Expert Doctors</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "20px"
        }}>
          {doctors.map((doc, i) => (
            <div key={i} style={card}>
              <h3>{doc.name}</h3>
              <p>{doc.spec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section style={{
        background: "#0d6efd",
        color: "white",
        textAlign: "center",
        padding: "70px 20px"
      }}>
        <h2>Book Your Appointment Today</h2>
        <p>Call us or schedule your visit online</p>

        <a href="/appointment">
          <button style={btnLight}>
            Schedule Now
          </button>
        </a>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#111",
        color: "white",
        textAlign: "center",
        padding: "25px"
      }}>
        <p>© 2026 Amrit Hospital</p>
        <p>Created by A.S Tech Foundation</p>
      </footer>
    </>
  );
}

/* STYLES */

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
  transition: "0.3s"
};

const title = {
  textAlign: "center",
  marginBottom: "30px"
};

const btnPrimary = {
  padding: "12px 25px",
  background: "white",
  color: "#0d6efd",
  borderRadius: "10px",
  border: "none",
  fontWeight: "bold",
  cursor: "pointer"
};

const btnLight = {
  padding: "12px 25px",
  background: "white",
  color: "#0d6efd",
  borderRadius: "10px",
  border: "none",
  marginTop: "15px",
  fontWeight: "bold",
  cursor: "pointer"
};
