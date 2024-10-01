import hamburger from "../assets/hamburger.svg";
import { useRef } from "react";
function HamBurger() {
  const navList = useRef();
  function displayNavList() {
    console.log(navList);
    navList.current.classList.toggle("yesDisplay");
    console.log(navList.current);
  }
  return (
    <>
      <img
        className="w-12 lg:hidden cursor-pointer"
        src={hamburger}
        onClick={displayNavList}
      />
      <ul ref={navList} className="noDisplay">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/projects">Projects</a>
        </li>
        <li>
          <a href="/skills">Skills</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </>
  );
}
export default HamBurger;
