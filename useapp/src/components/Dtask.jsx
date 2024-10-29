import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Dtask = () => {
    var[name,setname]=useState()

    const react=() =>{
        setname("React")
    }
    
    const angular=() =>{
        setname("Angular")
    }
    
    const vue=() =>{
        setname("Vue")
    }
useEffect(()=>{
    angular()
},[])

  return (
    <div>
      <br />
        <Typography variant='h6'>Welcome {name}</Typography><br /><br />
        <Button variant='contained' onClick={react} color='primary'>React</Button>&nbsp;&nbsp;
        <Button variant='contained' onClick={angular} color='secondary'>Angular</Button>&nbsp;&nbsp;
        <Button variant='contained' onClick={vue} color='success'>Vue</Button>&nbsp;&nbsp;
    </div>
  )
}

export default Dtask
