import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Education",
    "Contact",
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/70 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}

        <a
          href="#home"
          className="text-3xl font-bold tracking-wide"
        >
          Ninad<span className="text-cyan-400">.</span>
        </a>

        {/* Links */}

        <ul className="hidden md:flex gap-8 text-lg">

          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group"
              >
                {item}

                <span
                  className="
                  absolute
                  left-0
                  -bottom-1
                  h-[2px]
                  w-0
                  bg-cyan-400
                  transition-all
                  duration-300
                  group-hover:w-full
                "
                ></span>

              </a>
            </li>
          ))}

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;