import React,{useEffect,useState} from 'react';


import { Box,Button,Stack,TextField,Typography } from '@mui/system';


const SearchExercises = () => {
    return (
        <Stack alignItems='center' mt='37' justifyContent='center' p='20px'>
            <Typography fontweight={700} sx={{fontSise:{lg: '44px', xs: '30px'}}} mb="49px" textAlign="center">
            Awesome Exercises You <br /> Should Know
            </Typography>
        </Stack>
    );
}

export default SearchExercises;
