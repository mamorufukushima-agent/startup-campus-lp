/* Contact.jsx — final CTA */
function Contact() {
  return (
    <section id="contact" className="section" style={{
      background: "var(--navy-950)",
      color: "#fff",
      padding: "140px 0",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* Subtle grid bg */}
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        backgroundImage:
          "linear-gradient(rgba(205,218,238,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(205,218,238,0.05) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}/>
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        backgroundImage:
          "radial-gradient(circle at 80% 50%, rgba(26,115,255,0.2), transparent 60%)",
      }}/>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 80, alignItems: "center" }}>
          <div>
            <span className="eyebrow" style={{ color: "var(--navy-300)" }}>
              Get Started / 導入をご検討の方へ
            </span>
            <h2 style={{
              fontSize: "clamp(28px, 3.2vw, 44px)",
              color: "#fff", marginTop: 32, marginBottom: 28,
              letterSpacing: "0.02em", lineHeight: 1.4, fontWeight: 700,
            }}>
              まずはお気軽に、<br/>お問い合わせください。
            </h2>
            <p style={{ fontSize: 16, color: "var(--navy-200)", lineHeight: 2, marginBottom: 40, maxWidth: 520 }}>
プログラムの詳細・事例・料金のご質問、貴社の状況に合わせた導入相談など、どんな段階からでもお気軽にご連絡ください。
            </p>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "center" }}>
              <a href="https://startupcampus.work/contact/" target="_blank" rel="noopener" className="btn btn-primary" style={{
                background: "#fff", color: "var(--navy-900)",
                padding: "22px 36px", fontSize: 15,
              }}>
                お問い合わせフォーム <span className="btn-arrow">→</span>
              </a>
              <a href="https://timerex.net/s/mamoru.fukushima_7c57/35e7bf75/" target="_blank" rel="noopener" className="btn btn-ghost" style={{
                padding: "22px 30px", fontSize: 14,
                color: "#fff", borderColor: "rgba(205,218,238,0.3)",
              }}>
                打合せを予約する <span className="btn-arrow">→</span>
              </a>
            </div>
            <div style={{ fontSize: 12, color: "var(--navy-300)", letterSpacing: "0.08em", marginTop: 20, lineHeight: 1.9 }}>
              質問・資料請求はフォームから / 具体的な相談はTimeRexでご予約ください
            </div>
          </div>

          <div style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(205,218,238,0.2)",
            padding: 44,
          }}>
            <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.24em", color: "var(--navy-300)", marginBottom: 24 }}>
              DIRECT CONTACT
            </div>
            <div style={{ marginBottom: 28, paddingBottom: 28, borderBottom: "1px solid rgba(205,218,238,0.15)" }}>
              <div style={{ fontSize: 12, color: "var(--navy-300)", letterSpacing: "0.1em", marginBottom: 6 }}>運営事務局</div>
              <div style={{ fontSize: 18, color: "#fff", fontWeight: 600, marginBottom: 4 }}>株式会社エージェント ビジネススタジオ</div>
              <div style={{ fontSize: 13, color: "var(--navy-200)" }}>TOKYO PRO MARKET 上場 / 証券コード 7098</div>
            </div>
            <dl style={{ margin: 0, display: "grid", gap: 16, fontSize: 14 }}>
              <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 16 }}>
                <dt style={{ color: "var(--navy-300)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", paddingTop: 4 }}>TEL</dt>
                <dd style={{ margin: 0, color: "#fff", fontFamily: "var(--font-mono)" }}>070-3971-7810</dd>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 16 }}>
                <dt style={{ color: "var(--navy-300)", fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.12em", paddingTop: 4 }}>MAIL</dt>
                <dd style={{ margin: 0, color: "#fff", fontFamily: "var(--font-mono)", fontSize: 13, wordBreak: "break-all" }}>
                  startup.campus@agent-network.com
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Contact = Contact;
