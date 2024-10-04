import HamBurger from "./HamBurger";
function NavBar() {
  return (
    <>
      <nav className="top-0 left-0 w-full h-16 bg-[rgb(4,30,53)] text-white flex justify-between items-center fixed z-50 lg:h-24">
        <a href="/">
          <div className="name ml-4">
            <span className="text-3xl font-serif font-extrabold italic tracking-wider">
              {" "}
              <span className="text-4xl text-[rgb(7,136,255)]">D</span>
              <span className="text-[1.5rem]">ipesh</span>
              <span className="text-4xl text-[rgb(7,136,255)]">K</span>
              <span className="text-[1.5rem]">afle</span>
            </span>
          </div>
        </a>
        <ul className=" hidden w-[40%] justify-evenly text-sm font-semibold tracking-wider lg:flex">
          <li>
            <a
              href="/"
              className="hover:border-b-2 hover:border-[rgb(7,136,255)]"
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="/projects"
              className="hover:border-b-2 hover:border-[rgb(7,136,255)]"
            >
              PROJECTS
            </a>
          </li>
          <li>
            <a
              href="/skills"
              className="hover:border-b-2 hover:border-[rgb(7,136,255)]"
            >
              SKILLS
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="hover:border-b-2 hover:border-[rgb(7,136,255)]"
            >
              CONTACT
            </a>
          </li>
        </ul>
        <HamBurger />
      </nav>
    </>
  );
}

export default NavBar;
