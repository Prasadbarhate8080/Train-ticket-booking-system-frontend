import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AuthLayout({
  children,
  authentication = true,
  allowedRoles = [], // 👈 new
}) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector((state) => state.auth.status);
  const role = useSelector((state) => state.auth.userdata?.data.role);

  useEffect(() => {
    console.log(role)
    // 1️⃣ Protected route & not logged in
    if (authentication && !authStatus) {
      navigate('/');
      return;
    }

    // 2️⃣ Public route but already logged in
    if (!authentication && authStatus) {
      navigate('/');
      return;
    }

    // 3️⃣ Role check (only if roles provided)

    if (authStatus && allowedRoles.length > 0 && !allowedRoles.includes(role)) {
      navigate('/');
      return;
    }

    setLoader(false);
  }, [authStatus, authentication, allowedRoles, role, navigate]);

  if (loader) return <h1>Loading...</h1>;

  return <>{children}</>;
}

export default AuthLayout;
