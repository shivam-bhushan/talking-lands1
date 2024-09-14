/* eslint-disable react/no-unescaped-entities */
import userImage from "./assets/user2.jpg";
const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="felx justify-center w-full mx-auto py-3 px-4 sm:px-6 lg:px-14">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-4xl font-bold text-blue-800 italic">
              FashionHub
            </div>
            <div className="ml-10 flex items-start space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 px-3 py-2"
              >
                Category
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 px-3 py-2"
              >
                Brand
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 px-3 py-2"
              >
                Contact
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-gray-800 px-3 py-2"
              >
                FAQ's
              </a>
            </div>
          </div>
          <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden">
            <img
              src={userImage}
              alt="User avatar"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
