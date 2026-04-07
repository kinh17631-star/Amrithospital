import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default function Terms() {
  return (
    <>
      <Head>
        <title>Terms & Conditions - Amrit Hospital</title>
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
        <h1 style={{ fontSize: "36px" }}>Terms & Conditions</h1>
        <p>Please read our terms carefully</p>
      </section>

      {/* CONTENT */}
      <section style={{
        padding: "40px 20px",
        maxWidth: "900px",
        margin: "auto",
        lineHeight: "1.7"
      }}>

        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing and using the Amrit Hospital website, you agree to comply with these Terms & Conditions. If you do not agree, please do not use our website.
        </p>

        <h2>2. Medical Disclaimer</h2>
        <p>
          The information provided on this website is for general informational purposes only and should not be considered as medical advice. Always consult a qualified doctor for proper diagnosis and treatment.
        </p>

        <h2>3. Appointment Booking</h2>
        <p>
          Appointment requests submitted through this website are subject to confirmation. The hospital reserves the right to reschedule or cancel appointments when necessary.
        </p>

        <h2>4. User Responsibilities</h2>
        <ul>
          <li>Provide accurate and complete information</li>
          <li>Do not misuse the website</li>
          <li>Respect hospital staff and policies</li>
        </ul>

        <h2>5. Privacy Policy</h2>
        <p>
          Your use of this website is also governed by our Privacy Policy. Please review it to understand how we handle your data.
        </p>

        <h2>6. Limitation of Liability</h2>
        <p>
          Amrit Hospital is not responsible for any direct or indirect damages arising from the use of this website or services.
        </p>

        <h2>7. Changes to Terms</h2>
        <p>
          We may update these Terms & Conditions at any time without prior notice. Continued use of the website means you accept the updated terms.
        </p>

        <h2>8. Contact Information</h2>
        <p>
          For any queries regarding these Terms & Conditions, please contact Amrit Hospital using the provided contact details.
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
