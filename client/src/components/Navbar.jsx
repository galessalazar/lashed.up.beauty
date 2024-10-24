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
              <a
                href="#"
                className="rounded-md bg-gray-900 px-3 py-1 text-sm font-medium text-white"
                aria-current="page"
              >
                About
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Services
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Scheduling
              </a>
              <a
                href="#"
                className="rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact Me
              </a>
            </div>

            <div className="relative ml-3">
              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex="-1"
              >
                <a
                  href="#"
                  className="block px-4 py-1 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-1 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#"
                  className="block px-4 py-1 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex="-1"
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
