import React, { useState } from "react";
import { LogInIcon } from "lucide-react";
import LoginMoadal from "./LoginSignupModal.jsx"

function LoginCompo() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      {/* Login Button */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full hover:bg-gray-200"
      >
        <LogInIcon height={17} />
        Login
      </button>

      {/* Popup Modal */}
      <LoginMoadal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default LoginCompo;
