import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = (event) => {
    event.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="container p-2 mx-auto">
      <div className="flex justify-between items-center relative" ref={menuRef}>
        <img
          src="./Images/logo.png"
          alt="logo"
          className="w-10 md:w-15 lg:w-20"
        />

        <ul
          className={`
            absolute md:static top-[3rem] left-0 w-full md:w-auto md:flex
            bg-white md:bg-transparent shadow-md md:shadow-none
            overflow-hidden
            transition-all duration-300 ease-in-out
            ${
              isOpen
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0 md:opacity-100 md:max-h-full"
            }
          `}
        >
          <li className="hover:text-pri-500 hover:font-medium p-4 border-b md:border-none">
            <a href="">Home</a>
          </li>
          <li className="hover:text-pri-500 hover:font-medium p-4 border-b md:border-none">
            <a href="">About</a>
          </li>
          <li className="hover:text-pri-500 hover:font-medium p-4 border-b md:border-none">
            <a href="">Service</a>
          </li>
          <li className="hover:text-pri-500 hover:font-medium p-4 border-b md:border-none">
            <a href="">Product</a>
          </li>
          <li className="hover:text-pri-500 hover:font-medium p-4">
            <a href="">Contact</a>
          </li>
        </ul>

        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-sec-500 flex justify-center items-center ">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="w-10 h-10 rounded-full bg-sec-500 flex justify-center items-center ">
            <i className="fa-solid fa-bell"></i>
          </div>
          <div className="w-10 h-10 rounded-full bg-sec-500 flex justify-center items-center lg:hidden md:hidden">
            <button
              onClick={toggleMenu}
              className="focus:outline-none"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
