import Link from "next/link";

export default function Header() {
  return (
    <header
      style={{
        background: "linear-gradient(90deg, #6A0DAD, #3A7D44, #FFB400)",
        padding: "1.5rem",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "2rem", fontWeight: "bold" }}>
        My Modern Blog
      </h1>

      <nav style={{ marginTop: "0.75rem" }}>
        <Link
          href="/"
          style={{
            margin: "0 1rem",
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Home
        </Link>

        <Link
          href="/blog"
          style={{
            margin: "0 1rem",
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Blog
        </Link>

        <Link
          href="/contact"
          style={{
            margin: "0 1rem",
            color: "white",
            textDecoration: "none",
            fontWeight: "500",
          }}
        >
          Contact
        </Link>
      </nav>
    </header>
  );
}
