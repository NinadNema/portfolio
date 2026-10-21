import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const navItems = [
  { label: "Work", href: "/#projects" },
  { label: "Stack", href: "/#skills" },
  { label: "Record", href: "/#education" },
  { label: "About", href: "#/about" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-inner page-width" aria-label="Main navigation">
        <a href="#/" className="brand mono">NN<span> /</span> PORTFOLIO</a>
        <div className="desktop-nav">
          {navItems.map((item, index) => (
            <a href={item.href} key={item.label}><span className="mono">0{index + 1}</span>{item.label}</a>
          ))}
          <a className="nav-contact mono" href="/#contact">LET’S TALK ↗</a>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div className="mobile-nav" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
            {navItems.map((item, index) => (
              <a href={item.href} key={item.label} onClick={() => setMenuOpen(false)}>
                <span className="mono">0{index + 1}</span>{item.label}<span>↗</span>
              </a>
            ))}
            <a href="/#contact" onClick={() => setMenuOpen(false)}><span className="mono">05</span>Contact<span>↗</span></a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
