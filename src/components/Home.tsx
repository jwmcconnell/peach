import { Typography, Box } from '@mui/material'
import { Link } from 'react-router-dom'
import React from 'react'

export default () => {
    return (
        <Box>
            <Link to="/sign-in">Sign In</Link>
            <Typography>Home</Typography>
        </Box>
       
    )
}