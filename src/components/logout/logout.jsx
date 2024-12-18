import React, { useEffect } from 'react';
import { useAtom } from 'jotai';
import { isLoggedInAtom } from '../../state/authAtom';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { routes } from '../../routes/routes';
const Logout = () => {
  const [_, setAuthenticated] = useAtom(isLoggedInAtom);
  const navigate = useNavigate();
  const handleLogout = () => {
    setAuthenticated(false);
    navigate(routes.login);
    toast.success('You are logged out');
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
    </div>
  );
};

export default Logout;
