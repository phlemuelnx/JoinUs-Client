import { Link } from 'react-router-dom';
import { IoWarning } from 'react-icons/io5';
import './ForgotPass.css';

const ForgotPass = () => {
  return (
    <div className='forgot'>
      <IoWarning />
      <h2>Under Construction</h2>
      <h5>Sorry for the inconvenience.</h5>
      <Link to='/login'>Back</Link>
    </div>
  );
};

export default ForgotPass;
