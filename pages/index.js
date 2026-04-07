import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

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
      <Head>
        <title>Amrit Hospital - Best Healthcare in Meerut</title>
      </Head>

      <Navbar />
      <Sidebar />

      {/* HERO */}
      <section style={{
        background: "linear-gradient(135deg,#0d6efd,#4facfe)",
        color: "white",
        padding: "90px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "42px" }}>
          Your Health Is Our Top Priority
        </h1>
        <p>Advanced healthcare with expert doctors</p>

        <a href="/appointment">
          <button style={btnPrimary}>Book Appointment</button>
        </a>
      </section>

      {/* STATS */}
      <section style={{
        padding: "60px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
        gap: "20px"
      }}>
        {[
          { title: "1000+", sub: "Patients Treated" },
          { title: "85%", sub: "Recovery Rate" },
          { title: "24/7", sub: "Emergency" },
          { title: "50+", sub: "Doctors" }
        ].map((item, i) => (
          <div key={i} style={card}>
            <h2>{item.title}</h2>
            <p>{item.sub}</p>
          </div>
        ))}
      </section>

      {/* SERVICES */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={title}>Our Services</h2>

        <div style={grid}>
          {services.map((s, i) => (
            <div key={i} style={card}>
              <h3>{s}</h3>
              <p>Advanced care for {s.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOCTORS */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={title}>Our Doctors</h2>

        <div style={grid}>
          {doctors.map((doc, i) => (
            <div key={i} style={card}>
              <h3>{doc.name}</h3>
              <p>{doc.spec}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#0d6efd",
        color: "white",
        textAlign: "center",
        padding: "60px"
      }}>
        <h2>Book Appointment Today</h2>

        <a href="/appointment">
          <button style={btnLight}>Schedule Now</button>
        </a>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

/* STYLES */

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
  gap: "20px"
};

const card = {
  background: "white",
  padding: "20px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
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
  cursor: "pointer"
};

const btnLight = {
  padding: "12px 25px",
  background: "white",
  color: "#0d6efd",
  borderRadius: "10px",
  border: "none",
  marginTop: "15px",
  cursor: "pointer"
};
