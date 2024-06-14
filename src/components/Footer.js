import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

import Logo from '../assets/images/Logo-1.png'

const Footer = () => {
  return (
    <Box my="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="30px"> 
        <img src={Logo} alt='logo' width="200px" height="40px" />
        <Typography variant="h7" pb="30px" mt="-20px"> Made by @KCO </Typography>
      </Stack>
    </Box>
  )
}

export default Footer