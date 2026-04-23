/* Features.jsx — 6 program features each with its own photo */
function Features() {
  const items = [
    { n: "01", title: "個別伴走メンタリング", lead: "60分 × 10回", body: "事業開発のプロによるオンライン1on1。進捗・課題・ネクストアクションを毎週整理します。", img: "assets/mentoring-1on1.png" },
    { n: "02", title: "集中講義", lead: "月1回・計3回", body: "事業開発に必要な知識を短時間で習得する、実践型集中講義を毎月開催。", img: "assets/session-class.png" },
    { n: "03", title: "150P超のオリジナルテキスト", lead: "独自フレームワーク", body: "各フェーズで使う独自フレームワークと、そのまま使えるワークシートを提供。", img: "assets/textbook.png" },
    { n: "04", title: "進捗発表会", lead: "月1回・計2回", body: "客観的なフィードバックをもとに事業を見直す機会を確保し、思考の偏りを補正します。", img: "assets/session-hall.png" },
    { n: "05", title: "チャットサポート", lead: "平日・随時", body: "迷って手が止まる時間をゼロに。非同期で素早く論点を解消できます。", img: "assets/worksheets.png" },
    { n: "06", title: "最終成果発表会", lead: "3か月終了後", body: "経営陣を招いたビジネスプランコンテスト。Go/No-Goを判断できる場を提供します。", img: "assets/group-photo.png" },
  ];

  return (
    <section id="features" className="section" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Program / プログラム全体像</span>
          <h2 className="section-title" style={{ marginTop: 24 }}>
            安心の伴走支援体制と、<br/>充実した<span className="accent">6つのコンテンツ</span>。
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}>
          {items.map((it, i) => (
            <div key={i} style={{
              background: "#fff",
              border: "1px solid var(--rule)",
              overflow: "hidden",
              display: "flex", flexDirection: "column",
            }}>
              <div style={{ height: 200, background: "var(--navy-50)", overflow: "hidden" }}>
                <img src={it.img} alt={it.title} style={{
                  width: "100%", height: "100%", objectFit: "cover", display: "block",
                }}/>
              </div>
              <div style={{ padding: "28px 28px 32px", flex: 1, display: "flex", flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "baseline", gap: 14, marginBottom: 14, flexWrap: "wrap" }}>
                  <span className="num" style={{ fontSize: 28 }}>{it.n}</span>
                  <span style={{ fontSize: 11, color: "var(--navy-600)", letterSpacing: "0.14em", whiteSpace: "nowrap" }}>
                    {it.lead}
                  </span>
                </div>
                <h3 style={{ fontSize: 19, color: "var(--navy-900)", marginBottom: 12, letterSpacing: "0.02em" }}>
                  {it.title}
                </h3>
                <p style={{ fontSize: 13, color: "var(--ink-600)", lineHeight: 1.9, margin: 0 }}>
                  {it.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Features = Features;
