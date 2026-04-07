import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Patients() {

  const services = [
    "General Checkup",
    "Emergency Care",
    "Laboratory Tests",
    "Surgery",
    "X-Ray & Imaging",
    "Pharmacy"
  ];

  const facilities = [
    "24/7 Emergency Services",
    "Advanced ICU",
    "Modern Operation Theatre",
    "Ambulance Service",
    "Experienced Nursing Staff",
    "Online Appointment System"
  ];

  return (
    <>
      <Head>
        <title>Patient Services - Amrit Hospital</title>
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
        <h1 style={{ fontSize: "38px" }}>Patient Care & Services</h1>
        <p>Providing quality healthcare with compassion</p>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={title}>Our Services</h2>

        <div style={grid}>
          {services.map((item, i) => (
            <div key={i} style={card}>
              <h3>{item}</h3>
              <p>
                We provide reliable and advanced {item.toLowerCase()} services for our patients with high standards of care.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FACILITIES SECTION */}
      <section style={{ padding: "60px 20px", background: "#f9fbff" }}>
        <h2 style={title}>Hospital Facilities</h2>

        <div style={grid}>
          {facilities.map((item, i) => (
            <div key={i} style={card}>
              <h3>{item}</h3>
              <p>
                Equipped with modern technology and expert staff to ensure the best healthcare experience.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PATIENT INFO */}
      <section style={{ padding: "60px 20px" }}>
        <h2 style={title}>Patient Information</h2>

        <div style={card}>
          <p>
            At Amrit Hospital, we focus on providing patient-centered care. Our team ensures comfort, safety, and personalized treatment for every patient.
          </p>

          <ul style={{ marginTop: "15px" }}>
            <li>Easy registration process</li>
            <li>Qualified doctors and staff</li>
            <li>Affordable treatment</li>
            <li>Clean and safe environment</li>
          </ul>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section style={{ padding: "60px 20px", background: "#f9fbff" }}>
        <h2 style={title}>Frequently Asked Questions</h2>

        <div style={card}>
          <h3>How can I book an appointment?</h3>
          <p>You can book online or call our hospital directly.</p>

          <h3>Do you provide emergency services?</h3>
          <p>Yes, we are available 24/7 for emergency care.</p>

          <h3>Are your doctors experienced?</h3>
          <p>All our doctors are highly qualified with years of experience.</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        background: "#0d6efd",
        color: "white",
        textAlign: "center",
        padding: "60px 20px"
      }}>
        <h2>Need Medical Help?</h2>
        <p>Contact us or book your appointment now</p>

        <a href="/appointment">
          <button style={btnLight}>Book Appointment</button>
        </a>
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
