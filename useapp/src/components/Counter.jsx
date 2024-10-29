import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
  var[count,setc]=useState(0)

  const addInput=() =>{
    setc(count+1)
  }

  const subInput=() =>{
    setc(count-1)
  }
  return (
    <div>
      <br /><br /><br /><br /><br /><br /><br /><br />
      <Typography variant='h5'>Count: {count}</Typography><br />
      <Button variant='contained' color='success' onClick={addInput}>+</Button>
      &nbsp;&nbsp;
      <Button variant='contained' color='error' onClick={subInput}>-</Button>
    </div>
  )
}

export default Counter
