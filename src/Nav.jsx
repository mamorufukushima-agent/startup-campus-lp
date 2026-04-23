/* Nav.jsx */
function Nav() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 40,
    background: scrolled ? "rgba(251,250,247,0.92)" : "rgba(251,250,247,0.0)",
    backdropFilter: scrolled ? "saturate(120%) blur(10px)" : "none",
    borderBottom: scrolled ? "1px solid var(--rule)" : "1px solid transparent",
    transition: "all 200ms ease",
  };

  const items = [
    { href: "#about", label: "プログラム" },
    { href: "#roadmap", label: "3か月の流れ" },
    { href: "#mentors", label: "メンター" },
    { href: "#cases", label: "導入実績" },
    { href: "#pricing", label: "料金" },
    { href: "#faq", label: "FAQ" },
  ];

  return (
    <nav style={navStyle}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 72,
      }}>
        <a href="#top" className="nav-brand" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", color: "var(--ink-900)", flexShrink: 0 }}>
          <img src="assets/logo-color.png" alt="Startup Campus" style={{ height: 34, width: "auto" }}/>
          <div className="nav-brand-sub" style={{
            paddingLeft: 12, marginLeft: 2,
            borderLeft: "1px solid var(--rule-strong)",
            lineHeight: 1.2,
            whiteSpace: "nowrap",
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: "var(--navy-900)" }}>for Business</div>
            <div style={{ fontSize: 10, color: "var(--navy-600)", letterSpacing: "0.08em" }}>企業向けプログラム</div>
          </div>
        </a>

        <div className="nav-links" style={{
          display: "flex", alignItems: "center", gap: 24,
        }}>
          {items.map(i => (
            <a key={i.href} href={i.href} className="nav-link" style={{
              fontSize: 13, color: "var(--ink-700)", textDecoration: "none",
              fontWeight: 500, letterSpacing: "0.04em",
              whiteSpace: "nowrap",
            }}
            onMouseOver={e => e.currentTarget.style.color = "var(--navy-800)"}
            onMouseOut={e => e.currentTarget.style.color = "var(--ink-700)"}>
              {i.label}
            </a>
          ))}
          <a href="https://startupcampus.work/contact/" target="_blank" rel="noopener" className="btn btn-primary nav-cta" style={{ padding: "12px 20px", fontSize: 13, whiteSpace: "nowrap" }}>
            お問い合わせ <span className="btn-arrow">→</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

function Logomark() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="0" y="0" width="32" height="32" fill="#0b1a35"/>
      <path d="M7 22 L7 10 L13 10 L13 14 L10 14 L10 18 L13 18 L13 22 Z" fill="#fff"/>
      <path d="M15 10 L19 10 L22 16 L22 10 L25 10 L25 22 L21 22 L18 16 L18 22 L15 22 Z" fill="#fff"/>
      <circle cx="23" cy="9" r="2" fill="#1a73ff"/>
    </svg>
  );
}

window.Nav = Nav;
