import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-10 ${
        isScrolled ? "bg-white/30 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto py-[20px] px-2 flex justify-between items-center">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-[50px] h-[50px]" />
        </Link>
        <div className="hidden md:flex space-x-4">
          <nav className="space-x-4">
            <Link to="/link4" className="text-white hover:text-gray-900">
              Абитурентам
            </Link>
            <Link to="/link5" className="text-white hover:text-gray-900">
              Студентам
            </Link>
            <Link to="/link1" className="text-white hover:text-gray-900">
              Деканат
            </Link>
            <Link to="/link3" className="text-white hover:text-gray-900">
              Преподаватели
            </Link>
            <Link to="/link2" className="text-white hover:text-gray-900">
              Контакты
            </Link>
            <Link to="/link6" className="text-white hover:text-gray-900">
              О кафедре
            </Link>
          </nav>
        </div>
        <div className="md:hidden">
          <button onClick={toggleBurgerMenu}>
            <span className="text-2xl text-white">☰</span>
          </button>
        </div>
        {isBurgerMenuOpen && (
          <div className="absolute top-full right-0 bg-white w-[30%] md:w-auto md:hidden">
            <nav className="flex flex-col items-start space-y-2 p-4">
              <Link to="/link4" onClick={toggleBurgerMenu}>
                Абитурентам
              </Link>
              <Link to="/link5" onClick={toggleBurgerMenu}>
                Студентам
              </Link>
              <Link to="/link1" onClick={toggleBurgerMenu}>
                Деканат
              </Link>
              <Link to="/link3" onClick={toggleBurgerMenu}>
                Преподаватели
              </Link>
              <Link to="/link2" onClick={toggleBurgerMenu}>
                Контакты
              </Link>
              <Link to="/link6" onClick={toggleBurgerMenu}>
                О кафедре
              </Link>
            </nav>
          </div>
        )}
        <style>{`
          @media (max-width: 800px) {
            .md\\:hidden {
              display: unset;
            }
            .hidden.md\\:flex {
              display: none;
            }
          }
        `}</style>
      </div>
    </header>
  );
};

export default Header;
