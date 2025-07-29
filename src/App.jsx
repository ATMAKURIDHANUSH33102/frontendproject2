import { useState } from 'react'
import './App.css'
import {Link} from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to FED class in klu</h1>
      <h2>Today's topic is introduction to react</h2>
      <h3>Date is 29/7/2025</h3>
      <h4>A.Dhanush</h4> 
      <Link to="/Page1"> Go To Page1 </Link>
      <br /><br /><br />
      <Link to="/Page2"> Go To Page2 </Link>
      <br /><br />
      <Link to="/Page3">Go To Page3</Link>
      
    </>
  )
}

export default App
