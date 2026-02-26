export default function Footer() {
  return (
    <footer style={{
      background: "#0a0a0a",
      borderTop: "1px solid #1f1f1f",
      color: "#888",
      padding: "48px 2rem 24px",
    }}>
      <div style={{
        maxWidth: "1000px",
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "40px",
        marginBottom: "40px",
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
            <div style={{
              background: "#ff4444",
              borderRadius: "8px",
              width: "32px",
              height: "32px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1rem",
            }}>
              🤖
            </div>
            <span style={{ color: "white", fontWeight: 800, fontSize: "1rem" }}>
              SE Louisiana <span style={{ color: "#ff4444" }}>A.I.</span>
            </span>
          </div>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "220px" }}>
            A community for AI enthusiasts and builders across the Gulf South.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 style={{ color: "white", fontWeight: 700, marginBottom: "16px", fontSize: "0.95rem" }}>
            Navigate
          </h4>
          {[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <a key={link.href} href={link.href} style={{
              display: "block",
              color: "#888",
              textDecoration: "none",
              marginBottom: "10px",
              fontSize: "0.9rem",
              transition: "color 0.2s",
            }}>
              {link.label}
            </a>
          ))}
        </div>

        {/* Community */}
        <div>
          <h4 style={{ color: "white", fontWeight: 700, marginBottom: "16px", fontSize: "0.95rem" }}>
            Community
          </h4>
          <p style={{ fontSize: "0.9rem", lineHeight: 1.7 }}>
            Based in Southeast Louisiana 🦐<br />
            Open to all skill levels.<br />
            Join us at the next meetup!
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid #1f1f1f",
        paddingTop: "24px",
        textAlign: "center",
        fontSize: "0.85rem",
      }}>
        © 2026 South East Louisiana A.I. Meet Up — Built with ❤️ in Louisiana
      </div>
    </footer>
  );
}
