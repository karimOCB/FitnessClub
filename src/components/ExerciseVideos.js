import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

const ExerciseVideos = ({ exerciseVideos, name}) => {

  if(!exerciseVideos.length) return 'Loading...'

  return (
    <Box sx={{mt: { xs:'20px', lg: '100px'}}} p="20px">
      <Typography variant='h3' mb={5} textAlign="center">
        Watch <span style={{color: '#ff2625', textTransform: 'capitalize'}}>{name}</span> Exercise Videos
      </Typography>
      <Stack justifyContent="center" flexWrap="wrap" alignItems="center"
        sx={{ flexDirection: { lg: 'row' }, gap: { xs: '0', lg: '110px'}}}
      >
        {exerciseVideos?.slice(0, 6).map((item, index) => (
          <a
            key={index}
            className='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
            <Box>
              <Typography variant="h5" color="#000" textAlign="center" px="50px">
                {item.video.title}
              </Typography>
              <Typography variant="h6" color="#000" textAlign="center">
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos