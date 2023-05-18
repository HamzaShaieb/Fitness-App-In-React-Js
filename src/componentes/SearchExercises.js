import React,{useEffect,useState} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import {exercicesOptions,fetchData} from '../utils/fetchData.js'
import { HorizontalRule } from '@mui/icons-material';
import HorizentaleToolbar from './HorizentaleToolbar.js';

 


const SearchExercises = ({exercises,bodyPart,setBodyPart}) => {

    const [search,setSearch] =useState('')
    const [exercices,setExercices] = useState([])
    const [bodyParts,setbodyParts] = useState([])

    useEffect(()=>{
        const fetchExercisesData = async ()=>{
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercicesOptions);

            setbodyParts(['All',...bodyPartsData]);
        
        }
        
        fetchExercisesData()
         
         
        

    },[])
    console.log(bodyParts)

    const handleSearch = async()=>{
        if(search){
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises',exercicesOptions)

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                       || item.target.toLowerCase().includes(search)
                       || item.equipment.toLowerCase().includes(search)
                       || item.bodyPart.toLowerCase().includes(search),
              );
            setExercices(searchedExercises)
            console.log(exercices)
        }
    }


    return (
        <Stack alignItems='center' mt='37' justifyContent='center' p='20px'>
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
            Awesome Exercises You <br /> Should Know
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
                height="76px"
                value={search}
                onChange={(e)=>{setSearch(e.target.value.toLowerCase())}}
                placeholder ="Search Exercices"/>
                <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
                    Search
                </Button>
            </Box>
            <Box sx = {{position:'relative',width:'100%',p:'20px'}}>
<<<<<<< HEAD
                <HorizentaleToolbar data ={bodyParts}   setBodyPart={setBodyPart} bodyPart={bodyPart}/>
=======
                <HorizentaleToolbar data ={bodyParts} />
>>>>>>> 6234871ae7abf30109cc2b582bd243b165121755
            </Box>
        </Stack>
    );
}

export default SearchExercises;
