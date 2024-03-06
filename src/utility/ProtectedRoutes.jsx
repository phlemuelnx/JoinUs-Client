import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => {
  const user = localStorage.getItem('token');
  return user === null ? <Navigate to='/login' /> : <Outlet />;
};

export default PrivateRoutes;
