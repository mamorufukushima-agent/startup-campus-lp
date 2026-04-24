/* App.jsx — root */
const { useState, useEffect } = React;

function StickyCTA() {
  return (
    <div className="sticky-cta" role="region" aria-label="お問い合わせ">
      <a href="https://timerex.net/s/for_company/4d6ee85a/" target="_blank" rel="noopener" className="sc-ghost">
        打合せを予約
      </a>
      <a href="https://startupcampus.work/contact/" target="_blank" rel="noopener" className="sc-primary">
        お問い合わせ →
      </a>
    </div>
  );
}

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Targets />
        <Challenges />
        <About />
        <Compare />
        <Outcomes />
        <Roadmap />
        <Features />
        <Mentors />
        <Cases />
        <Pricing />
        <Flow />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
      <Tweaks />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
