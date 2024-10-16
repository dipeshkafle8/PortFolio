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
      <div className="mr-4 lg:hidden">
        <img
          className="w-12  lg:hidden cursor-pointer"
          src={hamburger}
          onClick={displayNavList}
        />
        <ul ref={navList} className="noDisplay">
          <li>
            <Link to="/" onClick={displayNavList}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/projects" onClick={displayNavList}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/skills" onClick={displayNavList}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={displayNavList}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
export default HamBurger;
