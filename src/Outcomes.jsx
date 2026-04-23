/* Outcomes.jsx — 4 changes after adoption */
function Outcomes() {
  const items = [
    {
      n: "01",
      en: "Assets",
      title: "事業のタネが、社内資産になる",
      body: "3か月の検証を経た事業計画書、顧客インタビュー記録、仮説検証プロセス。すべてが社内に残り、次の事業開発でも活用できる「型」として定着します。",
    },
    {
      n: "02",
      en: "People",
      title: "自走できる次世代リーダーが育つ",
      body: "事業を創るプロセスで、聴く力・考える力・経営視点が実践の中で身につきます。研修では得られない「事業責任者」の判断軸を持った人材に。",
    },
    {
      n: "03",
      en: "Decision",
      title: "経営陣が「判断できる場」が生まれる",
      body: "検証済みの事業計画と経営陣を招いたビジネスプランコンテストにより、Go/No-Goを明確に判断できる材料と場が揃います。",
    },
    {
      n: "04",
      en: "Reputation",
      title: "「挑戦できる会社」という評判が残る",
      body: "社員が手を動かして事業を創る文化が醸成され、社内外に「挑戦を本気で支援する会社」という評判が残ります。採用・リテンションへの波及効果も。",
    },
  ];

  return (
    <section id="outcomes" className="section" style={{
      background: "var(--navy-950)",
      color: "#fff",
      position: "relative",
      overflow: "hidden",
    }}>
      <div aria-hidden style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 85% 30%, rgba(26,115,255,0.18), transparent 60%), radial-gradient(circle at 15% 75%, rgba(96,134,200,0.15), transparent 55%)",
      }}/>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="section-header">
          <span className="eyebrow" style={{ color: "var(--navy-300)" }}>
            <span style={{ background: "var(--navy-300)" }}></span>
            Outcomes / 導入後の4つの変化
          </span>
          <h2 className="section-title" style={{ color: "#fff", marginTop: 24 }}>
            3か月後、貴社に残るもの。<br/>
            <span style={{ color: "var(--navy-300)" }}>
              4つの確かな変化
            </span>
            。
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 0, borderTop: "1px solid rgba(205,218,238,0.2)" }}>
          {items.map((it, i) => (
            <div key={i} style={{
              padding: "48px 40px 48px 0",
              paddingLeft: i % 2 === 1 ? 40 : 0,
              borderBottom: i < 2 ? "1px solid rgba(205,218,238,0.15)" : "none",
              borderRight: i % 2 === 0 ? "1px solid rgba(205,218,238,0.15)" : "none",
            }}>
              <div style={{
                display: "flex", alignItems: "baseline", gap: 18, marginBottom: 24,
              }}>
                <span style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 44, fontWeight: 600,
                  color: "var(--accent)",
                  lineHeight: 1, letterSpacing: "0.02em",
                }}>{it.n}</span>
                <span style={{
                  fontSize: 11, letterSpacing: "0.24em",
                  color: "var(--navy-300)",
                }}>{it.en}</span>
              </div>
              <h3 style={{ fontSize: 22, color: "#fff", marginBottom: 16, letterSpacing: "0.02em", lineHeight: 1.5 }}>
                {it.title}
              </h3>
              <p style={{ fontSize: 15, color: "var(--navy-100)", lineHeight: 2, margin: 0, maxWidth: 560 }}>
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Outcomes = Outcomes;
