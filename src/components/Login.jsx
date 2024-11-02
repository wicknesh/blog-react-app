import { Button, TextField, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const Login = () => {
  return (
    <div style={{margin: "15%"}}>
        <Typography variant="h3" style={{color:'darkgreen'}}>Blog App Login</Typography>
        <br /> <br />
        <TextField id="outlined-basic" label="Email" variant="outlined"/>
        <br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined"/>
        <br /><br />
        <Button variant="contained" style={{backgroundColor:'darkgreen'}}>Login</Button>
        <br /><br />
        <Typography variant="contained"><Link to={'/signup'} style={{color:'#6b6b6b', textDecoration: 'none'}}>New user? Create an account here</Link></Typography>
    </div>
  )
}

export default Login