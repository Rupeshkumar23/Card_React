import React from 'react';
import { Link } from 'react-router-dom';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  background: '#e9e9e9', 
};

const messageStyle = {
  fontSize: '5rem',
  fontWeight: 'bold',
  color: '#118a7e',
};
const messageStyle1 = {
  fontSize: '2rem',
  fontWeight: 'bold',
  color: 'white',
  backgroundColor:'#118a7e',
  textDecoration:'none',
};

function Error() {
  return (
    <div style={containerStyle}>
      <h1 style={messageStyle}>404 Page Not Found</h1>
      <Link style={messageStyle1} >Go Back To Home Page</Link>
    </div>
  );
}

export default Error;
