import React, { useState } from "react";
import { Container, Logo } from "../index.js";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LoginCompo from "../LoginButton.jsx";
import Sidebar from "../Sidebar.jsx";
import { FiUser, FiHome, FiLogOut } from "react-icons/fi";
import { MdOutlineConfirmationNumber } from "react-icons/md";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <Container>
        <nav className="flex justify-between h-16 items-center px-5">
          {/* Logo */}
          <Link to="/">
            <Logo />
          </Link>

          {/* Navigation Links */}
          <ul className="flex gap-10 text-gray-600 text-sm font-medium items-center">
            <li>
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200 transition"
              >
                <FiHome size={18} />
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/bookings")}
                className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200 transition"
              >
                <MdOutlineConfirmationNumber size={18} />
                Bookings
              </button>
            </li>

            {authStatus ? (
              <li>
                <button
                  onClick={() =>   setSidebarOpen(true)}
                  className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200 transition"
                >
                  <FiUser size={18} />
                  Account
                </button>
              </li>
            ) : (
              <li>
                <LoginCompo />
              </li>
            )}
          </ul>
        </nav>
      </Container>

      {/* Sidebar Component */}
     {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />}
    </header>
  );
}

export default Header;
