import { Box, Button, TextField, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div>
        <Box sx={{ flexGrow: 1 }} style={{marginTop: '10%', width: '50%',marginLeft: '20%'}}>
            <Grid container spacing={2}>
                <Grid size={6}>  
                    <TextField fullWidth id="outlined-basic" label='Name' variant="outlined"/>
                </Grid>
                <Grid size={6}>
                    <TextField fullWidth id="outlined-basic" label='Email address' variant="outlined"/>
                </Grid>
                <Grid size={12}>
                    <TextField
                        fullWidth
                        id="outlined-multiline-flexible"
                        label="Address"
                        multiline
                        rows={4}
                    />
                </Grid>
                <Grid size={6}>
                    <TextField fullWidth id="outlined-basic" label='Phone number' variant="outlined"/>
                </Grid>
                <Grid size={6}>
                    <TextField fullWidth id="outlined-basic" label='Password' variant="outlined"/>
                </Grid>
                <Grid size={12}>
                    <Button variant='contained' style={{backgroundColor:'darkgreen'}}>Signup</Button>
                </Grid>
                <Grid size={12}>
                    <Typography variant="contained"><Link to={'/'} style={{color:'#6b6b6b', textDecoration: 'none'}}>Already a user? Login here</Link></Typography>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default SignUp