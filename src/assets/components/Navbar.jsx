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
    <>
      <nav className="container">
        <div
          className="flex justify-between items-center relative"
          ref={menuRef}
        >
           <img src="./Images/logo.png" alt="logo" />
         
          <ul
            className={`absolute md:static top-16 gap-8 left-0 w-full md:w-auto md:flex bg-white md:bg-transparent shadow-md md:shadow-none transition-transform transform md:transform-none ${
              isOpen ? "block" : "hidden"
            }`}
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
            <li className="hover:text-pri-500 hover:font-medium p-4 ">
              <a href="">Contact</a>
            </li>
          </ul>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-sec-500 flex justify-center items-center ">
              <i class="fa-solid fa-user"></i>
            </div>
            <div className="w-10 h-10 rounded-full bg-sec-500 flex justify-center items-center ">
              <i class="fa-solid fa-bell"></i>
            </div>
            <div className="w-10 h-10 rounded-full bg-sec-500 flex justify-center p-2 items-center lg:hidden">
            <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none">
              {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
