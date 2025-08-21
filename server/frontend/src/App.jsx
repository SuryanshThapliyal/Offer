import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path = '/login' element = {<Login />}/>
      <Route path = '/register' element = {<Register />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
