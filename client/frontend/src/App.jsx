import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthContext.jsx';
import './App.css'

function App() {

  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
      <Route path = '/login' element = {<Login />}/>
      <Route path = '/register' element = {<Register />}/>
      </Routes>
      </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App;
