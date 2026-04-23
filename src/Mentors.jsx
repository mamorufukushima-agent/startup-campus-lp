/* Mentors.jsx */
function Mentors() {
  const mentors = [
    {
      name: "四宮 浩二",
      nameEn: "Koji Shinomiya",
      role: "株式会社エージェント 代表取締役",
      bio: "2004年、在学中に株式会社エージェントを起業し、2020年に東証上場。日本の社会課題解決に向けて、ソーシャルスタートアップスタジオを立ち上げ、300事業創出に挑戦中。23年間で累計50事業開発。一般社団法人日本スタートアップ支援協会メンター顧問。",
      tags: ["東証上場経営者", "50事業開発", "JSSA顧問"],
      photo: "assets/shinomiya.jpg",
    },
    {
      name: "福島 護",
      nameEn: "Mamoru Fukushima",
      role: "株式会社エージェント スタキャン事業責任者",
      bio: "リクルートを経て、複数のベンチャーで新規事業開発・大手企業向け採用支援に従事。自らの起業経験も持つ。鳥取県では3年にわたり起業家育成プログラムの企画・運営を担当し、個人・企業・自治体の事業創出を現場で支援。",
      tags: ["リクルート出身", "自治体実績", "起業経験"],
      photo: "assets/fukushima.jpg",
    },
    {
      name: "武田 直人",
      nameEn: "Naoto Takeda",
      role: "talental株式会社 代表取締役",
      bio: "ソフトバンクアカデミア1期生。SBヒューマンキャピタルにて経営企画等の責任者を歴任後、2017年に自ら起案したマムズラボを子会社として設立し副社長に就任。2024年、talental（株）を設立し代表取締役に就任。",
      tags: ["SBアカデミア1期", "子会社経営", "経営企画"],
      photo: "assets/takeda.jpg",
    },
  ];

  return (
    <section id="mentors" className="section" style={{ background: "var(--paper-2)" }}>
      <div className="container wide">
        <div className="section-header">
          <span className="eyebrow">Mentors / 実践者による伴走</span>
          <h2 className="section-title" style={{ marginTop: 24 }}>
            評論家ではなく、<br/>実際に事業を創ってきた<span className="accent">実践者が伴走</span>します。
          </h2>
          <p className="section-lead" style={{ marginTop: 24 }}>
            上場企業創業者、元SBアカデミア、リクルート出身者など、ゼロから事業を立ち上げ、拡大させてきたプロフェッショナルがメンターを務めます。
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {mentors.map((m, i) => (
            <article key={i} style={{
              background: "#fff",
              border: "1px solid var(--rule)",
              padding: 32,
              display: "flex", flexDirection: "column",
            }}>
              <div style={{
                width: "100%", aspectRatio: "1 / 1",
                background: "var(--navy-50)",
                marginBottom: 28,
                overflow: "hidden",
                position: "relative",
              }}>
                <img src={m.photo} alt={m.name} style={{
                  width: "100%", height: "100%", objectFit: "cover",
                  filter: "contrast(1.02)",
                }}/>
              </div>

              <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--navy-600)", letterSpacing: "0.18em", marginBottom: 8 }}>
                {m.nameEn}
              </div>
              <h3 style={{ fontSize: 22, marginBottom: 8, color: "var(--ink-900)", letterSpacing: "0.03em" }}>
                {m.name}
              </h3>
              <div style={{ fontSize: 12, color: "var(--navy-700)", marginBottom: 20, lineHeight: 1.7, fontWeight: 500 }}>
                {m.role}
              </div>
              <p style={{ fontSize: 13, color: "var(--ink-600)", lineHeight: 1.9, margin: "0 0 24px", flex: 1 }}>
                {m.bio}
              </p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap", paddingTop: 20, borderTop: "1px solid var(--rule)" }}>
                {m.tags.map((t, j) => (
                  <span key={j} style={{
                    fontSize: 11, padding: "4px 10px",
                    background: "var(--navy-50)", color: "var(--navy-800)",
                    fontFamily: "var(--font-mono)", letterSpacing: "0.1em",
                  }}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div style={{
          marginTop: 24,
          display: "grid",
          gridTemplateColumns: "1fr 1.2fr",
          gap: 0,
          background: "#fff",
          border: "1px solid var(--rule)",
        }}>
          <div style={{
            background: "var(--navy-50)",
            overflow: "hidden",
            borderRight: "1px solid var(--rule)",
            minHeight: 180,
          }}>
            <img src="assets/mentors-extra.png" alt="その他メンター陣" style={{
              width: "100%", height: "100%", objectFit: "cover",
              display: "block",
            }}/>
          </div>
          <div style={{ padding: "28px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>Additional Mentors</div>
            <h4 style={{ fontSize: 18, color: "var(--navy-900)", marginBottom: 10, letterSpacing: "0.02em" }}>
              その他のメンター陣
            </h4>
            <p style={{ fontSize: 13, color: "var(--ink-600)", margin: 0, lineHeight: 1.9 }}>
              大企業の役員、大学講師、元CVCなど、幅広い経歴のプロフェッショナルが多数在籍しております。貴社のテーマや業界特性に合わせて、最適なメンターをアサインします。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
window.Mentors = Mentors;
