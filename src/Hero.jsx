/* Hero.jsx — editorial hero with 2x2 photo grid */
function Hero() {
  return (
    <section id="top" style={{
      position: "relative",
      paddingTop: 140,
      paddingBottom: 100,
      background: "linear-gradient(180deg, #fbfaf7 0%, #fbfaf7 60%, #f3f6fc 100%)",
      overflow: "hidden",
    }}>
      <HeroGrid />

      <div className="container wide" style={{ position: "relative", zIndex: 2 }}>

        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 36 }}>
          <span className="eyebrow">Startup Campus / For Business</span>
          <span style={{
            fontSize: 11, color: "var(--ink-500)",
            letterSpacing: "0.16em",
          }}>
            企業向け 新規事業開発支援プログラム
          </span>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "1.1fr 1fr",
          gap: 56,
          alignItems: "center",
        }}>
          {/* Left copy column */}
          <div>
            <h1 style={{
              fontSize: "clamp(38px, 5.2vw, 76px)",
              fontWeight: 700,
              lineHeight: 1.22,
              letterSpacing: "0.01em",
              color: "var(--navy-950)",
              marginBottom: 28,
              wordBreak: "keep-all",
            }}>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>事業開発人材を育て、</span>
              <span style={{ display: "block", whiteSpace: "nowrap" }}>
                <span style={{ color: "var(--accent)" }}>事業</span>を創る。
              </span>
            </h1>

            <div style={{
              display: "inline-block",
              padding: "10px 18px",
              background: "#fff",
              border: "1px solid var(--rule-strong)",
              fontSize: 13,
              color: "var(--navy-800)",
              letterSpacing: "0.05em",
              marginBottom: 32,
              fontWeight: 500,
            }}>
              研修 × 事業開発を同時に実現する、実践・伴走型プログラム
            </div>

            <p style={{
              fontSize: 17,
              lineHeight: 2,
              color: "var(--ink-700)",
              maxWidth: 540,
              margin: "0 0 40px",
              letterSpacing: "0.03em",
            }}>
              事業開発のプロが伴走し、社員自身が手を動かす。<br/>
              検証済みの事業計画と、自走できる次世代リーダー。<br/>
              その両方を、3か月で手にするプログラムです。
            </p>

            <div style={{ display: "flex", gap: 14, alignItems: "center", marginBottom: 0, flexWrap: "wrap" }}>
              <a href="https://startupcampus.work/contact/" target="_blank" rel="noopener" className="btn btn-primary" style={{ padding: "20px 32px", fontSize: 15 }}>
                お問い合わせ <span className="btn-arrow">→</span>
              </a>
              <a href="https://timerex.net/s/mamoru.fukushima_7c57/35e7bf75/" target="_blank" rel="noopener" className="btn btn-ghost" style={{ padding: "20px 26px", fontSize: 14 }}>
                打合せを予約 <span className="btn-arrow">→</span>
              </a>
            </div>
            <div style={{ fontSize: 12, color: "var(--ink-500)", letterSpacing: "0.1em", marginTop: 16 }}>
              
            </div>
          </div>

          {/* Right: 2x2 photo grid */}
          <div style={{ position: "relative" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: 10,
              aspectRatio: "1 / 1.1",
              maxHeight: 620,
            }}>
              <PhotoTile src="assets/photo-kiri.webp" pos="center 25%" />
              <PhotoTile src="assets/photo-josei.webp" pos="center 30%" />
              <PhotoTile src="assets/photo-shimokatasan.webp" pos="center 30%" />
              <PhotoTile src="assets/photo-wagatsuma.webp" pos="center 25%" />
            </div>

            {/* Floating badge */}
            <div style={{
              position: "absolute",
              bottom: -20, left: -20,
              background: "#fff",
              border: "1px solid var(--rule)",
              padding: "18px 22px",
              boxShadow: "0 14px 30px rgba(11,26,53,0.10)",
              display: "flex", alignItems: "center", gap: 14,
              maxWidth: 290,
            }}>
              <img src="assets/jpx.png" alt="JPX 東証上場" style={{ width: 44, height: "auto", objectFit: "contain" }}/>
              <div>
                <div style={{ fontSize: 10, letterSpacing: "0.18em", color: "var(--ink-500)", marginBottom: 4 }}>
                  運営元
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--navy-900)", letterSpacing: "0.02em" }}>
                  株式会社エージェント
                </div>
                <div style={{ fontSize: 11, color: "var(--ink-500)", marginTop: 2 }}>
                  TOKYO PRO MARKET / 7098
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Proof strip */}
        <div style={{ marginTop: 80 }}>
          <HeroProof />
        </div>
      </div>
    </section>
  );
}

function PhotoTile({ src, pos }) {
  return (
    <div style={{
      background: "var(--navy-100)",
      overflow: "hidden",
      border: "1px solid var(--rule)",
      position: "relative",
    }}>
      <img src={src} alt="" style={{
        width: "100%", height: "100%", objectFit: "cover",
        objectPosition: pos || "center",
        display: "block",
      }}/>
    </div>
  );
}

function HeroProof() {
  const stats = [
    { n: "50+", label: "事業開発実績" },
    { n: "22", label: "展開事業数" },
    { n: "300+", label: "専任メンター" },
    { n: "7", label: "社会課題領域" },
  ];
  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "auto repeat(4, 1fr)",
      alignItems: "center",
      gap: 0,
      paddingTop: 36,
      borderTop: "1px solid var(--rule)",
    }}>
      <div style={{
        paddingRight: 40,
        fontSize: 11,
        letterSpacing: "0.16em",
        color: "var(--ink-500)",
      }}>
        <div style={{ marginBottom: 4 }}>BY THE NUMBERS</div>
        <div style={{ fontSize: 10, color: "var(--ink-400)" }}>数字で見るスタキャン</div>
      </div>
      {stats.map((s, i) => (
        <div key={i} style={{
          paddingLeft: 32,
          borderLeft: "1px solid var(--rule)",
        }}>
          <div style={{
            fontFamily: "var(--font-serif)",
            fontSize: 44,
            fontWeight: 600,
            color: "var(--navy-800)",
            lineHeight: 1,
            marginBottom: 8,
            letterSpacing: "-0.01em",
          }}>{s.n}</div>
          <div style={{ fontSize: 12, color: "var(--ink-500)", letterSpacing: "0.1em" }}>{s.label}</div>
        </div>
      ))}
    </div>
  );
}

function HeroGrid() {
  return (
    <div aria-hidden style={{
      position: "absolute", inset: 0,
      backgroundImage:
        "linear-gradient(var(--ink-200) 1px, transparent 1px), linear-gradient(90deg, var(--ink-200) 1px, transparent 1px)",
      backgroundSize: "80px 80px",
      opacity: 0.35,
      maskImage: "radial-gradient(ellipse at 90% 10%, black 0%, transparent 70%)",
      WebkitMaskImage: "radial-gradient(ellipse at 90% 10%, black 0%, transparent 70%)",
    }} />
  );
}

window.Hero = Hero;
