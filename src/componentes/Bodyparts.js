import React from 'react'
import { Stack,Typography } from '@mui/material'

import Icon from '../assets/icons/gym.png'

<<<<<<< HEAD
function Bodyparts({item,bodyPart,setBodyPart}) {
  return (
    <Stack type = "button" alignItems="center" justifyContent="center"  className="bodyPart-card" sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}   
     onClick={() => {
      setBodyPart(item);
=======
function Bodyparts({item,bodyPart,setbodyPart}) {
  return (
    <Stack type = "button" alignItems="center" justifyContent="center"  className="bodyPart-card" sx={bodyPart === item ? { borderTop: '4px solid #FF2625', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}   
     onClick={() => {
      setbodyPart(item);
>>>>>>> 6234871ae7abf30109cc2b582bd243b165121755
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}>
      <img src={Icon} alt ='Gym Icon' style={{width:"40px" ,height:'40px'}}/>
      <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default  Bodyparts