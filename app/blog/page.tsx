import Link from "next/link";

export default function BlogPage() {
  return (
    <div style={{ background: "#0a0a0a", color: "white", minHeight: "100vh", padding: "20px 16px", fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <a href="/" style={{ color: "white", fontWeight: 900, fontSize: "18px", textDecoration: "none" }}>RMW <span style={{ color: "#a855f7" }}>AI TOOLS</span></a>
          <a href="/" style={{ color: "#aaa", fontSize: "13px", textDecoration: "none" }}>← Home</a>
        </div>

        <h1 style={{ fontSize: "32px", fontWeight: 900, textAlign: "center", margin: "36px 0 8px 0", lineHeight: "1.2" }}>Latest Blogs - RMW AI Tools</h1>
        <p style={{ textAlign: "center", color: "#888", fontSize: "14px", margin: "0" }}>AI Tools ke bare me asan Urdu/Hindi guides</p>

        <Link href="/blog/capcut-se-viral-reels-kaise-banayen" style={{ textDecoration: "none", color: "white", display: "block" }}>
          <div style={{ background: "#ffffff0d", border: "1px solid #ffffff1a", borderRadius: "20px", padding: "24px", marginTop: "30px" }}>
            <span style={{ background: "#7c3aed", fontSize: "11px", fontWeight: 700, padding: "5px 12px", borderRadius: "20px" }}>VIDEO EDITING</span>
            <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "14px 0 8px 0", lineHeight: "1.4" }}>CapCut Se 2 Minute Me Viral Reels Kaise Banayen</h2>
            <p style={{ color: "#aaa", fontSize: "14px", lineHeight: "1.6", margin: "0" }}>CapCut AI se bina editing sikhe viral reels banao. Template, music aur captions ka full tarika.</p>
            <p style={{ color: "#888", fontSize: "12px", marginTop: "14px" }}>6 Nov 2026 • 4 min read</p>
            <p style={{ color: "#c084fc", fontSize: "14px", fontWeight: 700, margin: "10px 0 0 0" }}>Read Blog →</p>
          </div>
        </Link>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link href="/" style={{ color: "#aaa", fontSize: "14px" }}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
}
