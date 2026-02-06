import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authSlice.js";
import { authService } from "../services/authServices.js";
import { FaRegUser, FaLock, FaEnvelope, FaTimes } from "react-icons/fa";
import { RiTrainFill } from "react-icons/ri";

function LoginModal({ isOpen, onClose }) {
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAuth = async (data) => {
    setLoading(true);
    setError("");

    try {
      let session;

      if (isLogin) {
      
        session = await authService.login(data);
      } else {
        session = await authService.createAccount(data); 
      }

      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));  
        }
        navigate("/");
        onClose();
      }
    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 bg-[rgba(87,82,82,0.4)]  flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden border-2 border-orange-100">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-6">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <RiTrainFill className="text-3xl" />
                <h2 className="text-2xl font-bold">
                  {isLogin ? "Welcome Back!" : "Create Account"}
                </h2>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-full transition"
              >
                <FaTimes className="text-xl" />
              </button>
            </div>
          </div>

          <div className="p-6">
            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit(handleAuth)} className="space-y-4">
              {/* Name Field */}
              {!isLogin && (
                <div className="relative">
                  <FaRegUser className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
                  <input
                    {...register("name", { required: !isLogin })}
                    placeholder="Full Name"
                    className="w-full pl-10 pr-4 py-3 border-2 border-orange-100 rounded-lg focus:border-orange-500 outline-none"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">Name is required</p>
                  )}
                </div>
              )}

              {/* Email Field */}
              <div className="relative">
                <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+\.\S+$/,
                  })}
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 border-2 border-orange-100 rounded-lg focus:border-orange-500 outline-none"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">Valid email required</p>
                )}
              </div>

              {/* Password Field */}
              <div className="relative">
                <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-orange-500" />
                <input
                  type="password"
                  {...register("password", { required: true, minLength: 6 })}
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-3 border-2 border-orange-100 rounded-lg focus:border-orange-500 outline-none"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    Password must be 6+ characters
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                disabled={loading}
                type="submit"
                className={`w-full py-4 rounded-xl font-bold text-white transition-all ${
                  loading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 hover:shadow-lg"
                }`}
              >
                {isLogin ? "Sign In" : "Create Account"}
              </button>
            </form>

            {/* Toggle Link */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-orange-600 font-semibold hover:text-orange-700 underline underline-offset-4"
              >
                {isLogin ? 
                  "New here? Create Account" : 
                  "Already have an account? Sign In"}
              </button>
            </div>

            {/* Footer */}
            <p className="text-center text-sm text-gray-500 mt-6">
              By continuing, you agree to our<br />
              <a href="#" className="text-orange-600 hover:underline">
                Terms of Service
              </a> and 
              <a href="#" className="text-orange-600 hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  );
}

export default LoginModal;