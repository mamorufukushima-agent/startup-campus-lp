/* Challenges.jsx — two-block: P8-1 未着手層 / P8-2 停滞層 */
function Challenges() {
  const blocks = [
    {
      tag: "A",
      pno: "P8-1",
      label: "これから新規事業に取り組む企業",
      sub: "未着手層",
      desc: "これから新規事業に取り組む企業が直面する壁",
      cats: [
        {
          cat: "事業開発",
          items: [
            { title: "ゼロイチ経験者が社内にいない", body: "新規事業を任せたいが「ゼロから立ち上げた経験者」がいない。経験のないメンバーに丸投げするか、コンサルに外注するか。どちらを選んでも社内にノウハウは残らない。" },
            { title: "やり方が体系化されていない", body: "新規事業には正しい「プロセス」があるが、それが定義されていない。どこから始めるか分からず迷走し、机上の空論で終わる。一度失敗すると次の挑戦のハードルまで上がる。" },
          ],
        },
        {
          cat: "人材育成",
          items: [
            { title: "研修では「自走力」が育たない", body: "研修に投資しても、現場に戻れば元の仕事に戻るだけ。「知っている」と「できる」の壁は座学では越えられない。投資対効果が見えないまま、毎年同じ研修を繰り返していないだろうか。" },
            { title: "優秀な若手人材の離職リスク", body: "「新しいことに挑戦したい」というエース社員の声に応えられず、転職・独立で失ってしまう。採用・育成コストを回収する前の離職は、数百万円単位の実損になる。" },
          ],
        },
      ],
    },
    {
      tag: "B",
      pno: "P8-2",
      label: "すでに取り組んでいるが、進まない企業",
      sub: "停滞層",
      desc: "社内プログラムはある。けれど、手応えが薄い。",
      cats: [
        {
          cat: "ビジコン／インキュベーション運営",
          items: [
            { title: "ビジコンはあるが、盛り上がらない", body: "毎年開催しているが、応募者が固定化し、審査会の熱量も上がらない。参加者の数は出ても、「次に続く事業」は生まれない。事務局は次の打ち手を探し続けている。" },
            { title: "シードは集まるが、検証が進まない", body: "アイデアは出てくる。ただ、本気でベットする前段階の「シード検証」で止まる。ピッチ資料は立派になるが、顧客に会って検証したプランがほとんど出てこない。" },
          ],
        },
        {
          cat: "組織・文化",
          items: [
            { title: "挑戦するカルチャーが根付かない", body: "経営は「新規事業をやれ」と言う。社員も「やりたい」と言う。しかし、日常業務に戻ると誰も動かない。仕掛けはあっても、文化として定着しない。" },
            { title: "社内に外部メンターのネットワークがない", body: "イノベーション推進室や新規事業部は、社内の視点だけでは詰まる。外部の起業家・事業開発経験者に伴走してほしいが、自前のネットワークでは人が足りない。" },
          ],
        },
      ],
    },
  ];

  return (
    <section id="challenges" className="section" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div className="section-header" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 80, alignItems: "end" }}>
          <div>
            <span className="eyebrow">Issues / 新規事業開発の現場</span>
            <h2 className="section-title" style={{ marginTop: 24 }}>
              <span style={{ whiteSpace: "nowrap", wordBreak: "keep-all" }}>未着手でも、停滞中でも。</span><br/>
              <span className="accent">共通する構造的な課題</span>があります。
            </h2>
          </div>
          <p className="section-lead">
            経営企画・人事・新規事業担当・イノベーション推進室の皆さまとの対話から得た、繰り返し聞かれる悩み。
            いずれも「事業」と「人材」のどちらかだけでは解決しない、構造的な問題です。
          </p>
        </div>

        {blocks.map((blk, bi) => (
          <div key={bi} style={{
            marginTop: bi === 0 ? 24 : 56,
            background: bi === 0 ? "#fff" : "#fbf3ee",
            border: "1px solid var(--rule)",
            padding: "40px 40px 44px",
            position: "relative",
          }}>
            {/* Block header */}
            <div style={{
              display: "grid", gridTemplateColumns: "auto 1fr auto",
              gap: 24, alignItems: "center",
              paddingBottom: 20,
              borderBottom: "1px solid var(--rule)",
              marginBottom: 28,
            }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 16 }}>
                <h3 style={{ fontSize: 22, color: "var(--navy-900)", margin: 0, letterSpacing: "0.03em" }}>
                  {blk.label}
                </h3>
              </div>
              <div/>
              <span style={{
                fontSize: 12, color: "var(--ink-500)", letterSpacing: "0.1em",
              }}>
                {blk.sub}向け
              </span>
            </div>

            <p style={{
              fontSize: 14, color: "var(--ink-600)",
              marginTop: 0, marginBottom: 32,
              letterSpacing: "0.03em",
            }}>
              {blk.desc}
            </p>

            {blk.cats.map((c, ci) => (
              <div key={ci} style={{ marginBottom: ci < blk.cats.length - 1 ? 32 : 0 }}>
                <div style={{ marginBottom: 14 }}>
                  <span style={{
                    display: "inline-block",
                    padding: "6px 14px",
                    background: bi === 0 ? "var(--navy-50)" : "rgba(208, 140, 102, 0.15)",
                    border: bi === 0 ? "1px solid var(--navy-200)" : "1px solid rgba(208, 140, 102, 0.35)",
                    borderRadius: 20,
                    color: bi === 0 ? "var(--navy-700)" : "#a5643a",
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.04em",
                  }}>
                    {c.cat}
                  </span>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}>
                  {c.items.map((it, i) => (
                    <div key={i} style={{
                      background: "#fff",
                      border: "1px solid var(--rule)",
                      padding: "22px 24px",
                      borderRadius: 4,
                    }}>
                      <h4 style={{
                        fontSize: 17, color: "var(--navy-900)",
                        marginTop: 0, marginBottom: 12,
                        letterSpacing: "0.02em", fontWeight: 700,
                      }}>
                        {it.title}
                      </h4>
                      <p style={{
                        fontSize: 13, color: "var(--ink-600)",
                        lineHeight: 1.95, margin: 0,
                      }}>
                        {it.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
window.Challenges = Challenges;
