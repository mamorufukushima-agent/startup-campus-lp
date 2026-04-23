/* App.jsx — root */
const { useState, useEffect } = React;

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
      <Tweaks />
    </>
  );
}

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
