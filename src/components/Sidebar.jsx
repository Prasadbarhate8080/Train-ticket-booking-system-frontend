  import React, { useCallback, useEffect } from "react";
  import { authService } from "../services/authServices.js";
  import { useSelector, useDispatch } from "react-redux";
  import { logout } from "../store/slices/authSlice.js";
  import { Link } from "react-router-dom";
  import { UserCog } from "lucide-react";
import { MdAdminPanelSettings } from "react-icons/md";


  const Sidebar = ({ isOpen, onClose }) => {
    const authStatus = useSelector((state) => state.auth.status);
    const userName = useSelector((state) => state.auth.userdata?.data.name.split(" ")[0])
    const role = useSelector((state) => state.auth.userdata?.data.role) || "";

    const dispatch = useDispatch();

    // useEffect(() => {
    //   console.log(role)
    // }, [role]);

    const capitalizeFirstLetter = useCallback((str) => {
          if(str)
            return str?.charAt(0).toUpperCase() + str.slice(1);
          else
            return "";
    },[])
    


    // function capitalizeFirstLetter(str) {
    //   if(str)
    //     return str?.charAt(0).toUpperCase() + str.slice(1);
    //  
    //   else
    //     return "";
    // }

    const logoutUser = async () => {
      try {
        let response = await authService.logout();
        if (!response) {
          return alert("Error while logging out");
        }

        dispatch(logout());
        alert(response.message);
      } catch (error) {
        console.log(error);
      }
    };

    return (
      <div
        className={`fixed inset-0 z-20 bg-[rgba(0,0,0,0.4)] transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      >
        <div
          className={`fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
          onClick={(e) => e.stopPropagation()} // Prevents closing when clicking inside
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 text-gray-600 hover:text-orange-500"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {/* Sidebar Header */}
          <div className="p-6 text-center border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">Account</h2>
          </div>

          {/* Sidebar Menu */}
          <div className="p-6">
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="block text-lg font-medium text-gray-700  transition-colors"
                >
                  Hello{' '}
                  {authStatus && (
                    <span className="font-bold text-2xl">
                      {capitalizeFirstLetter(userName)}
                      <span>,</span>
                    </span>
                  )}
                </Link>
              </li>
              <li
                onClick={() => {
                  onClose();
                }}
              >
                <Link
                  to="/bookings"
                  className="block text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                >
                  📄 My Bookings
                </Link>
              </li>
              <li
                onClick={() => {
                  onClose();
                }}
              >
                <Link
                  to="/"
                  className="block text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                >
                  🏠 Dashboard
                </Link>
              </li>
              {role == 'admin' && (
                <li>
                  <Link
                    to="/admin"
                    className="block text-lg font-medium text-gray-700 ml-1 transition-colors"
                  >
                    <div>
                      <UserCog className="w-5 h-5 inline-block" />
                      <span className="hover:text-orange-500"> Admin</span>
                      {console.log(role)}
                    </div>
                  </Link>
                </li>
              )}
              {role == 'admin' && (
                <li>
                  <Link
                    to="/dashboard"
                    className="block text-lg font-medium text-gray-700 ml-1 transition-colors"
                  >
                    <div>
                      <MdAdminPanelSettings className="w-5 h-5 inline-block" />
                      <span className="hover:text-orange-500"> Admin Dashboard</span>
                      {console.log(role)}
                    </div>
                  </Link>
                </li>
              )}
            </ul>

            {/* Logout Button */}
            <button
              className="w-full mt-6 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-md transition-all"
              onClick={logoutUser}
            >
              🚪 Logout
            </button>
          </div>
        </div>
      </div>
    );
  };

  export default Sidebar;
