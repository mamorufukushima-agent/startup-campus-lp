/* Roadmap.jsx — 3-phase journey + fit journey */
function Roadmap() {
  const phases = [
    {
      n: "01",
      weeks: "Week 1 – 4",
      title: "課題を設計する",
      items: ["課題の設計（WHO / WHAT / WHY）", "ペルソナ整理・市場規模", "顧客インタビュー実施", "バーニングニーズの特定"],
      skills: ["ヒアリング力", "課題設計力"],
    },
    {
      n: "02",
      weeks: "Week 5 – 8",
      title: "解決策を検証する",
      items: ["VPC・タグライン設計", "仮説検証（ジャベリンボード）", "競合調査・3C分析", "ビジネスモデル構築"],
      skills: ["仮説思考", "検証スキル"],
    },
    {
      n: "03",
      weeks: "Week 9 – 12",
      title: "事業計画を完成させる",
      items: ["MVP検証・改善", "事業計画書の完成", "ビジネスプランコンテスト", "経営陣へのピッチ発表"],
      skills: ["戦略構想力", "プレゼン力"],
    },
  ];

  const fit = ["FPF", "CPF", "PSF", "SPF", "PMF", "GTM"];
  const fitFull = [
    "Founder–Problem Fit",
    "Customer–Problem Fit",
    "Problem–Solution Fit",
    "Solution–Product Fit",
    "Product–Market Fit",
    "Go-To-Market",
  ];

  return (
    <section id="roadmap" className="section" style={{ background: "var(--paper-2)" }}>
      <div className="container wide">
        <div className="section-header">
          <span className="eyebrow">Roadmap / 12週間の進行</span>
          <h2 className="section-title" style={{ marginTop: 24 }}>
            3か月で、検証済みの<br/>事業計画を完成させる<span className="accent">ロードマップ</span>。
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {phases.map((p, i) => (
            <div key={i} style={{
              background: "#fff",
              border: "1px solid var(--rule)",
              padding: 36,
              position: "relative",
            }}>
              <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 28 }}>
                <div>
                  <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", letterSpacing: "0.2em", color: "var(--navy-600)" }}>
                    PHASE {p.n}
                  </div>
                  <div style={{ fontSize: 13, color: "var(--ink-500)", marginTop: 4, fontFamily: "var(--font-mono)" }}>
                    {p.weeks}
                  </div>
                </div>
                <span className="num" style={{ fontSize: 56 }}>{p.n}</span>
              </div>
              <h3 style={{ fontSize: 22, color: "var(--navy-900)", marginBottom: 20, letterSpacing: "0.03em" }}>
                {p.title}
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 28px" }}>
                {p.items.map((it, j) => (
                  <li key={j} style={{
                    fontSize: 14, color: "var(--ink-700)",
                    padding: "10px 0",
                    borderTop: "1px solid var(--rule)",
                    display: "flex", gap: 12,
                  }}>
                    <span style={{ color: "var(--navy-400)", fontFamily: "var(--font-mono)", fontSize: 11, minWidth: 16 }}>
                      0{j+1}
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
              <div style={{
                padding: "14px 16px",
                background: "var(--navy-50)",
                border: "1px solid var(--navy-200)",
              }}>
                <div style={{ fontSize: 10, letterSpacing: "0.2em", fontFamily: "var(--font-mono)", color: "var(--navy-700)", marginBottom: 6 }}>
                  育成ポイント
                </div>
                <div style={{ fontSize: 13, color: "var(--navy-900)", fontWeight: 600 }}>
                  {p.skills.join(" / ")}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fit Journey — horizontal flow */}
        <div style={{ marginTop: 80 }}>
          <div style={{ marginBottom: 32 }}>
            <div className="eyebrow">Fit Journey</div>
            <h3 style={{ fontSize: 26, marginTop: 12, color: "var(--navy-900)", letterSpacing: "0.02em" }}>
              スタキャンが伴走する、フィットジャーニー
            </h3>
            <p style={{ fontSize: 14, color: "var(--ink-500)", marginTop: 10, lineHeight: 1.8 }}>
              FPFからGTMまで、事業開発の全工程を段階的に検証します。スタキャンは<strong style={{ color: "var(--navy-800)" }}>FPF〜SPF</strong>を中心に、PMFに繋げるMVP検証まで伴走します。
            </p>
          </div>

          <div style={{
            background: "#fff",
            border: "1px solid var(--rule)",
            padding: "48px 32px 40px",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Flow arrow background */}
            <svg aria-hidden viewBox="0 0 1200 120" preserveAspectRatio="none" style={{
              position: "absolute", left: 32, right: 32, top: "50%", transform: "translateY(-50%)",
              width: "calc(100% - 64px)", height: 120, zIndex: 0,
            }}>
              <defs>
                <linearGradient id="flowGrad" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#e8edf7"/>
                  <stop offset="20%" stopColor="#c6d4f0"/>
                  <stop offset="85%" stopColor="#1a73ff"/>
                  <stop offset="100%" stopColor="#0d50c8"/>
                </linearGradient>
              </defs>
              <path d="M 0 60 L 1140 60 L 1140 40 L 1200 60 L 1140 80 L 1140 60 Z" fill="url(#flowGrad)" opacity="0.22"/>
            </svg>

            <div style={{ display: "grid", gridTemplateColumns: `repeat(${fit.length}, 1fr)`, gap: 8, position: "relative", zIndex: 2 }}>
              {fit.map((f, i) => {
                const inScope = i >= 0 && i <= 3;
                return (
                  <div key={i} style={{ position: "relative" }}>
                    <div style={{
                      padding: "20px 8px 18px",
                      textAlign: "center",
                      background: inScope ? "var(--navy-800)" : "#fff",
                      color: inScope ? "#fff" : "var(--ink-500)",
                      border: inScope ? "1px solid var(--navy-800)" : "1px solid var(--rule-strong)",
                      borderRadius: 2,
                      boxShadow: inScope ? "0 10px 24px rgba(11,26,53,0.15)" : "none",
                      position: "relative",
                      zIndex: 2,
                    }}>
                      <div style={{
                        fontSize: 10, letterSpacing: "0.18em",
                        color: inScope ? "var(--navy-200)" : "var(--ink-400)",
                        marginBottom: 8,
                      }}>STEP {String(i+1).padStart(2,"0")}</div>
                      <div style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: 24, fontWeight: 700,
                        color: inScope ? "#fff" : "var(--ink-700)",
                        letterSpacing: "0.04em",
                        lineHeight: 1,
                      }}>{f}</div>
                      <div style={{ fontSize: 10, marginTop: 8, opacity: 0.85, letterSpacing: "0.02em", lineHeight: 1.4 }}>
                        {fitFull[i]}
                      </div>
                    </div>
                    {i < fit.length - 1 && (
                      <div aria-hidden style={{
                        position: "absolute",
                        right: -12, top: "50%", transform: "translateY(-50%)",
                        width: 18, height: 18,
                        color: inScope ? "var(--accent)" : "var(--navy-300)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        zIndex: 3,
                        pointerEvents: "none",
                      }}>
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7 H12 M8 3 L12 7 L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div style={{
              marginTop: 32, display: "flex", gap: 24, justifyContent: "center",
              flexWrap: "wrap", fontSize: 12, color: "var(--ink-500)",
            }}>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 12, height: 12, background: "var(--navy-800)", borderRadius: 2 }}/>
                スタキャンが伴走する範囲
              </span>
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 12, height: 12, background: "#fff", border: "1px solid var(--rule-strong)", borderRadius: 2 }}/>
                伴走範囲外（情報提供のみ）
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Roadmap = Roadmap;
