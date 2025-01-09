import HamBurger from "./HamBurger";
import { Link, useLocation } from "react-router-dom";
import { Laptop } from "lucide-react";
import logo from "../assets/logo.png";
function NavBar() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <>
      <nav className="top-0 left-0  fixed w-full h-16 bg-[#1B1B1B]  text-white flex justify-between items-center  z-50 lg:h-20">
        <div className="ml-4  h-20 flex  justify-center items-center lg:ml-[4rem]">
          <Link to="/">
            <span className="text-2xl md:text-3xl tracking-widest font-semibold ">
              Dipesh{" "}
              <Laptop
                className="inline-block text-[rgb(180,108,231)]"
                size={42}
              />
            </span>
          </Link>
        </div>
        <ul className=" hidden w-[40%] justify-evenly text-lg  tracking-wider text-[#b7b5b5]  lg:flex">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === "/" ? "text-white " : null
              } hover:text-white `}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className={`${
                location.pathname === "/projects" ? "text-white " : null
              }
              hover:text-white `}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/skills"
              className={`${
                location.pathname === "/skills" ? "text-white " : null
              } hover:text-white `}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                location.pathname === "/contact" ? "text-white" : null
              } hover:text-white `}
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
