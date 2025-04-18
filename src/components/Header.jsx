//18
//import context
import { useContext, useEffect, useState } from "react";
import { SidebarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
// import icons
import { BsBag } from "react-icons/bs";
import { Link, useSearchParams } from "react-router-dom";

import Logo from "../img/logo.svg";

function Header() {
  //19 import setisopen
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? "bg-white py-4 shadow-md" : "bg-none py-6"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to={"/"}>
          <div>
            <img className="w-[40px]" src={Logo} alt="" />
          </div>
        </Link>
        {/*19 => ye event onclick bhesh midim k isopen ro bar acs kne false bashe true mise */}
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex relative max-w-[50px]"
        >
          <BsBag className="text-2xl" />
          <div
            className="bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] text-white
        rounded-full flex justify-center items-center"
          >
            {itemAmount}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
