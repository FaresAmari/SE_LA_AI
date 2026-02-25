import Link from "next/link";

export default function Header() {
  return (
    <header style={{
      background: "linear-gradient(90deg, var(--red), var(--blue))",
      padding: "20px",
      color: "white",
      textAlign: "center"
    }}>
      <h1>My Modern Blog</h1>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="/blog">Blog</Link> |{" "}
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  );
}
