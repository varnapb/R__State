import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import States from './components/States'
import Counter from './components/Counter'
import Dtask from './components/Dtask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Routes>
      <Route path='/s' element={<States/>}/>
      <Route path='/c' element={<Counter/>}/>
      <Route path='/d' element={<Dtask/>}/>
     </Routes>

    </>
    

  )
}

export default App
