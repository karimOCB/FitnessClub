import React from 'react'
import { Stack, Typography } from '@mui/material'

import { all, back, cardio, chest, neck, shoulders, waist, lowerArms, lowerLegs, upperArms,  } from '../assets/icons/BodyParts/index'

const images = {
  all,
  back,
  cardio,
  chest,
  neck,
  shoulders,
  waist,
  'lower arms': lowerArms,
  'lower legs': lowerLegs,
  'upper arms': upperArms, 
  'upper legs': lowerLegs 
}

const BodyPart = ({ item, setBodyPart, bodyPart }) => {  

  console.log(item)
  const imageToUse = images[item]

  return (
    <Stack type="button" alignItems="center" justifyContent="center" className='bodyPart-card'
      sx={{   
        borderTop: bodyPart === item ? '4px solid #ff2625' : '',
        backgroundColor: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '47px' 
      }}
      onClick={() => {
        setBodyPart(item)
        window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
      }}
    >
      <img src={imageToUse} alt={item} style={{ width: '70px', height: '70px'}}/>
      <Typography fontSize='24px' fontWeight='bold' color='#3A1212' textTransform='capitalize'>{item}</Typography>
    </Stack>
  )
}

export default BodyPart