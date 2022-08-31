import React from 'react'
import { Link } from 'react-router-dom'
import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'


const NavBar = () => {
    return (
        <div id='navbar' className='paper padding'>
            <Stack spacing={2} direction="row">
                    <Link to='/'><Button variant="contained">About</Button></Link>
                    <Link to='./Hobbies'><Button color="secondary" variant="contained">Hobbies</Button></Link>
            </Stack>
        </div>
    )
}

export default NavBar