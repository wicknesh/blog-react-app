import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';
import axiosInstance from "../axios-interceptors";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  // const data = [{blogname: 'Food blog', blogimg: '', blogdesc: 'A blog about food'},
  //   {blogname: 'Movie blog', blogimg: '', blogdesc: 'A blog about movie'},
  //   {blogname: 'Travel blog', blogimg: '', blogdesc: 'A blog about travel'}];
  const [blog, setBlog] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = () => {
    axiosInstance.get('http://localhost:3000/blogs')
    .then((res) => {
      setBlog(res.data);
    })
    .catch((error) => {
      console.log(error);
    }) 
  };

  const blogDelete = (id) => {
    axiosInstance.delete(`http://localhost:3000/blogs/delete/${id}`)
    .then(() => {fetchBlogs()})
    .catch((error) => {
      console.log(error);
    })

  }

  const updateData = (val) => {
    navigate('/addblog', {state: {val}});
  }

  return (
    <div>
      <Grid container spacing={2} style={{marginTop: "3%"}}>
        {blog.map((row, index)=>(
          <Grid item key={row.id || index} size={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
              sx={{ height: 140 }}
              image={row.image}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">{row.name}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{row.description}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>-{row.author}</Typography>
              </CardContent>
              <Button variant="contained" sx={{backgroundColor: 'darkgreen', marginBottom: '1rem'}} onClick={() => updateData(row)}>Update</Button>
              <Button variant="contained" color="error" sx={{ marginLeft: '2rem', marginBottom: '1rem'}} onClick={() => blogDelete(row._id)}>Delete</Button>
            </Card>
          </Grid>
        ))}  
      </Grid>
    </div>
  )
}

export default Blogs