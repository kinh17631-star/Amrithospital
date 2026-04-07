import { useState } from "react";
import Head from "next/head";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import Footer from "../components/footer";

export default function Appointment() {

  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    department: "",
    message: ""
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.date) {
      setError("Please fill all required fields");
      setSuccess("");
      return;
    }

    if (form.phone.length < 10) {
      setError("Enter valid phone number");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Appointment booked successfully!");

    setForm({
      name: "",
      phone: "",
      date: "",
      department: "",
      message: ""
    });
  };

  return (
    <>
      <Head>
        <title>Book Appointment - Amrit Hospital</title>
      </Head>

      <Navbar />
      <Sidebar />

      <section style={{
        background: "linear-gradient(135deg,#0d6efd,#4facfe)",
        color: "white",
        padding: "70px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "38px" }}>Book an Appointment</h1>
        <p>Quick and easy appointment booking</p>
      </section>

      <section style={{
        padding: "60px 20px",
        display: "flex",
        justifyContent: "center"
      }}>
        <form onSubmit={handleSubmit} style={{
          width: "400px",
          maxWidth: "100%",
          background: "white",
          padding: "25px",
          borderRadius: "15px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
        }}>

          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
            Appointment Form
          </h2>

          <input
            type="text"
            name="name"
            placeholder="Full Name *"
            value={form.name}
            onChange={handleChange}
            style={input}
          />

          <input
            type="number"
            name="phone"
            placeholder="Phone Number *"
            value={form.phone}
            onChange={handleChange}
            style={input}
          />

          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            style={input}
          />

          <select
            name="department"
            value={form.department}
            onChange={handleChange}
            style={input}
          >
            <option value="">Select Department</option>
            <option>Cardiology</option>
            <option>Neurology</option>
            <option>Orthopedics</option>
            <option>Pediatrics</option>
          </select>

          <textarea
            name="message"
            placeholder="Message (optional)"
            value={form.message}
            onChange={handleChange}
            style={{ ...input, height: "80px" }}
          ></textarea>

          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}

          <button type="submit" style={btn}>
            Submit
          </button>

        </form>
      </section>

      <section style={{
        background: "#0d6efd",
        color: "white",
        textAlign: "center",
        padding: "60px 20px"
      }}>
        <h2>Need Immediate Help?</h2>
        <p>Call us directly for emergency services</p>
      </section>

      <Footer />
    </>
  );
}

/* STYLES */

const input = {
  width: "100%",
  padding: "12px",
  marginBottom: "15px",
  borderRadius: "8px",
  border: "1px solid #ccc"
};

const btn = {
  width: "100%",
  padding: "12px",
  background: "#0d6efd",
  color: "white",
  border: "none",
  borderRadius: "10px",
  cursor: "pointer"
};
