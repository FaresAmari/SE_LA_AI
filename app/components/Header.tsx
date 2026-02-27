import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      background: "rgba(10, 10, 10, 0.95)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #1f1f1f",
      padding: "0 2rem",
      position: "sticky",
      top: 0,
      zIndex: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "68px",
    }}>
      {/* Logo */}
      <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "10px" }}>
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
        <span style={{
          color: "white",
          fontWeight: 800,
          fontSize: "1rem",
          letterSpacing: "-0.01em",
        }}>
          SE Louisiana <span style={{ color: "#ff4444" }}>A.I.</span>
        </span>
      </Link>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: "Blog", href: "/blog" },
        ].map((link) => (
          <Link key={link.href} href={link.href} style={{
            color: "#aaa",
            textDecoration: "none",
            fontWeight: 500,
            fontSize: "0.95rem",
            padding: "6px 14px",
            borderRadius: "6px",
            transition: "color 0.2s",
          }}>
            {link.label}
          </Link>
        ))}

        {/* Contact as a button */}
        <Link href="/contact" style={{
          background: "#ff4444",
          color: "white",
          textDecoration: "none",
          fontWeight: 700,
          fontSize: "0.9rem",
          padding: "8px 18px",
          borderRadius: "7px",
          marginLeft: "8px",
        }}>
          Join Us
        </Link>
      </nav>
    </header>
  );
}
