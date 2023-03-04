import React from 'react';
import DrawerAppBar from './../Components/Navbar.js'
import {Box} from '@mui/material'
function Welcome(props) {
    return (
        <div>
            <DrawerAppBar/>
            <Box spacing={5} marginLeft={55} marginTop={20}>
                <h1>Welcome to E-commerce website</h1>
            </Box>
        </div>
    );
}

export default Welcome;