export default function Blog() {
  return (
    <section style={{ padding: "60px 20px" }}>
      <h2 style={{ textAlign: "center" }}>Latest Posts</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px",
        marginTop: "40px"
      }}>
        {["Post One", "Post Two", "Post Three"].map(post => (
          <div key={post} style={{
            border: "1px solid var(--red)",
            padding: "20px",
            borderRadius: "10px"
          }}>
            <h3>{post}</h3>
            <p>A short description of the blog post.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
