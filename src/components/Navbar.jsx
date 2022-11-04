import { useState } from "react";
import cart from "../images/cart.svg";
const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <header className="border-b-[1px] border-[#111010] bg-[#FAF6EE] font-normal text-base text-[#111010] lg:text-sm fixed w-[100%] z-20">
      <div className="container">
        <nav className="flex justify-between items-center py-[20px] uppercase">
          <a className="font-semibold text-lg" href="/">
            studio polly
          </a>
          <ul className="flex justify-between items-center gap-[105px] lg:gap-[65px] md:hidden">
            <li>
              <a href="/">shop</a>
            </li>
            <li>
              <a href="/">about</a>
            </li>
            <li>
              <a href="/">journal</a>
            </li>
          </ul>
          <ul className="flex justify-between items-center gap-[32px] md:hidden">
            <li>search</li>
            <li className="flex items-center">
              <img className="mr-[8px]" src={cart} alt="cart" />
              (0)
            </li>
          </ul>

          <input
            type="checkbox"
            id="checkbox4"
            className="checkbox4 visuallyHidden hidden md:block"
            onClick={() => setActive(!active)}
          />
          <label for="checkbox4" className="hidden md:block">
            <div className="hamburger hamburger4 ">
              <span className="bar bar1"></span>
              <span className="bar bar2"></span>
              <span className="bar bar3"></span>
              <span className="bar bar4"></span>
              <span className="bar bar5"></span>
            </div>
          </label>
        </nav>
      </div>
      {active && (
        <>
          <ul className="absolute top-[68px] w-[100%] py-5 bg-[#FAF6EE] z-10 flex flex-col items-center uppercase transition-all h-[100vh]">
            <li className="block py-4 text-[#111010]">
              <a href="/">shop</a>
            </li>
            <li className="block py-4 text-[#111010]">
              <a href="/">about</a>
            </li>
            <li className="block py-4 text-[#111010] mb-8">
              <a href="/">journal</a>
            </li>
            <li>
              <ul className="flex justify-center items-center gap-16 text-[#111010]">
                <li>search</li>
                <li className="flex items-center">
                  <img className="mr-[8px]" src={cart} alt="cart" />
                  (0)
                </li>
              </ul>
            </li>
          </ul>
        </>
      )}
    </header>
  );
};
export default Navbar;
