import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-purple-100 p-2">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Home</Link>
              </li>
              <li tabIndex={0}>
                <Link>All Toys</Link>
              </li>
              <li>
                <Link>Blogs</Link>
              </li>
            </ul>
          </div>
          <div>
            <img
              className="w-16 pl-2"
              src="https://seeklogo.com/images/O/oso-moschino-toy-logo-15410F6EDB-seeklogo.com.png"
              alt=""
            />
          </div>
          <a className="btn btn-ghost normal-case text-3xl pl-1">
            Teddy-Toy Zone
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>All Toys</Link>
            </li>
            <li>
              <Link>Blogs</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
