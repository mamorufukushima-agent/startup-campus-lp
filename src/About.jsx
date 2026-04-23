/* About.jsx — what is スタキャン for Business, with 2 axes */
function About() {
  return (
    <section id="about" className="section" style={{
      background: "var(--navy-950)",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
    }}>
      <AboutBg />
      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-header center">
          <span className="eyebrow center" style={{ color: "var(--navy-300)" }}>
            <span style={{ background: "var(--navy-300)" }}></span>
            What is Startup Campus for Business
          </span>
          <h2 className="section-title" style={{ color: "#fff", marginTop: 24 }}>
            事業計画と、自走リーダー。<br/>
            その両方を、3か月で。
          </h2>
          <p className="section-lead" style={{ color: "var(--navy-200)" }}>
            社員自身が事業開発のプロセスを実践するからこそ、事業計画と人材育成、2つの成果が同時に得られる。
            これが、座学研修でもコンサル外注でもない、第3のアプローチです。
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }}>
          <AxisCard
            tag="AXIS 01"
            title="検証済みの事業計画"
            headline="社員自身の手で、経営判断できるプランへ。"
            bullets={[
              "顧客課題を徹底的に掘る",
              "解決策を実際にテストする",
              "経営陣がGo/No-Goを判断できる材料まで仕上げる",
            ]}
            result="3か月後：検証済みの事業計画が完成"
          />
          <AxisCard
            tag="AXIS 02"
            title="自走できる次世代リーダー"
            headline="事業を創る過程で、経営視点が身につく。"
            bullets={[
              "顧客インタビューで「聴く力」が育つ",
              "仮説検証で「考える力」が育つ",
              "事業計画作成で「経営視点」が身につく",
            ]}
            result="3か月後：自走できるリーダーが育成"
          />
        </div>
      </div>
    </section>
  );
}

function AxisCard({ tag, title, headline, bullets, result }) {
  return (
    <div style={{
      background: "rgba(255,255,255,0.03)",
      border: "1px solid rgba(205, 218, 238, 0.15)",
      padding: 48,
      position: "relative",
    }}>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: "0.24em",
        color: "var(--navy-300)",
        marginBottom: 24,
      }}>{tag}</div>
      <h3 style={{
        fontSize: 26,
        color: "#fff",
        marginBottom: 12,
        letterSpacing: "0.02em",
      }}>{title}</h3>
      <p style={{
        fontSize: 18,
        color: "var(--navy-200)",
        marginBottom: 32,
        fontWeight: 300,
        lineHeight: 1.7,
      }}>{headline}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
        {bullets.map((b, i) => (
          <li key={i} style={{
            fontSize: 15, color: "var(--navy-100)",
            padding: "12px 0",
            borderTop: i === 0 ? "1px solid rgba(205,218,238,0.1)" : "none",
            borderBottom: "1px solid rgba(205,218,238,0.1)",
            display: "flex", alignItems: "center", gap: 16,
          }}>
            <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: 11 }}>
              0{i+1}
            </span>
            {b}
          </li>
        ))}
      </ul>
      <div style={{
        padding: "16px 20px",
        background: "rgba(26, 115, 255, 0.08)",
        border: "1px solid rgba(26, 115, 255, 0.25)",
        fontSize: 14,
        color: "#fff",
        letterSpacing: "0.03em",
        display: "flex", alignItems: "center", gap: 12,
      }}>
        <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: 11 }}>→</span>
        {result}
      </div>
    </div>
  );
}

function AboutBg() {
  return (
    <div aria-hidden style={{
      position: "absolute", inset: 0,
      backgroundImage: "radial-gradient(circle at 15% 20%, rgba(96,134,200,0.18), transparent 50%), radial-gradient(circle at 85% 80%, rgba(26,115,255,0.15), transparent 50%)",
    }} />
  );
}

window.About = About;
