import "./styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "South East Louisiana A.I. Meet Up",
  description: "Connecting the Gulf South through artificial intelligence, innovation, and community.",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#fff8e1", // soft gold background (easy to change later)
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <Header />
        <main style={{ padding: "2rem", minHeight: "70vh" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

