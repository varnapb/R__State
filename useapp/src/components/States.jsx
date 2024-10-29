import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const States = () => {
    var[name,setname]=useState("Ram")
    var[val,setval]=useState()

    const handleInput=(e) =>{
        console.log(e.target.value)
        setname(e.target.value)
    }

    const valueInput=() =>{
        setval(name)
    }
    
  return (
    <div>
        <br />
        <Typography variant='h6'>Welcome {val}</Typography><br /><br />
        <TextField variant='outlined' onChange={handleInput} label='Enter the name'></TextField><br /><br /><br />
        <Button variant='contained' onClick={valueInput}>Submit</Button>
    </div>
  )
}

export default States
