import HamBurger from "./HamBurger";
import { Link, useLocation } from "react-router-dom";
function NavBar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <nav className="top-0 left-0  fixed w-full h-16 bg-[#1B1B1B] rounded-2xl text-white flex justify-between items-center  z-50 lg:h-24">
        <Link to="/">
          <div className="name pl-4">
            <span className="text-2xl md:text-3xl font-serif font-extrabold text-italic tracking-wider name-hover">
              {" "}
              <span className="text-3xl md:text-4xl text-[rgb(70,208,218)] ">
                D
              </span>
              <span>I</span>
              <span className="text-3xl md:text-4xl text-[rgb(70,208,218)]">
                P
              </span>
              <span>E</span>
              <span className="text-3xl md:text-4xl text-[rgb(70,208,218)]">
                S
              </span>
              <span>H</span>
            </span>
          </div>
        </Link>
        <ul className=" hidden w-[40%] justify-evenly text-lg font-semibold tracking-wider text-[#b7b5b5]  lg:flex">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "text-white border-b-2 border-[rgb(7,136,255)]"
                  : null
              } hover:text-white hover:border-b-2 hover:border-[rgb(7,136,255)]`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`${
                location.pathname === "/projects"
                  ? "text-white border-b-2 border-[rgb(7,136,255)]"
                  : null
              }
              hover:text-white hover:border-b-2 hover:border-[rgb(7,136,255)]`}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`${
                location.pathname === "/skills"
                  ? "text-white border-b-2 border-[rgb(7,136,255)]"
                  : null
              } hover:text-white hover:border-b-2 hover:border-[rgb(7,136,255)]`}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                location.pathname === "/contact"
                  ? "text-white border-b-2 border-[rgb(7,136,255)]"
                  : null
              } hover:text-white hover:border-b-2 hover:border-[rgb(7,136,255)]`}
            >
              Contact
            </Link>
          </li>
        </ul>
        <HamBurger />
      </nav>
    </>
  );
}

export default NavBar;
