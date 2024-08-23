import HamBurger from "./Hamburger";
function NavBar() {
  return (
    <>
      <nav className="h-24 bg-[rgb(4,30,53)] text-white flex justify-between items-center">
        <div className="name ml-4">
          <span className="text-3xl font-serif font-extrabold italic tracking-wider">
            {" "}
            <span className="text-4xl text-[rgb(7,136,255)]">D</span>ipesh
            <span className="text-4xl text-[rgb(7,136,255)]">K</span>afle
          </span>
        </div>
        <ul className=" hidden w-[40%] justify-evenly text-sm font-semibold tracking-wider lg:flex">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#">PROJECTS</a>
          </li>
          <li>
            <a href="#">SKILLS</a>
          </li>
          <li>
            <a href="#">CONTACT</a>
          </li>
        </ul>
        <HamBurger />
      </nav>
    </>
  );
}

export default NavBar;
