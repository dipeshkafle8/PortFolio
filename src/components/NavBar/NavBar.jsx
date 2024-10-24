import HamBurger from "./HamBurger";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <>
      <nav className="top-0 left-0  fixed w-full h-16 bg-[rgb(4,30,53)] text-white flex justify-between items-center  z-50 lg:h-24">
        <Link to="/">
          <div className="name pl-4">
            <span className="text-3xl font-serif font-extrabold text-italic tracking-wider name-hover">
              {" "}
              <span className="text-4xl text-[rgb(7,136,255)] ">D</span>
              <span>I</span>
              <span className="text-4xl text-[rgb(7,136,255)]">P</span>
              <span>E</span>
              <span className="text-4xl text-[rgb(7,136,255)]">S</span>
              <span>H</span>
            </span>
          </div>
        </Link>
        <ul className=" hidden w-[40%] justify-evenly text-sm font-semibold tracking-wider lg:flex">
          <li>
            <Link
              to="/"
              className="hover:border-b-2 hover:border-[rgb(7,136,255)]"
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="hover:border-b-2 hover:border-[rgb(7,136,255)]"
            >
              PROJECTS
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className="hover:border-b-2 hover:border-[rgb(7,136,255)]"
            >
              SKILLS
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:border-b-2 hover:border-[rgb(7,136,255)]"
            >
              CONTACT
            </Link>
          </li>
        </ul>
        <HamBurger />
      </nav>
    </>
  );
}

export default NavBar;
