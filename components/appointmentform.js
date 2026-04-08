import { useState } from "react";

export default function AppointmentForm() {

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
    <div style={container}>

      <form onSubmit={handleSubmit} style={formBox}>

        <h2 style={heading}>Book Appointment</h2>

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

    </div>
  );
}

/* STYLES */

const container = {
  display: "flex",
  justifyContent: "center",
  padding: "60px 20px"
};

const formBox = {
  width: "400px",
  maxWidth: "100%",
  background: "white",
  padding: "25px",
  borderRadius: "15px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
};

const heading = {
  textAlign: "center",
  marginBottom: "20px"
};

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
