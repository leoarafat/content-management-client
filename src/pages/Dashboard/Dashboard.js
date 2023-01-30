import { FiLogOut, FiSettings } from "react-icons/fi";
import { RiLoginCircleLine } from "react-icons/ri";
import { IoCreateOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { SiAmazonpay } from "react-icons/si";
import { useContext } from "react";
import { AiOutlineSchedule, AiOutlineTeam } from "react-icons/ai";

import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";


const Dashboard = () => {
  const { user, logOut } = useContext(AuthContext);

  const signOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="bg-gray-100">
        <aside className="fixed top-0 z-10 ml-[-100%] flex h-screen w-full flex-col justify-between bg-white px-6 pb-3 transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] dark:border-gray-700">
          <div>
            <div className="fixed flex flex-col  left-0 w-14 hover:w-64 md:w-64 shadow-2xl h-full text-primary transition-all duration-300 border-none z-10 sidebar bg-white">
              <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                  <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center ">
                      <img
                        src="https://i.ibb.co/MSsVHm1/logo.png"
                        className=""
                        alt=""
                      />
                    </div>
                  </li>
                  <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center h-8">
                      <div className="text-sm tracking-wide text-Primary font-bold uppercase">
                        Main
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link
                      to={"/"}
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <AiOutlineHome className="w-6 h-6" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Home
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/mySchedule"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <AiOutlineSchedule size={"1.25rem"}></AiOutlineSchedule>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        My Schedule
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/createTeam"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <IoCreateOutline className="w-6 h-6" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Create Team
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/team"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <AiOutlineTeam size={"1.25rem"}></AiOutlineTeam>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        My Team
                      </span>
                    </Link>
                  </li>

                  <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center mt-5 h-8">
                      <div className="text-sm tracking-wide text-Primary font-bold uppercase">
                        Settings
                      </div>
                    </div>
                  </li>

                  <li>
                    <Link
                      to="/dashboard/profile"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <CgProfile className="w-6 h-6" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Profile
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/dashboard/billing"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <SiAmazonpay className="w-6 h-6" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Billing
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="#"
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <FiSettings className="h-6 w-6" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Settings
                      </span>
                    </Link>
                  </li>
                </ul>
                {user?.uid ? (
                  <>
                    <p className="mb-2">
                      <button
                        onClick={signOut}
                        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                      >
                        <span className="inline-flex justify-center items-center ml-4">
                          <FiLogOut className="w-6 h-6" />
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">
                          Logout
                        </span>
                      </button>
                    </p>
                  </>
                ) : (
                  <p className="mb-2">
                    <Link
                      to={"/login"}
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-primary  hover:text-white border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <RiLoginCircleLine className="w-6 h-6" />
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Login
                      </span>
                    </Link>
                  </p>
                )}
              </div>
            </div>
          </div>
        </aside>
        <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <div className="px-6 pt-6 2xl:container">
            <div className="flex items-center justify-center rounded-xl">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
