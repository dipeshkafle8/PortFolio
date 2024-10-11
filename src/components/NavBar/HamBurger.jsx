import hamburger from "../assets/hamburger.svg";
import { useRef } from "react";
import { Link } from "react-router-dom";
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
        className="w-12 mr-4 lg:hidden cursor-pointer"
        src={hamburger}
        onClick={displayNavList}
      />
      <ul ref={navList} className="noDisplay">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/skills">Skills</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </>
  );
}
export default HamBurger;
