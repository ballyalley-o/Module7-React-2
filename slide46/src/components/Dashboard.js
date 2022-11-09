import React from 'react'
import Home from './Home.js'
import { useNavigate, Link } from "react-router-dom";
import { Grid, Button } from "@mui/material";

function Dashboard() {
     const navigate = useNavigate();
  return (
    <div>
      <Home>This is the Dashboard</Home>
      <Button onClick={() => navigate("/home")}>Back to Home</Button>
    </div>
  );
}

export default Dashboard