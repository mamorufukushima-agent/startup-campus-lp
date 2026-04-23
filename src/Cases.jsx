/* Cases.jsx — with real clients strip + featured case photo */
function Cases() {
  return (
    <section id="cases" className="section" style={{ background: "var(--paper)" }}>
      <div className="container">
        <div className="section-header">
          <span className="eyebrow">Clients / 導入実績</span>
          <h2 className="section-title" style={{ marginTop: 24 }}>
            大手企業から自治体・教育機関まで。<br/>
            <span className="accent">幅広い導入実績</span>と高い満足度。
          </h2>
        </div>

        {/* Clients strip */}
        <div style={{
          background: "#fff",
          border: "1px solid var(--rule)",
          padding: "32px 32px",
          marginBottom: 72,
        }}>
          <img src="assets/clients-strip.png" alt="SoftBank / 東京都北区 / 鳥取県 / さいたま市産業創造財団 / 京都市 / 和歌山大学" style={{
            width: "100%", height: "auto", display: "block",
            maxHeight: 120, objectFit: "contain", objectPosition: "left center",
          }}/>
        </div>

        {/* Featured case */}
        <article style={{
          display: "grid",
          gridTemplateColumns: "1.05fr 1.2fr",
          background: "var(--navy-950)",
          color: "#fff",
          overflow: "hidden",
        }}>
          <div style={{
            background: "linear-gradient(135deg, #0b1a35 0%, #1a3a73 100%)",
            position: "relative",
            minHeight: 500,
            overflow: "hidden",
          }}>
            <img src="assets/case-tottori.jpg" alt="鳥取県 FLAT Next 最優秀賞" style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%", objectFit: "cover",
              opacity: 0.88,
            }}/>
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(180deg, rgba(8,18,38,0.1) 0%, rgba(8,18,38,0.75) 100%)",
            }}/>
            <div style={{
              position: "absolute", left: 40, bottom: 36, right: 40,
              color: "#fff",
            }}>
              <div style={{ fontSize: 11, letterSpacing: "0.24em", color: "var(--navy-300)", marginBottom: 12 }}>
                FEATURED CASE / 2024 –
              </div>
              <div style={{ fontFamily: "var(--font-serif)", fontSize: 56, lineHeight: 1, fontWeight: 600, color: "#fff", letterSpacing: "0.02em" }}>
                鳥取県
              </div>
              <div style={{ fontSize: 13, color: "var(--navy-200)", letterSpacing: "0.08em", marginTop: 6 }}>
                Tottori Prefecture / FLAT Next
              </div>
            </div>
          </div>
          <div style={{ padding: 56 }}>
            <div style={{ fontSize: 11, letterSpacing: "0.2em", color: "var(--navy-300)", marginBottom: 14 }}>
              PROGRAM / 地域起業家アクセラレーション
            </div>
            <h3 style={{ fontSize: 26, color: "#fff", marginBottom: 24, letterSpacing: "0.02em", lineHeight: 1.5 }}>
              受講者全員が事業計画を完成、<br/>約半数が起業に向けて事業推進中。
            </h3>
            <p style={{ fontSize: 15, color: "var(--navy-100)", lineHeight: 2, marginBottom: 32 }}>
              地域の課題解決や資源活用をテーマに、3か月でビジネスプランを練り上げる伴走型プログラム。県からの評価も高く、2026年2月には県政だよりの見開きに特集が組まれました。
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, paddingTop: 32, borderTop: "1px solid rgba(205,218,238,0.15)" }}>
              {[
                { n: "100%", l: "事業計画完成率" },
                { n: "50%", l: "起業・事業化推進（約）" },
                { n: "3年", l: "継続実施" },
              ].map((k, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "var(--font-serif)", fontSize: 40, color: "#fff", fontWeight: 600, lineHeight: 1.1, marginBottom: 10, whiteSpace: "nowrap" }}>{k.n}</div>
                  <div style={{ fontSize: 11, color: "var(--navy-300)", letterSpacing: "0.1em", lineHeight: 1.5 }}>{k.l}</div>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Secondary image band */}
        <div style={{ marginTop: 24, overflow: "hidden", border: "1px solid var(--rule)", background: "#fff" }}>
          <img src="assets/group-photo.png" alt="Startup Campus 参加者集合写真" style={{
            width: "100%", height: 280, objectFit: "cover", objectPosition: "center 35%", display: "block",
          }}/>
        </div>
      </div>
    </section>
  );
}
window.Cases = Cases;
