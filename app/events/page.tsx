export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Intro to Large Language Models",
      date: "March 15, 2026",
      time: "6:30 PM – 9:00 PM",
      location: "Tulane University, New Orleans, LA",
      description:
        "A beginner-friendly deep dive into how LLMs like ChatGPT and Claude work under the hood. Great for developers and non-technical folks alike.",
      speaker: "TBA",
      eventbriteUrl: "#", // replace with your real Eventbrite link
      tags: ["Beginner", "LLMs"],
    },
    {
      id: 2,
      title: "AI Tools for Small Business",
      date: "April 10, 2026",
      time: "6:30 PM – 9:00 PM",
      location: "Metairie, LA — Venue TBA",
      description:
        "Practical walkthrough of AI tools that local business owners can use today — no coding required. From automation to content creation.",
      speaker: "TBA",
      eventbriteUrl: "#",
      tags: ["Business", "Tools"],
    },
  ];

  const pastEvents = [
    {
      id: 3,
      title: "Kickoff Meetup — Getting to Know Each Other",
      date: "February 20, 2026",
      location: "New Orleans, LA",
      recap:
        "Our first ever meetup brought together 30+ AI enthusiasts from across the region. We covered the group's mission, did live demos, and connected over some great conversation.",
      speaker: "Fares Amari",
    },
  ];

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
          background: "radial-gradient(ellipse at center, rgba(255,50,50,0.12) 0%, transparent 70%)",
        }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p style={{
            color: "#ff4444", fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "12px"
          }}>
            📅 Events
          </p>
          <h1 style={{
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 900, marginBottom: "16px", letterSpacing: "-0.02em"
          }}>
            Meetups & Events
          </h1>
          <p style={{ color: "#aaa", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto" }}>
            Join us in person across Southeast Louisiana. All skill levels welcome.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section style={{ padding: "64px 2rem", maxWidth: "900px", margin: "0 auto" }}>
        <h2 style={{
          fontSize: "1.75rem", fontWeight: 800, color: "#111",
          marginBottom: "8px"
        }}>
          Upcoming Events
        </h2>
        <p style={{ color: "#666", marginBottom: "40px" }}>
          Reserve your spot — space is limited.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {upcomingEvents.map((event) => (
            <div key={event.id} style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
              border: "1px solid #e5e5e5",
              display: "grid",
              gridTemplateColumns: "1fr auto",
              gap: "24px",
              alignItems: "start",
            }}>
              <div>
                {/* Tags */}
                <div style={{ display: "flex", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
                  {event.tags.map((tag) => (
                    <span key={tag} style={{
                      background: "#fff0f0", color: "#ff4444",
                      padding: "4px 12px", borderRadius: "999px",
                      fontSize: "0.75rem", fontWeight: 700,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 style={{ fontSize: "1.3rem", fontWeight: 800, color: "#111", marginBottom: "12px" }}>
                  {event.title}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "16px" }}>
                  <span style={{ color: "#555", fontSize: "0.9rem" }}>📅 {event.date} · {event.time}</span>
                  <span style={{ color: "#555", fontSize: "0.9rem" }}>📍 {event.location}</span>
                  <span style={{ color: "#555", fontSize: "0.9rem" }}>🎤 Speaker: {event.speaker}</span>
                </div>

                <p style={{ color: "#666", lineHeight: 1.7, fontSize: "0.95rem" }}>
                  {event.description}
                </p>
              </div>

              {/* RSVP Button */}
              <div style={{ minWidth: "140px", textAlign: "right" }}>
                <a href={event.eventbriteUrl} target="_blank" rel="noopener noreferrer" style={{
                  display: "inline-block",
                  background: "#ff4444",
                  color: "white",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  fontWeight: 700,
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  whiteSpace: "nowrap",
                }}>
                  RSVP on Eventbrite →
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Past Events */}
      <section style={{
        padding: "0 2rem 80px",
        maxWidth: "900px",
        margin: "0 auto",
      }}>
        <h2 style={{
          fontSize: "1.75rem", fontWeight: 800, color: "#111",
          marginBottom: "8px"
        }}>
          Past Events
        </h2>
        <p style={{ color: "#666", marginBottom: "40px" }}>
          Missed one? Here's what we covered.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {pastEvents.map((event) => (
            <div key={event.id} style={{
              background: "white",
              borderRadius: "16px",
              padding: "28px 32px",
              border: "1px solid #e5e5e5",
              boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
              borderLeft: "4px solid #ff4444",
            }}>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 800, color: "#111", marginBottom: "8px" }}>
                {event.title}
              </h3>
              <div style={{ display: "flex", gap: "20px", marginBottom: "12px", flexWrap: "wrap" }}>
                <span style={{ color: "#888", fontSize: "0.85rem" }}>📅 {event.date}</span>
                <span style={{ color: "#888", fontSize: "0.85rem" }}>📍 {event.location}</span>
                <span style={{ color: "#888", fontSize: "0.85rem" }}>🎤 {event.speaker}</span>
              </div>
              <p style={{ color: "#666", lineHeight: 1.7, fontSize: "0.95rem" }}>
                {event.recap}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section style={{
        background: "#111",
        color: "white",
        textAlign: "center",
        padding: "64px 2rem",
      }}>
        <h2 style={{ fontSize: "1.75rem", fontWeight: 800, marginBottom: "12px" }}>
          Want to speak at a future event?
        </h2>
        <p style={{ color: "#888", marginBottom: "32px", fontSize: "1rem" }}>
          We're always looking for speakers, sponsors, and venue partners.
        </p>
        <a href="/contact" style={{
          background: "#ff4444", color: "white",
          padding: "14px 36px", borderRadius: "8px",
          fontWeight: 700, textDecoration: "none", fontSize: "1rem",
        }}>
          Get in Touch
        </a>
      </section>

    </main>
  );
}
