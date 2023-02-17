import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../vital_asset/icons/gym.png';

const BodyPart = ({item, setBodyPart, bodyPart}) => {
    return (
        <Stack
          type="button"
          alignItems="center"
          justifyContent="center"
          className="bodyPart-card" 
          sx={
            bodyPart === item? {
                borderTop: '4px solid #00E0C7', 
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px', 
                width: '270px', 
                height: '282px', 
                cursor: 'pointer', 
                gap: '47px'
            } : {
                background: '#fff',
                borderBottomLeftRadius: '20px', 
                width: '270px', 
                height: '282px', 
                cursor: 'pointer', 
                gap: '47px'
            }}
            onClick={() => {
            setBodyPart(item);
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
            }}
        >
            <img src={Icon} alt="dumbell" style={{ width: '40px', height: '40px' }} />
            <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#00E0C7" textTransform="capitalize">
                {item}
            </Typography>
        </Stack>
    )

};

export default BodyPart;
