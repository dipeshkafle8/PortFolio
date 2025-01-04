import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
function HamBurger() {
  const [isHamOpen, setIsHamOpen] = useState(false);
  return (
    <>
      <div className="lg:hidden">
        <button onClick={() => setIsHamOpen((prev) => !prev)} className="mr-2">
          {isHamOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
        {isHamOpen ? (
          <div className="absolute left-0 top-14 bg-[#1B1B1B] w-full p-2">
            <ul className="flex flex-col gap-y-2 text-[#b7b5b5] ">
              <li>
                <Link
                  to="/"
                  className="hover:text-white"
                  onClick={() => setIsHamOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="hover:text-white"
                  onClick={() => setIsHamOpen(false)}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="hover:text-white"
                  onClick={() => setIsHamOpen(false)}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-white"
                  onClick={() => setIsHamOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </>
  );
}
export default HamBurger;
