import {React,useContext} from 'react';
import { Box,Typography } from '@mui/material';
import Bodyparts from './Bodyparts';
import { ScrollMenu,VisibilityContext } from 'react-horizontal-scrolling-menu';

import RightArrowIcon from '../assets/icons/right-arrow.png'
import LeftArrowIcon from '../assets/icons/left-arrow.png'


const HorizentaleToolbar = ({data ,bodyPart,setbodyPart}) => {

    const RightArrow = ()=> {
        const {scrollNext} = useContext(VisibilityContext)
        return (
            <Typography onClick = {()=> scrollNext()} className='right-arrow'>
                <img src={RightArrowIcon} alt='right-arrow'/>

            </Typography>
        )
    }
    const LeftArrow = ()=>{ 
        const {scrollPrev} = useContext(VisibilityContext)
        return (
            <Typography onClick = {()=> scrollPrev()} className='left-arrow'>
                <img src={LeftArrowIcon} alt='left-arrow'/>

            </Typography>
        )
    }


    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>    
            {
                data.map((item)=>(

                    <Box
                    key ={item.id || item}
<<<<<<< HEAD
                    itemId ={item.id || item}
=======
                    itemid ={item.id || item}
>>>>>>> 6234871ae7abf30109cc2b582bd243b165121755
                    title ={item.id || item}
                    m = "0 40px">
                        <Bodyparts item={item} bodyPart={bodyPart} setbodyPart = {setbodyPart} />
                    </Box>

                ))
            }
        </ScrollMenu>
    );
}

export default HorizentaleToolbar;
