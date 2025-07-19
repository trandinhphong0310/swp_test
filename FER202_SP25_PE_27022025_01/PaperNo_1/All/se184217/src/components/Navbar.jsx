import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <Box>
            <Button onClick={() => navigate("/PhongTD123456/AllBooks")} variant='contained'>All Books</Button>
            <Button onClick={() => navigate("/reading-book")} variant='contained'>Reading Books</Button>
            <Button onClick={() => navigate("/PhongTD123456/UnReadBooks")} variant='contained'>Unread Books</Button>
            <Button onClick={() => navigate("/create-book")} variant='contained'>Create Books</Button>
        </Box>
    )
}
