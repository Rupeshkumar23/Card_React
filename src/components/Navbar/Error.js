import React from "react";
import { Link, useRouteError } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";


const containerStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  background: "#e9e9e9",
};

const messageStyle = {
  fontSize: "5rem", 
  fontWeight: "bold",
  margin: "20rem",
  color: "#118a7e",
};

const messageStyle1 = {
  fontSize: "2rem",
  fontWeight: "bold",
  color: "white",
  padding: "20px",
  marginBottom:'20rem',
  backgroundColor: "#118a7e",
  textDecoration: "none",
  borderRadius: "2rem",
};

export default function Error() {
  const error = useRouteError();
  return (
    <>
   <div style={containerStyle}>
      <OverlayTrigger overlay={<Tooltip id="tooltip-right"><p className='fw-bold   text-danger'>{error.data}</p> </Tooltip>} placement="right">
        <h1 style={messageStyle} className="bg-dark rounded p-5">{error.status} Page {error.statusText}</h1>
      </OverlayTrigger>
     <Link style={messageStyle1}>Go Back To Home Page</Link>
    </div>
    </>
  );
}
