// import ReactTooltip from "react-tooltip";
import Sidebar from "./Sidebar";
import Mode from "./theme/Mode";
import { useZustandStore } from "../zustand";
// import { anonymous, address } from "../assets";
const Navbar = () => {
  const { navLink } = useZustandStore();
  return (
    <nav className="dark:bg-gray-900 bg-gray-100 py-4 px-4 md:px-0 shadow-md w-full sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="#home" className="cursor-pointer">
            <h1 className="text-2xl font-medium text-gray-600 hover:text-gray-700 transition-all duration-300 hover:scale-110 dark:hover:text-gray-300  dark:text-gray-400">
              Hikmat
            </h1>
          </a>
        </div>
        <div className="items-center hidden space-x-8 md:flex lg:flex">
          {navLink.map((link, index) => (
            <a
              key={index}
              href={"#" + link}
              className="flex text-gray-500 hover:scale-110 dark:hover:text-gray-300  dark:text-gray-400 capitalize hover:text-gray-600
                        cursor-pointer font-semibold transition-colors duration-300"
            >
              {link}
            </a>
          ))}
        </div>
        <div className="flex items-center ">
          <Sidebar navLink={navLink} />
          <Mode />
          {/* {userInfo?.ip ? (
            <>
              <img
                data-for="ip"
                data-tip
                className="w-8 h-8 mt-2"
                src={address}
                alt="anonymousMask"
              />
              <ReactTooltip id="ip" effect="solid">
                <span> Your Ip {userInfo.ip}</span> <br />
                <span> Your City {userInfo.city}</span>
              </ReactTooltip>
            </>
          ) : (
            <>
              <img
                data-for="anonymous"
                data-tip
                className="w-8 h-8 mt-2 cursor-pointer"
                src={anonymous}
                alt="anonymousMask"
              />
              <ReactTooltip id="anonymous" effect="solid">
                You anonymous
              </ReactTooltip>
            </>
          )} */}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
