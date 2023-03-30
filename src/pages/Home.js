import React , {useState} from 'react';

import { Box } from '@mui/system';
import HeroBanner from '../componentes/HeroBanner';
import  SearchExercises from '../componentes/SearchExercises'
import Exercises from '../componentes/Exercises';

const Home = () => {
    return (
        <Box>
            <HeroBanner/>
            <SearchExercises/>
            <Exercises/>
        </Box>
    );
}

export default Home;
