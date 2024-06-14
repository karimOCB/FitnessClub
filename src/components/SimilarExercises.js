import React from 'react'
import { Box, Stack, Typography } from '@mui/material' 

import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises}) => {

  return (
    <Box sx={{ mt: { xs: '0px', lg: '100px' }}}>
      <Typography variant='h3' mb={5} textAlign="center">Exercises of Same Muscle Group</Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
        {targetMuscleExercises.length ?
         <HorizontalScrollbar data={targetMuscleExercises}/> 
         : <Loader  />
        }
      </Stack>
      <Typography variant='h3' my={5} textAlign="center">Exercises of Same Equipment</Typography>
      <Stack direction="row" sx={{ p: '2', position: 'relative'}}>
        {equipmentExercises.length ?
         <HorizontalScrollbar data={equipmentExercises}/> 
         : <Loader  />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises