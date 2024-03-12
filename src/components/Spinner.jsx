import ClipLoader from 'react-spinners/ClipLoader';
import { CSSProperties } from 'react';

const Spinner = () => {
  const override = {
    margin: '0 10px 0 0',
  };

  return (
    <>
      <ClipLoader color={'#fff'} size={15} cssOverride={override} />
    </>
  );
};

export default Spinner;
