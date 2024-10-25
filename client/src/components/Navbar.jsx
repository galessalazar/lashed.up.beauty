import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-900 fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-10 items-center justify-between">
          {/* just hitting enter and putting in the name moved the rest of the navbar contents to the rigth, no se but it worked */}
          <div className="flex items-center flex-shrink-0">
            <span
              className="text-white text-lg font-bold"
              style={{ fontFamily: "Playfair Display" }}
            >
              Lashed Up Beauty Bar
            </span>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex space-x-4 ml-auto">
              <Link
                to="/about"
                className="rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-white"
                aria-current="page"
              >
                About
              </Link>
              <Link
                to="/services"
                className="rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Services
              </Link>
              <Link
                to="/bookings"
                className="rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Scheduling
              </Link>
              <Link
                to="/about"
                className="rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact Me
              </Link>
            </div>

            <div className="relative ml-3">
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <Link
                  to="#"
                  className="block px-4 py-1 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-1 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </Link>
                <Link
                  to="#"
                  className="block px-4 py-1 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
