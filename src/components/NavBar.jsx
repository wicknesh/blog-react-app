import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static" style={{backgroundColor:'darkgreen'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>Blog App</Typography>
          <Button color="inherit"><Link to={'/blogs'} style={{color: 'white'}}>Home</Link></Button>
          <Button color="inherit"><Link to={'/addblog'} style={{color: 'white'}}>Add Blog</Link></Button>
          <Button color="inherit"><Link to={'/login'} style={{color: 'white'}} onClick={() => {
            sessionStorage.removeItem('token');
          }}>Logout</Link></Button>
      </Toolbar>
      </AppBar>
    </Box>
  </div>
  )
}

export default NavBar