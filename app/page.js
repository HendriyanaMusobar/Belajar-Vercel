export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Arial, sans-serif",
      background: "#f5f5f5"
    }}>
      <div style={{
        background: "white",
        padding: "40px",
        borderRadius: "16px",
        boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        textAlign: "center",
        maxWidth: "520px"
      }}>
        <h1>🚀 Hello Vercel!</h1>
        <p>Ini aplikasi Next.js pertama saya yang siap di-deploy ke Vercel.</p>

        <div style={{
          marginTop: "24px",
          padding: "16px",
          background: "#f0f0f0",
          borderRadius: "10px"
        }}>
          Laptop → GitHub → Vercel → Internet
        </div>
      </div>
    </main>
  );
}
