import { Button, TextField, Typography } from "@mui/material"
import axios from "axios";
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

const Login = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState();
  return (
    <div style={{margin: "15%"}}>
        <Typography variant="h3" style={{color:'darkgreen'}}>Blog App Login</Typography>
        <br /> <br />
        <TextField id="outlined-basic" label="Email" variant="outlined" name="email" onChange={(e) => {
          setLoginForm({...loginForm, [e.target.name]: e.target.value});
        }}/>
        <br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" name="password" onChange={(e) => {
          setLoginForm({...loginForm, [e.target.name]: e.target.value});
        }}/>
        <br /><br />
        <Button variant="contained" style={{backgroundColor:'darkgreen'}} onClick={() => {
          axios.post('http://localhost:3000/user/login', loginForm)
          .then((res) => {
            alert(res.data.message);
            if(res.data.token) {
              sessionStorage.setItem('token', res.data.token);
              navigate('/blogs');
            }
            navigate('/login');
          })
          .catch((error) => {
            console.log(error.message);
          })
        }}>Login</Button>
        <br /><br />
        <Typography variant="contained"><Link to={'/signup'} style={{color:'#6b6b6b', textDecoration: 'none'}}>New user? Create an account here</Link></Typography>
    </div>
  )
}

export default Login