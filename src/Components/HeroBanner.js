import React from 'react';
import { Box, Stack, Typography, Button } from '@mui/material';
        
import HeroBannerImage from '../vital_asset/images/banner.jpg';
        
const HeroBanner = () => {
    return (
        <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
            <Typography color="#00E0C7" fontWeight="600" fontSize="26px">Fitness Hub</Typography>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
              The Open platform for <br />
              Fitness Enthusiats.
            </Typography>
            <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" mb={4} >
              Check out the most effective exercises personalized to you
            </Typography>
            <Button variant="contained" color="success" href="#exercises" sx={{backgroundColor: '#0A0A0A', padding: '10px'}}>
                Explore Exercises
            </Button>
            <Stack>
              <a href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
            </Stack>
            <Typography fontWeight={600} color="#00E0C7" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
              FITNESS
            </Typography>
            <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
        </Box>
    );

}
        

export default HeroBanner;
