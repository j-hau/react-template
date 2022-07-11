import React from 'react';

import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

    let navigate = useNavigate();

    return (

        <div> 
            <h1>
                Welcome to the React Component Library Comparer
            </h1>
            <Button   
                size="large"
                edge="start"
                color="primary"
                aria-label="menu"
                onClick={() => navigate("/TestPage")}
                sx={{ mr: 2 }}
            >
                Button
            </Button>
            <body>
                Please use the buttons at the top of the page to navigate to pages
            </body>

        </div>
    );
}
  
  export default LandingPage;