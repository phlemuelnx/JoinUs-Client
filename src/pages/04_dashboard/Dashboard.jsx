import { useNavigate } from 'react-router-dom';
import { FaSquareGithub } from 'react-icons/fa6';
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
          <p>Designed & Programmed by Lemuel Inciso</p>
        </div>
        <hr />
        <div className='about'>
          <h5>Overview</h5>
          <p>
            The MERN Stack Authentication Demo is a full-stack web application
            showcasing the implementation of user authentication functionalities
            using the MERN (MongoDB, Express.js, React.js, Node.js) This project
            provides a seamless experience for users to register, login
            securely, and access the dashboard.
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
        <hr />
        <div className='code'>
          <h5>Source Code:</h5>
          <a href='https://github.com/phlemuelnx/JoinUs-Client' target='_blank'>
            <FaSquareGithub />
          </a>
        </div>

        <button onClick={logoutUser}>LOGOUT</button>
      </div>
    </div>
  );
};

export default Dashboard;
