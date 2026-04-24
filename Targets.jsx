/* Pricing.jsx — single plan, horizontal layout */
function Pricing() {
  const features = [
    "個別メンタリング 60分 × 10回",
    "集中講義 月1回・計3回",
    "150P超オリジナルテキスト",
    "チャットサポート（平日・随時）",
    "進捗発表会 / 成果発表会",
    "ビジネスプランコンテストへの参加",
  ];

  return (
    <section id="pricing" className="section" style={{ background: "var(--paper-2)" }}>
      <div className="container">
        <div className="section-header center">
          <span className="eyebrow center">Pricing / 料金</span>
          <h2 className="section-title" style={{ marginTop: 24 }}>
            シンプルな<span className="accent">1プラン</span>。<br/>まずは1チーム・1名から導入いただけます。
          </h2>
          <p className="section-lead" style={{ marginTop: 16 }}>
            3か月で成果を確認してから、次の展開をご判断ください。
          </p>
        </div>

        <div style={{
          background: "#fff",
          border: "1px solid var(--rule)",
          position: "relative",
          boxShadow: "0 16px 40px rgba(11, 26, 53, 0.08)",
          display: "grid",
          gridTemplateColumns: "1fr 1.3fr",
          gap: 0,
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 4,
            background: "var(--accent)",
          }}/>

          {/* Left — price */}
          <div style={{
            padding: "48px 48px 40px",
            background: "var(--paper)",
            borderRight: "1px solid var(--rule)",
            display: "flex", flexDirection: "column",
          }}>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--navy-600)", marginBottom: 24 }}>
              STANDARD PLAN
            </div>
            <h3 style={{ fontSize: 26, color: "var(--navy-900)", marginBottom: 8, letterSpacing: "0.03em" }}>
              スタキャン for Business
            </h3>
            <p style={{ fontSize: 13, color: "var(--ink-600)", marginBottom: 32, lineHeight: 1.8 }}>
              新規事業担当者・経営企画担当者、<br/>またはチームでの導入に。
            </p>

            <div style={{ marginTop: "auto" }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
                <div style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 88, fontWeight: 500, color: "var(--navy-900)",
                  lineHeight: 1, letterSpacing: "-0.02em",
                }}>60</div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 600, color: "var(--ink-900)" }}>万円 / 3か月</div>
                  <div style={{ fontSize: 12, color: "var(--ink-500)" }}>（税別）</div>
                </div>
              </div>
              <div style={{ marginTop: 12, fontSize: 12, color: "var(--ink-500)", letterSpacing: "0.06em" }}>
                1名 または 1チーム（最大3名）
              </div>
            </div>
          </div>

          {/* Right — features + CTA */}
          <div style={{ padding: "48px 48px 40px", display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 11, letterSpacing: "0.22em", color: "var(--navy-600)", marginBottom: 20 }}>
              INCLUDED
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px",
              display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "6px 32px",
            }}>
              {features.map((f, j) => (
                <li key={j} style={{
                  fontSize: 14, color: "var(--ink-700)", padding: "10px 0",
                  display: "flex", gap: 12, alignItems: "center",
                  borderBottom: "1px solid var(--rule)",
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ flexShrink: 0 }}>
                    <path d="M2 7L6 11L12 3" stroke="var(--accent)" strokeWidth="1.5"/>
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <div style={{
              padding: "14px 18px",
              background: "var(--navy-50)",
              border: "1px solid var(--navy-200)",
              fontSize: 13, color: "var(--ink-700)", lineHeight: 1.8,
              marginBottom: 24,
            }}>
              <strong style={{ color: "var(--navy-900)" }}>カスタマイズのご提案も可能です。</strong>
              企業ごとの課題・人数・期間に合わせた設計をご相談いただけます。
            </div>

            <a href="https://startupcampus.work/contact/" target="_blank" rel="noopener" className="btn btn-primary" style={{
              alignSelf: "flex-start",
              padding: "18px 32px", fontSize: 14,
            }}>
              このプランで相談する <span className="btn-arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Pricing = Pricing;
