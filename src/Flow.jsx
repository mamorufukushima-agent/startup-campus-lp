/* Flow.jsx — 5 step process */
function Flow() {
  const steps = [
    { n: "01", title: "お問い合わせ", dur: "1分", body: "フォームより貴社の関心領域・現状の課題を簡単にお伺いします。", mode: "WEBフォーム" },
    { n: "02", title: "無料オンライン相談", dur: "30分 〜 60分", body: "事業責任者またはメンターが、貴社の課題・人材育成方針をヒアリング。プログラム概要とフィット感をご説明します。", mode: "オンライン / 無料" },
    { n: "03", title: "ご提案 / 設計", dur: "1 〜 2週間", body: "貴社の課題・目的に合わせて、対象者の人選・テーマ設定・スケジュールを設計し、お見積もりをご提出します。", mode: "カスタマイズ提案" },
    { n: "04", title: "ご契約 / 開講", dur: "最短 2週間", body: "電子契約に対応。最短2週間で開講可能です。ここから3か月のプログラムがスタートします。", mode: "電子契約" },
    { n: "05", title: "成果発表", dur: "3か月後", body: "経営陣を招いたビジネスプランコンテストで、3か月の成果をプレゼンします。", mode: "貴社 or 外部会場" },
  ];

  return (
    <section id="flow" className="section" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Process / 今後の流れ</span>
          <h2 className="section-title" style={{ marginTop: 24 }}>
            お問い合わせから成果発表まで、<br/>
            <span className="accent">5つのステップ</span>。
          </h2>
        </div>

        <div style={{ position: "relative" }}>
          {/* vertical spine */}
          <div style={{
            position: "absolute",
            left: 36, top: 20, bottom: 20,
            width: 1, background: "var(--rule-strong)",
          }}/>
          {steps.map((s, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: "72px 1fr 240px",
              gap: 24,
              padding: "28px 0",
              borderBottom: i < steps.length - 1 ? "1px solid var(--rule)" : "none",
              alignItems: "center",
              position: "relative",
            }}>
              <div style={{
                width: 72, height: 72,
                background: "var(--navy-900)",
                color: "#fff",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 500,
                position: "relative", zIndex: 2,
              }}>{s.n}</div>

              <div>
                <h3 style={{ fontSize: 22, color: "var(--navy-900)", marginBottom: 8, letterSpacing: "0.03em" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 14, color: "var(--ink-600)", margin: 0, lineHeight: 1.9 }}>
                  {s.body}
                </p>
              </div>

              <div style={{ textAlign: "right" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.18em", color: "var(--navy-600)", marginBottom: 4 }}>
                  DURATION
                </div>
                <div style={{ fontSize: 16, fontWeight: 600, color: "var(--ink-900)" }}>{s.dur}</div>
                <div style={{ fontSize: 12, color: "var(--ink-500)", marginTop: 2 }}>{s.mode}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
window.Flow = Flow;
