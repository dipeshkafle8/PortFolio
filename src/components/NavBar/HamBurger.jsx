import hamburger from "../assets/hamburger.svg";
function HamBurger() {
  function displayList() {}
  return (
    <>
      <img className="w-12 lg:hidden" src={hamburger} onClick={displayList} />
      <ul className="md:hidden hidden">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Skills</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
    </>
  );
}
export default HamBurger;
