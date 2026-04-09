import Image from "next/image";

export default function Hero() {
  return (
    <section style={container}>
      
      {/* 🚀 CHROME SPEED FIX: Next.js Image Component */}
      {/* Note: Agar aapne is photo ko compress karke .webp banaya hai, toh yahan .webp likh dena */}
      <Image
        src="/IMG_4525.jpeg" 
        alt="Hero Background"
        fill
        priority
        unoptimized={true}
        style={{ objectFit: "cover", objectPosition: "center", zIndex: 0 }}
      />

      <div style={overlay}></div>

      <div style={content}>
        {/* 🚀 ANIMATION CLASSES HATA DI GAYI HAIN - AB TURANT DIKHEGA */}
        <h1 style={heading}>
          Your Health Is <br /> Our Top Priority
        </h1>

        <p style={text}>
          Advanced healthcare with expert doctors
        </p>

        <a href="/appointment">
          <button style={btn}>Book Appointment</button>
        </a>
      </div>

    </section>
  );
}

/* STYLES */

const container = {
  position: "relative",
  width: "100%",
  height: "90vh",
  /* BACKGROUND CSS HATA DIYA GAYA HAI SPEED KE LIYE */
  backgroundColor: "#050b14", // Fallback color
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden" // Image bahar na nikle isliye zaroori hai
};

const overlay = {
  position: "absolute",
  width: "100%",
  height: "100%",
  background: "rgba(0,0,0,0.5)",
  zIndex: 1 // Overlay ko image ke upar laane ke liye
};

const content = {
  position: "relative",
  color: "white",
  textAlign: "center",
  zIndex: 2 // Text ko overlay ke upar laane ke liye
};

const heading = {
  fontSize: "40px",
  marginBottom: "20px"
};

const text = {
  marginBottom: "20px"
};

const btn = {
  padding: "12px 25px",
  borderRadius: "10px",
  border: "none",
  background: "#0d6efd",
  color: "white"
};
