import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='dashboard'>
      <h1>WELCOME :)</h1>
      <button onClick={logoutUser}>LOGOUT</button>
    </div>
  );
};

export default Dashboard;
