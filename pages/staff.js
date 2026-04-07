import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Staff() {

  const staff = [
    { name: "Dr. Amit Sharma", role: "Senior Cardiologist" },
    { name: "Dr. Neha Verma", role: "Neurologist" },
    { name: "Rahul Singh", role: "Nursing Head" },
    { name: "Pooja Mehta", role: "Senior Nurse" },
    { name: "Ankit Kumar", role: "Receptionist" },
    { name: "Sonia Gupta", role: "Admin Manager" }
  ];

  const values = [
    "Patient First Approach",
    "Professional Ethics",
    "Advanced Healthcare",
    "Team Collaboration",
    "24/7 Support"
  ];

  return (
    <>
      <Head>
        <title>Our Staff - Amrit Hospital</title>
      </Head>

      <Navbar />
      <Sidebar />

      {/* HERO HEADER */}
      <section style={{
        background: "linear-gradient(135deg,#0d6efd,#4facfe)",
        color: "white",
        padding: "70px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "38px" }}>Meet Our Dedicated Team</h1>
        <p>Experienced professionals committed to your care</p>
      </section>

      {/* STAFF GRID */}
      <section style={{
        padding: "60px 20px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px"
      }}>
        {staff.map((member, i) => (
          <div key={i} style={card}>
            
            {/* IMAGE PLACEHOLDER */}
            <div style={{
              height: "150px",
              background: "#eaeaea",
              borderRadius: "10px",
              marginBottom: "15px"
            }}></div>

            <h3>{member.name}</h3>
            <p style={{ color: "#0d6efd", fontWeight: "bold" }}>
              {member.role}
            </p>

            <p>
              Dedicated and experienced professional ensuring high quality service.
            </p>
          </div>
        ))}
      </section>

      {/* VALUES SECTION */}
      <section style={{
        padding: "60px 20px",
        background: "#f9fbff"
      }}>
        <h2 style={title}>Our Core Values</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px"
        }}>
          {values.map((val, i) => (
            <div key={i} style={card}>
              <h3>{val}</h3>
              <p>
                We strongly believe in {val.toLowerCase()} to provide better healthcare services.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#0d6efd",
        color: "white",
        textAlign: "center",
        padding: "60px 20px"
      }}>
        <h2>Want to Join Our Team?</h2>
        <p>Contact us for career opportunities</p>

        <button style={btnLight}>
          Contact Now
        </button>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "#111",
        color: "white",
        textAlign: "center",
        padding: "20px"
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
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
};

const title = {
  textAlign: "center",
  marginBottom: "30px"
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
