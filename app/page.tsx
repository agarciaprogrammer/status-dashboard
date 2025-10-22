import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: "100px", fontFamily: "Arial, sans-serif" }}>
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Welcome to My Next.js App</h1>
        <p style={{ color: "#555" }}>Your one-stop dashboard for all API statuses</p>
      </header>

      <section style={{ marginBottom: "30px" }}>
        <h2>API Status Overview</h2>
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          {/* Placeholder for API request 1 */}
          <p>Loading API 1 status...</p>
        </div>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2>Additional API Data</h2>
        <div style={{ border: "1px solid #ddd", padding: "20px", borderRadius: "8px" }}>
          {/* Placeholder for API request 2 */}
          <p>Loading API 2 data...</p>
        </div>
      </section>

      <footer style={{ textAlign: "center", marginTop: "40px", color: "#888" }}>
        <p>&copy; 2025 My Next.js App. All rights reserved.</p>
      </footer>
    </main>
  );
}