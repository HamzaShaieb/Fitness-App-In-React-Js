import React , {useState} from 'react';

import { Box } from '@mui/system';
import HeroBanner from '../componentes/HeroBanner';
import  SearchExercises from '../componentes/SearchExercises'
import Exercises from '../componentes/Exercises';

const Home = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');
    return (
        <Box>
            <HeroBanner/>
            <SearchExercises exercises={exercises} bodyPart = {bodyPart} setBodyPart = {setBodyPart} />
            <Exercises exercises={exercises} bodyPart = {bodyPart} setBodyPart = {setBodyPart}/>
        </Box>
    );
}

export default Home;
