import portfolioData from "../data/portfolioData";

function Footer() {
  return (
    <footer className="site-footer page-width">
      <a className="mono" href="#/">NN / BACK TO TOP ↑</a>
      <span className="mono">DESIGNED & BUILT WITH INTENTION</span>
      <span className="mono">© {new Date().getFullYear()} {portfolioData.name}</span>
    </footer>
  );
}

export default Footer;
