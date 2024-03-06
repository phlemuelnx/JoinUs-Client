import React from 'react';

const ErrorMsgStyle = {
  background: '#ff4e5d',
  color: '#fff',
  padding: '5px',
  margin: '0 0 10px 0',
};

const ErrorMsg = ({ message }) => {
  return <p style={ErrorMsgStyle}>{message}</p>;
};

export default ErrorMsg;
