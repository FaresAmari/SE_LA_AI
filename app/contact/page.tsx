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
      setStatus("✅ Message sent! We'll be in touch soon.");
      form.reset();
    } else {
      setStatus("❌ Something went wrong. Try again.");
    }
  }

  return (
    <main style={{ background: "#f5f5f5", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
        padding: "80px 2rem",
        textAlign: "center",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, rgba(255,180,0,0.1) 0%, transparent 70%)",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{
            color: "#FFB400", fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "12px"
          }}>
            📬 Get In Touch
          </p>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.02em"
          }}>
            Contact Us
          </h1>
          <p style={{ color: "#aaa", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto" }}>
            Questions, sponsorships, speaking opportunities — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "64px 2rem",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "48px",
        alignItems: "start",
      }}>

        {/* Left — Logo + Info */}
        <div>
          {/* Logo */}
          <div style={{
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "32px",
            border: "1px solid #e5e5e5",
            boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
          }}>
            <img
              src="/logo.png"
              alt="Bayou Innovation Hub Logo"
              style={{ width: "100%", display: "block" }}
            />
          </div>

          {/* Contact Details */}
          <div style={{
            background: "white",
            borderRadius: "16px",
            padding: "28px",
            border: "1px solid #e5e5e5",
            boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
          }}>
            <h3 style={{
              fontSize: "1.1rem", fontWeight: 800,
              color: "#111", marginBottom: "20px"
            }}>
              Fares Amari
            </h3>

            {[
              { icon: "📧", label: "Email", value: "FaresAmari@Outlook.com", href: "mailto:FaresAmari@Outlook.com" },
              { icon: "📞", label: "Phone", value: "(504) 656-6332", href: "tel:5046566332" },
            ].map((item) => (
              <div key={item.label} style={{
                display: "flex", alignItems: "center",
                gap: "12px", marginBottom: "16px"
              }}>
                <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                <div>
                  <p style={{
                    fontSize: "0.75rem", color: "#888",
                    fontWeight: 600, textTransform: "uppercase",
                    letterSpacing: "0.05em", margin: 0
                  }}>
                    {item.label}
                  </p>
                  <a href={item.href} style={{
                    color: "#111", fontWeight: 600,
                    textDecoration: "none", fontSize: "0.95rem"
                  }}>
                    {item.value}
                  </a>
                </div>
              </div>
            ))}

            {/* TikTok */}
            <div style={{
              marginTop: "24px",
              paddingTop: "24px",
              borderTop: "1px solid #f0f0f0"
            }}>
              <p style={{
                fontSize: "0.75rem", color: "#888",
                fontWeight: 600, textTransform: "uppercase",
                letterSpacing: "0.05em", marginBottom: "12px"
              }}>
                Follow Us
              </p>
              
               href="https://www.tiktok.com/@yourhandle"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "#010101",
    color: "white",
    padding: "10px 20px",
    borderRadius: "8px",
    fontWeight: 700,
    textDecoration: "none",
    fontSize: "0.9rem",
  }}>
  <span style={{ fontSize: "1.1rem" }}>🎵</span>
  TikTok
</a>
            </div>
          </div>
        </div>

        {/* Right — Contact Form */}
        <div style={{
          background: "white",
          borderRadius: "16px",
          padding: "36px",
          border: "1px solid #e5e5e5",
          boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        }}>
          <h2 style={{
            fontSize: "1.4rem", fontWeight: 800,
            color: "#111", marginBottom: "8px"
          }}>
            Send a Message
          </h2>
          <p style={{ color: "#888", fontSize: "0.9rem", marginBottom: "28px" }}>
            We'll get back to you within 24 hours.
          </p>

          <form onSubmit={handleSubmit} style={{
            display: "flex", flexDirection: "column", gap: "16px"
          }}>
            {[
              { name: "name", placeholder: "Your Name", type: "text" },
              { name: "email", placeholder: "Your Email", type: "email" },
            ].map((field) => (
              <input
                key={field.name}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                required
                style={{
                  padding: "12px 16px",
                  fontSize: "0.95rem",
                  border: "1px solid #e5e5e5",
                  borderRadius: "8px",
                  outline: "none",
                  color: "#111",
                  background: "#fafafa",
                }}
              />
            ))}

            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows={5}
              style={{
                padding: "12px 16px",
                fontSize: "0.95rem",
                border: "1px solid #e5e5e5",
                borderRadius: "8px",
                outline: "none",
                resize: "vertical",
                color: "#111",
                background: "#fafafa",
                fontFamily: "inherit",
              }}
            />

            <button
              type="submit"
              style={{
                padding: "14px",
                fontSize: "1rem",
                background: "#FFB400",
                color: "#111",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: 800,
                letterSpacing: "-0.01em",
              }}
            >
              Send Message {'>'}
            </button>
          </form>

          {status && (
            <p style={{
              marginTop: "16px",
              fontWeight: 600,
              color: status.startsWith("✅") ? "#3A7D44" : "#ff4444",
              fontSize: "0.95rem",
            }}>
              {status}
            </p>
          )}
        </div>
      </section>
    </main>
  );
}



