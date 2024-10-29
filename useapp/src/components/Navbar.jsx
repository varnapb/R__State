import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar color='secondary'>
        <Toolbar>
            <Typography variant='h5' component="div" sx={{ flexGrow: 1 }}>My App</Typography>
            &nbsp;&nbsp;&nbsp;
            <Link to='/s'>
                <Button variant='contained' color='success'>State</Button>
            </Link>
            &nbsp;&nbsp;
            <Link to='/c'>
                <Button variant='contained' color='success'>Count</Button>
            </Link>
            &nbsp;&nbsp;
            <Link to='/d'>
                <Button variant='contained' color='success'>Home</Button>
            </Link>
        </Toolbar>
      </AppBar>
      <br /><br /><br />
    </div>
  )
}

export default Navbar
