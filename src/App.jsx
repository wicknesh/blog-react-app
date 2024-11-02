import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Blogs from './components/Blogs'
import AddBlog from './components/AddBlog'
import Main from './components/Main'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signup' element={<SignUp/>}></Route>
      <Route path='/blogs' element={<Main child={<Blogs/>}/>}></Route>
      <Route path='/addblog' element={<Main child={<AddBlog/>}/>}></Route>  
    </Routes>
    </>
  )
}

export default App
