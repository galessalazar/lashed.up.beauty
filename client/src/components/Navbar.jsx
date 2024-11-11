import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="bg-gray-900 fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-10 items-center justify-between">
          {/* just hitting enter and putting in the name moved the rest of the navbar contents to the rigth, no se but it worked */}
          <div className="flex items-center flex-shrink-0">
            <Link to='/'           className="text-white text-lg font-bold"
              style={{ fontFamily: "Playfair Display" }}>
              Lashed Up Beauty Bar
            </Link>
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
                to="/contact"
                className="rounded-md px-3 py-1 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                Contact Me
              </Link>

              <Link to='/login' className="rounded-md px-3 py-1 text sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Login</Link>
            </div>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
