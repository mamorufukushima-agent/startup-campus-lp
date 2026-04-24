/* Compare.jsx — 4-way comparison table */
function Compare() {
  const rows = [
    { label: "事業計画の創出",       v: [["×","知識止まり"],       ["◎","成果は出る"],           ["◎","成果は出る"],           ["◎","社員自身が創る"]] },
    { label: "社内ノウハウ蓄積",     v: [["△","テキストのみ"],     ["×","外部に留まる"],         ["△","一部残る"],             ["◎","事業計画が丸ごと社内資産"]] },
    { label: "担当者の実践力向上",   v: [["△","知識は得られる"],   ["×","外部依存で成長なし"],   ["○","伴走で一定育つ"],       ["◎","実践で確実に身につく"]] },
    { label: "コスト",               v: [["○","安価"],              ["×","数千万〜"],            ["×","500〜1000万円"],        ["◎","30万円〜 / 補助金対応"]] },
    { label: "次の事業への再現性",   v: [["×","再現性なし"],        ["×","外注依存継続"],        ["△","伴走が前提"],           ["◎","型とノウハウが社内定着"]] },
  ];

  const markColor = (m) => {
    if (m === "◎") return "var(--accent)";
    if (m === "○") return "var(--navy-600)";
    if (m === "△") return "var(--ink-500)";
    return "var(--ink-400)";
  };

  const headCols = [
    { label: "座学研修",        sub: "SEMINAR" },
    { label: "コンサル外注",    sub: "OUTSOURCING" },
    { label: "外部プロ伴走型",  sub: "EXTERNAL-PRO BUNSO" },
    { label: "スタキャン for Business", sub: "STARTUP CAMPUS", highlight: true },
  ];

  const gridTpl = "1.25fr 0.95fr 0.95fr 0.95fr 1.15fr";

  return (
    <section id="compare" className="section" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Comparison / 第3の選択肢</span>
          <h2 className="section-title" style={{ marginTop: 24 }}>
            「研修」でも「コンサル」でもない、<br/>
            <span className="accent">第3のアプローチ</span>です。
          </h2>
          <p className="section-lead" style={{ marginTop: 16 }}>
            既存の新規事業支援サービスと比較した、スタキャン for Business の立ち位置。一桁下の価格帯で、社内に資産が残る設計です。
          </p>
        </div>

        <div style={{
          background: "#fff",
          border: "1px solid var(--rule)",
          overflow: "hidden",
        }}>
          {/* Header row */}
          <div style={{
            display: "grid",
            gridTemplateColumns: gridTpl,
          }}>
            <div style={{ padding: "28px 24px", background: "var(--paper-2)" }}>
              <div style={{ fontSize: 11, color: "var(--ink-500)", letterSpacing: "0.18em" }}>
                EVALUATION AXIS
              </div>
            </div>
            {headCols.map((h, i) => (
              <CompareHead key={i} label={h.label} sub={h.sub} highlight={h.highlight} />
            ))}
          </div>

          {rows.map((r, i) => (
            <div key={i} style={{
              display: "grid",
              gridTemplateColumns: gridTpl,
              borderTop: "1px solid var(--rule)",
            }}>
              <div style={{
                padding: "24px", background: "var(--paper-2)",
                fontSize: 14, fontWeight: 600, color: "var(--ink-900)",
                letterSpacing: "0.03em",
                display: "flex", alignItems: "center",
              }}>
                {r.label}
              </div>
              {r.v.map((cell, j) => {
                const isX = j === r.v.length - 1;
                return (
                  <div key={j} style={{
                    padding: "24px",
                    background: isX ? "var(--navy-50)" : "transparent",
                    borderLeft: "1px solid var(--rule)",
                    position: "relative",
                  }}>
                    <div style={{
                      fontSize: 24,
                      fontWeight: 700,
                      color: markColor(cell[0]),
                      marginBottom: 6,
                      lineHeight: 1,
                    }}>{cell[0]}</div>
                    <div style={{ fontSize: 12, color: isX ? "var(--navy-900)" : "var(--ink-600)", lineHeight: 1.55, fontWeight: isX ? 500 : 400 }}>
                      {cell[1]}
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        <div style={{ marginTop: 20, fontSize: 12, color: "var(--ink-500)", letterSpacing: "0.04em", lineHeight: 1.8 }}>
          ※ 比較は一般的なサービス類型を示したものです。価格帯は公開情報および当社の商談での参考値に基づきます。
        </div>
      </div>
    </section>
  );
}

function CompareHead({ label, sub, highlight }) {
  return (
    <div style={{
      padding: "28px 22px",
      background: highlight ? "var(--navy-800)" : "var(--paper-2)",
      color: highlight ? "#fff" : "var(--ink-900)",
      borderLeft: "1px solid var(--rule)",
    }}>
      <div style={{ fontSize: 9, letterSpacing: "0.2em", opacity: 0.65, marginBottom: 6, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {sub}
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.02em", lineHeight: 1.3 }}>{label}</div>
    </div>
  );
}
window.Compare = Compare;
