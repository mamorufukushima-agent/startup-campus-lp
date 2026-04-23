/* Faq.jsx */
function Faq() {
  const [open, setOpen] = React.useState(0);
  const items = [
    { q: "3か月で本当に事業計画まで到達できますか？", a: "はい。ただし「事業化の決定」ではなく「経営陣がGo/No-Goを判断できる検証済みのプラン」がゴールです。顧客インタビューやMVP検証を経ているため、机上の空論ではない判断材料が揃います。" },
    { q: "すでに社内でビジコンや新規事業プログラムを運営していますが、スタキャンは役に立ちますか？", a: "はい。特に「シード検証が進まない」「盛り上がりに欠ける」「事務局の打ち手が尽きている」という悩みには、スタキャンの伴走型アプローチが直接効きます。既存プログラムと競合するのではなく、既存プログラムに「検証の型」と「外部メンターの視点」を注入する形で機能します。" },
    { q: "技術はあるが、自社サービスを立ち上げた経験がありません。", a: "技術シーズから事業化する際に最も詰まりやすいのは、「顧客課題との接続」です。スタキャンはCPF（Customer-Problem Fit）から入るので、技術ありきの発想を顧客起点に転換するプロセスを体系的に進められます。" },
    { q: "既存業務との兼務は現実的ですか？", a: "月間業務工数の約10%（月15時間前後）が目安です。週1回60分のメンタリングが軸で、残りはチャットベースの非同期サポート。既存業務に支障が出ない設計になっています。" },
    { q: "コンサルに頼むのと何が違いますか？", a: "コンサルは外部が事業を作るため、ノウハウが社外に留まります。スタキャンは社員自身が主体で動き、メンターは伴走役です。事業計画もプロセスも全て社内資産として残り、次の事業開発にも再現できます。" },
    { q: "テーマが未定でも参加できますか？", a: "プログラムは「誰の、どんな課題を解決するか」を設計するところから始めます。テーマ未定の状態こそ、正しいプロセスで課題を特定する価値が最も高いタイミングです。" },
    { q: "プログラム終了後のサポートはありますか？", a: "月1回の面談やチャットサポート、起業家・事業開発経験者が集まる交流会・勉強会への参加を通じて、事業推進の支援を継続します。営業・マーケティング・クリエイティブ作成などのインキュベーション支援もご相談いただけます。" },
  ];

  return (
    <section id="faq" className="section" style={{ background: "var(--paper-2)" }}>
      <div className="container" style={{ maxWidth: 960 }}>
        <div className="section-header">
          <span className="eyebrow">FAQ / よくあるご質問</span>
          <h2 className="section-title" style={{ marginTop: 24 }}>
            ご検討いただく際の、<br/><span className="accent">よくあるご質問</span>。
          </h2>
        </div>

        <div style={{ borderTop: "1px solid var(--rule-strong)" }}>
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={i} style={{ borderBottom: "1px solid var(--rule)" }}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  style={{
                    width: "100%", textAlign: "left",
                    background: "transparent", border: "none",
                    padding: "28px 0", cursor: "pointer",
                    display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 24,
                    alignItems: "center",
                    fontFamily: "var(--font-jp)",
                  }}>
                  <span style={{
                    fontFamily: "var(--font-serif)", fontStyle: "italic",
                    fontSize: 24, color: "var(--navy-600)", minWidth: 36,
                  }}>Q{String(i+1).padStart(2, "0")}</span>
                  <span style={{
                    fontSize: 17, fontWeight: 600, color: "var(--ink-900)",
                    letterSpacing: "0.02em",
                  }}>{it.q}</span>
                  <span style={{
                    width: 28, height: 28, borderRadius: "50%",
                    border: "1px solid var(--navy-300)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "transform 200ms",
                    transform: isOpen ? "rotate(45deg)" : "none",
                    color: "var(--navy-800)",
                    fontSize: 16, fontWeight: 300,
                  }}>+</span>
                </button>
                {isOpen && (
                  <div style={{
                    paddingLeft: 60, paddingRight: 52,
                    paddingBottom: 28,
                    fontSize: 15, color: "var(--ink-600)", lineHeight: 2,
                  }}>
                    {it.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
window.Faq = Faq;
