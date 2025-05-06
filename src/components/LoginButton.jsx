import React, { useState } from "react";
import LoginMoadal from "./LoginSignupModal.jsx"

function LoginCompo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Login Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="cursor-pointer bg-gray-100 px-3 rounded-3xl py-2 hover:bg-gray-200"
      >
        Login
      </button>

      {/* Popup Modal */}
      <LoginMoadal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default LoginCompo;
