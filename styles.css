/* Tweaks.jsx — edit-mode panel */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#1a73ff",
  "heroHeadline": "新規事業を、\n3か月でカタチにする。",
  "ctaLabel": "お問い合わせする",
  "heroStyle": "editorial"
}/*EDITMODE-END*/;

function Tweaks() {
  const [active, setActive] = React.useState(false);
  const [state, setState] = React.useState(TWEAK_DEFAULTS);

  React.useEffect(() => {
    const onMsg = (e) => {
      const d = e.data || {};
      if (d.type === "__activate_edit_mode") setActive(true);
      if (d.type === "__deactivate_edit_mode") setActive(false);
    };
    window.addEventListener("message", onMsg);
    try { window.parent.postMessage({ type: "__edit_mode_available" }, "*"); } catch(_){}
    return () => window.removeEventListener("message", onMsg);
  }, []);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--accent", state.accentColor);
  }, [state.accentColor]);

  const set = (patch) => {
    setState(s => ({ ...s, ...patch }));
    try {
      window.parent.postMessage({ type: "__edit_mode_set_keys", edits: patch }, "*");
    } catch(_){}
  };

  if (!active) return null;

  return (
    <div style={{
      position: "fixed", right: 24, bottom: 24, zIndex: 100,
      width: 320, background: "#fff", border: "1px solid var(--rule-strong)",
      boxShadow: "0 20px 50px rgba(11,26,53,0.18)", padding: 20,
      fontFamily: "var(--font-jp)",
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <div style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.04em", color: "var(--navy-900)" }}>Tweaks</div>
        <div style={{ fontSize: 10, color: "var(--ink-500)", fontFamily: "var(--font-mono)", letterSpacing: "0.16em" }}>DESIGN CONTROLS</div>
      </div>

      <Field label="Accent color">
        <div style={{ display: "flex", gap: 8 }}>
          {[
            { c: "#1a73ff", l: "Bright" },
            { c: "#0a5ee0", l: "Deep" },
            { c: "#264b8f", l: "Navy" },
            { c: "#00a3b4", l: "Teal" },
          ].map(o => (
            <button key={o.c} onClick={() => set({ accentColor: o.c })} style={{
              flex: 1, padding: "10px 6px", cursor: "pointer",
              border: state.accentColor === o.c ? "2px solid var(--navy-900)" : "1px solid var(--rule)",
              background: "#fff", fontSize: 10, letterSpacing: "0.1em",
              display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            }}>
              <span style={{ width: 16, height: 16, background: o.c, display: "block" }}/>
              {o.l}
            </button>
          ))}
        </div>
      </Field>

      <Field label="CTA label">
        <input
          type="text" value={state.ctaLabel}
          onChange={e => set({ ctaLabel: e.target.value })}
          style={{
            width: "100%", padding: "10px 12px",
            border: "1px solid var(--rule)", fontSize: 13,
            fontFamily: "var(--font-jp)",
          }}
        />
        <div style={{ fontSize: 10, color: "var(--ink-500)", marginTop: 6 }}>※ Hero & Nav のボタンラベル（今後連携予定）</div>
      </Field>
    </div>
  );
}

function Field({ label, children }) {
  return (
    <div style={{ marginBottom: 14 }}>
      <div style={{ fontSize: 10, letterSpacing: "0.16em", fontFamily: "var(--font-mono)", color: "var(--ink-500)", marginBottom: 8, textTransform: "uppercase" }}>
        {label}
      </div>
      {children}
    </div>
  );
}

window.Tweaks = Tweaks;
