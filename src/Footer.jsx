/* Footer.jsx */
function Footer() {
  const programLinks = [
    { l: "プログラム概要", href: "#about" },
    { l: "3か月ロードマップ", href: "#roadmap" },
    { l: "プログラム全体像", href: "#features" },
    { l: "料金", href: "#pricing" },
  ];
  const aboutLinks = [
    { l: "メンター紹介", href: "#mentors" },
    { l: "導入実績", href: "#cases" },
    { l: "FAQ", href: "#faq" },
    { l: "お問い合わせ", href: "https://startupcampus.work/contact/", ext: true },
    { l: "打合せを予約", href: "https://timerex.net/s/mamoru.fukushima_7c57/35e7bf75/", ext: true },
  ];
  const companyLinks = [
    { l: "株式会社エージェント", href: "https://agent-network.com/", ext: true },
    { l: "プライバシーポリシー", href: "https://agent-network.com/policy/", ext: true },
  ];

  return (
    <footer style={{
      background: "#060d1d",
      color: "var(--navy-300)",
      padding: "56px 0 32px",
      fontSize: 13,
    }}>
      <div className="container">
        <div style={{
          display: "grid", gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
          gap: 40, paddingBottom: 40,
          borderBottom: "1px solid rgba(205,218,238,0.12)",
        }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <img src="assets/logo-white.png" alt="Startup Campus" style={{ height: 28, width: "auto" }}/>
              <div style={{
                paddingLeft: 12, marginLeft: 2,
                borderLeft: "1px solid rgba(205,218,238,0.2)",
                lineHeight: 1.2,
              }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: "#fff", letterSpacing: "0.06em" }}>for Business</div>
                <div style={{ fontSize: 10, color: "var(--navy-300)" }}>企業向けプログラム</div>
              </div>
            </div>
            <p style={{ lineHeight: 1.9, color: "var(--navy-300)", margin: "0 0 20px" }}>
              新規事業を、3か月でカタチにする。<br/>
              企業向け新規事業開発支援プログラム。
            </p>
            <div style={{ fontSize: 12, color: "var(--navy-400)", lineHeight: 1.8 }}>
              〒150-0043 渋谷区道玄坂2-25-12<br/>
              TOKYO PRO MARKET 上場 / 証券コード 7098
            </div>
          </div>

          <FooterCol title="Program" items={programLinks} />
          <FooterCol title="About" items={aboutLinks} />
          <FooterCol title="Company" items={companyLinks} />
        </div>

        <div style={{
          paddingTop: 24,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          fontSize: 11, letterSpacing: "0.1em", color: "var(--navy-400)",
          flexWrap: "wrap", gap: 12,
        }}>
          <div>© 2026 Agent, Inc. All rights reserved.</div>
          <div style={{ fontFamily: "var(--font-mono)" }}>STARTUP CAMPUS FOR BUSINESS — 2026.4</div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.2em",
        color: "#fff", marginBottom: 18, textTransform: "uppercase",
      }}>{title}</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {items.map((it, i) => (
          <li key={i} style={{ padding: "6px 0", lineHeight: 1.7 }}>
            <a
              href={it.href}
              target={it.ext ? "_blank" : undefined}
              rel={it.ext ? "noopener" : undefined}
              style={{
                color: "var(--navy-300)", textDecoration: "none",
                transition: "color 180ms",
              }}
              onMouseEnter={e => e.currentTarget.style.color = "#fff"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--navy-300)"}
            >{it.l}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

window.Footer = Footer;
