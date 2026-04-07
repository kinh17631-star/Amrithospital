import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Amrit Hospital</title>
      </Head>

      <Navbar />
      <Sidebar />

      {/* HEADER */}
      <section style={{
        background: "linear-gradient(135deg,#0d6efd,#4facfe)",
        color: "white",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "36px" }}>Privacy Policy</h1>
        <p>Your data safety is our priority</p>
      </section>

      {/* CONTENT */}
      <section style={{
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "auto",
        lineHeight: "1.7"
      }}>

        <h2>1. Introduction</h2>
        <p>
          Amrit Hospital is committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or use our services.
        </p>

        <h2>2. Information We Collect</h2>
        <p>
          We may collect personal details such as your name, phone number, appointment details, and other information when you fill out forms on our website.
        </p>

        <h2>3. How We Use Your Information</h2>
        <p>
          The information collected is used to:
        </p>
        <ul>
          <li>Provide healthcare services</li>
          <li>Manage appointments</li>
          <li>Improve our website and services</li>
          <li>Contact you regarding your queries</li>
        </ul>

        <h2>4. Data Protection</h2>
        <p>
          We implement security measures to protect your personal data from unauthorized access or misuse.
        </p>

        <h2>5. Sharing of Information</h2>
        <p>
          We do not sell or share your personal information with third parties except when required by law or for medical services.
        </p>

        <h2>6. Cookies</h2>
        <p>
          Our website may use cookies to enhance user experience and analyze website traffic.
        </p>

        <h2>7. Your Rights</h2>
        <p>
          You have the right to request access, correction, or deletion of your personal data.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have any questions regarding this Privacy Policy, please contact Amrit Hospital at the provided contact number.
        </p>

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
