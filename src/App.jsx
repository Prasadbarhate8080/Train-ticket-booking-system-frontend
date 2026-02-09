import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { authService } from "./services/authServices.js";
import { login, logout } from "./store/slices/authSlice.js";
import { Footer, Header } from "./components/index.js";
import { Outlet } from "react-router-dom";
import Loader from "./components/Loader.jsx";
import { useSelector } from "react-redux";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login(userData));
      
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);



  return !loading ? (
    <div className="">
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <main className="min-h-[400px]">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : (
    <Loader />
  );
}

export default App;
