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
      <div className='overview'>
        <div className='title'>
          <h4>MERN Stack Authentication Demo</h4>
        </div>
        <hr />
        <div className='about'>
          <h5>Overview</h5>
          <p>
            The MERN Stack Authentication Demo is a full-stack web application
            showcasing the implementation of user authentication functionalities
            using the MERN (MongoDB, Express.js, React.js, Node.js) This project
            provides a seamless experience for users to register, login
            securely, and access a personalized dashboard.
          </p>
        </div>
        <hr />
        <div className='tech'>
          <h5>Technologies Used:</h5>
          <p>• Frontend: ReactJS, HTML5, CSS3, JavaScript</p>
          <p>• Backend: Node.js, Express.js</p>
          <p>• Database: MongoDB</p>
          <p>• Authentication: JSON Web Tokens (JWT)</p>
          <p>• Deployment: Netlify | Render</p>
        </div>
        <button onClick={logoutUser}>LOGOUT</button>
      </div>
    </div>
  );
};

export default Dashboard;
