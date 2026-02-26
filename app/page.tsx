export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section style={{
        padding: "100px 20px",
        textAlign: "center",
        background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a2e 50%, #16213e 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at center, rgba(255,50,50,0.15) 0%, transparent 70%)",
        }} />
        <div style={{ position: "relative", zIndex: 1, maxWidth: "800px", margin: "0 auto" }}>
          <p style={{
            color: "#ff4444", fontWeight: 700, letterSpacing: "0.2em",
            textTransform: "uppercase", fontSize: "0.85rem", marginBottom: "16px"
          }}>
            🤖 South East Louisiana
          </p>
          <h1 style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            fontWeight: 900, lineHeight: 1.1,
            marginBottom: "24px", letterSpacing: "-0.02em"
          }}>
            Where Louisiana Meets <span style={{ color: "#ff4444" }}>Artificial Intelligence</span>
          </h1>
          <p style={{
            fontSize: "1.25rem", color: "#aaa",
            maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.7
          }}>
            A community for AI enthusiasts, builders, and curious minds across the Gulf South.
            Learn, connect, and build the future together.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/contact" style={{
              background: "#ff4444", color: "white", padding: "14px 32px",
              borderRadius: "8px", fontWeight: 700, textDecoration: "none",
              fontSize: "1rem", transition: "opacity 0.2s"
            }}>
              Join the Meetup →
            </a>
            <a href="/blog" style={{
              border: "1px solid #444", color: "white", padding: "14px 32px",
              borderRadius: "8px", fontWeight: 600, textDecoration: "none", fontSize: "1rem"
            }}>
              Read the Blog
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{
        padding: "80px 20px",
        background: "#111",
        color: "white",
      }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <h2 style={{
            textAlign: "center", fontSize: "2rem",
            fontWeight: 800, marginBottom: "12px"
          }}>
            What We're About
          </h2>
          <p style={{ textAlign: "center", color: "#888", marginBottom: "56px" }}>
            Built for the community, by the community.
          </p>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px"
          }}>
            {[
              { icon: "🧠", title: "Learn AI", desc: "Hands-on workshops and talks covering the latest in machine learning, LLMs, and AI tools." },
              { icon: "🤝", title: "Connect", desc: "Meet developers, entrepreneurs, and researchers from across Southeast Louisiana." },
              { icon: "🛠️", title: "Build", desc: "Collaborate on real projects, hackathons, and demos that push boundaries." },
            ].map((card) => (
              <div key={card.title} style={{
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: "12px",
                padding: "32px",
                transition: "border-color 0.2s",
              }}>
                <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{card.icon}</div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, marginBottom: "12px" }}>{card.title}</h3>
                <p style={{ color: "#888", lineHeight: 1.7 }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "80px 20px",
        textAlign: "center",
        background: "#0f0f0f",
        color: "white",
        borderTop: "1px solid #1f1f1f"
      }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 800, marginBottom: "16px" }}>
          Ready to get involved?
        </h2>
        <p style={{ color: "#888", marginBottom: "32px", fontSize: "1.1rem" }}>
          Stay up to date with events, blog posts, and community news.
        </p>
        <a href="/contact" style={{
          background: "#ff4444", color: "white", padding: "14px 36px",
          borderRadius: "8px", fontWeight: 700, textDecoration: "none", fontSize: "1rem"
        }}>
          Get in Touch
        </a>
      </section>
    </main>
  );
}
