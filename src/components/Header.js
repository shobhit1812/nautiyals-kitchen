import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useOnline from "../utility/useOnline";
// import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";

const Header = ({ value, isDark }) => {
  const isOnline = useOnline();

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-xl">
      <Link to="/">
        <h1 className="m-6 font-title text-center text-4xl font-semibold text-orange-400 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 cursor-pointer">
          nautiyal's kitchen
        </h1>
      </Link>
      <div>
        <ul className="flex p-6">
          <li className="px-2 text-2xl font-navItem font-medium">
            {" "}
            {isOnline ? "✅" : "🔴"}
          </li>

          <button
            className="px-2 text-2xl font-navItem font-medium"
            onClick={value}
          >
            {/* {isDark ? <MdOutlineDarkMode /> : <MdDarkMode />} */}
            <CgDarkMode />
          </button>

          <Link to="/">
            <li className="px-3 text-2xl font-navItem font-medium hover:first-line:text-orange-400 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-150 duration-300">
              food
            </li>
          </Link>

          <Link to="/help">
            <li className="px-4 text-2xl font-navItem font-medium hover:first-line:text-orange-400 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-y-150 duration-300">
              help
            </li>
          </Link>
          <Link to="/cart">
            <li className="px-3 text-2xl font-navItem font-medium hover:first-line:text-orange-400 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-150 duration-300">
              cart - {cartItems.length}
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
