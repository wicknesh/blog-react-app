import { Box, Button, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    const [users, setUsers] = useState();
    const inputHandler = (e) => {
        setUsers({...users, [e.target.name]: e.target.value});
    }
    const addHandler = () => {
        axios.post('http://localhost:3000/user/signup/', users)
        .then((res) => {
            console.log(res)
        })
        .catch((error) => {
            console.log(error.message);
        })
    }
  return (
    <div style={{'marginTop': '10rem'}}>
        <Typography variant="h3" style={{color:'darkgreen'}}>Blog App Signup</Typography>
        <br /><br />
        <Box sx={{ flexGrow: 1 }} style={{width: '50%', margin: '0 auto'}}>
            <Grid container spacing={2}>
                <Grid size={6}>  
                    <TextField fullWidth id="outlined-basic" label='Name' variant="outlined" name="name" onChange={inputHandler}/>
                </Grid>
                <Grid size={6}>
                    <TextField fullWidth id="outlined-basic" label='Email address' variant="outlined" name="email" onChange={inputHandler}/>
                </Grid>
                <Grid size={12}>
                    <TextField
                        fullWidth
                        id="outlined-multiline-flexible"
                        label="Address"
                        multiline
                        rows={4}
                        name="address"
                        onChange={inputHandler}
                    />
                </Grid>
                <Grid size={6}>
                    <TextField fullWidth id="outlined-basic" label='Phone number' variant="outlined" name="phonenumber" onChange={inputHandler}/>
                </Grid>
                <Grid size={6}>
                    <TextField fullWidth id="outlined-basic" label='Password' variant="outlined" name="password" onChange={inputHandler}/>
                </Grid>
                <Grid size={12}>
                    <Button variant='contained' style={{backgroundColor:'darkgreen'}} onClick={addHandler}>Signup</Button>
                </Grid>
                <Grid size={12}>
                    <Typography variant="contained"><Link to={'/login'} style={{color:'#6b6b6b', textDecoration: 'none'}}>Already a user? Login here</Link></Typography>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default SignUp