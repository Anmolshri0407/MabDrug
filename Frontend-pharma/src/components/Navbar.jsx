import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import logo from "../assets/logo/mabdrug-1.png";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Quality", href: "#quality" },
  { name: "Contact Us", href: "#contact" },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 sm:px-10 lg:px-12">

        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tight text-slate-900"
          onClick={closeMenu}
        >
          <img
            src={logo}
            alt="Mabdrug"
            className="h-10 sm:h-11 lg:h-12 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-[#F04424]"
            >
              {item.name}
            </a>
          ))}

          {/* Enquire Button */}
          <a
            href="#contact"
            className="group ml-2 inline-flex min-w-[145px] items-center justify-center gap-2 rounded-full bg-[#333333] px-7 py-3.5 text-sm font-semibold tracking-wide text-white transition-all duration-300 hover:bg-[#F04424]"
          >
            Enquire Now
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-800 lg:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden bg-white transition-all duration-300 lg:hidden ${
          isMenuOpen ? "max-h-[600px] border-t border-slate-100" : "max-h-0"
        }`}
      >
        <div className="space-y-1 px-6 py-5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={closeMenu}
              className="block rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#F04424]"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-5 text-sm font-semibold text-white"
          >
            Enquire Now
            <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;