import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../vital_asset/images/Logo-1.jpg';

const Footer = () => {
    return (
        <Box mt="100px" bgcolor="#0A0A0A">
            <Stack gap="40px" alignItems="center" px="40px" pt="24px" >
                <img src={Logo} alt="logo" width="200px" height="40px" />
                <Typography color="#fff" variant="h5" pb="40px" mt="40px" > Crafted with ❤️ by Team Jan|Vallone</Typography>
                <Typography color="#fff" variant="h5" pb="20px" mt="20px">Coming soon on google play store</Typography>
            </Stack>
        </Box>
    )
}

export default Footer

