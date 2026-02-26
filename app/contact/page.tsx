"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const body = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (res.ok) {
      setStatus("Message sent!");
      form.reset();
    } else {
      setStatus("Something went wrong. Try again.");
    }
  }

  return (
    <div style={{ padding: "2rem", maxWidth: "700px", margin: "0 auto" }}>
      <h1>Contact Me</h1>

      <div style={{ marginTop: "1.5rem" }}>
        <img
          src="/headshot.png"
          alt="Fares Amari"
          style={{
            width: "160px",
            height: "160px",
            borderRadius: "50%",
            objectFit: "cover",
            marginBottom: "1rem",
          }}
        />

        <p><strong>Name:</strong> Fares Amari</p>
        <p><strong>Email:</strong> <a href="mailto:FaresAmari@Outlook.com">FaresAmari@Outlook.com</a></p>
        <p><strong>Phone:</strong> (504) 656‑6332</p>
      </div>

      <h2 style={{ marginTop: "2rem" }}>Send Me a Message</h2>

      <form
        onSubmit={handleSubmit}
        style={{
          marginTop: "1rem",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          style={{ padding: "0.5rem", fontSize: "1rem" }}
        />

        <button
          type="submit"
          style={{
            padding: "0.75rem",
            fontSize: "1rem",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>
      </form>

      {status && (
        <p style={{ marginTop: "1rem", fontWeight: "bold" }}>{status}</p>
      )}
    </div>
  );
}
