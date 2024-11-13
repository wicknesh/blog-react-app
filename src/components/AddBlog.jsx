import { Box, Button, TextField } from "@mui/material"
import Grid from '@mui/material/Grid2';
import axiosInstance from "../axios-interceptors";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AddBlog = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        name: '',
        image: '',
        author: '',
        description: ''
    });
    useEffect(() => {
        if(location.state!=null){
            setForm({...form, name: location.state.val.name,
                image: location.state.val.image,
                author: location.state.val.author,
                description: location.state.val.description
            })
        }
        else{
            setForm({...form, name: '',
                image: '',
                author: '',
                description: ''
            })

        }
    }, [])

    const capValue = () => {
        if(location.state!=null) {
            axiosInstance.put(`http://localhost:3000/blogs/edit/${location.state.val._id}`, form)
            .then(() => {
                alert('Updated successfully');
                navigate('/blogs');
            })
            .catch((error) => console.log(error));
        }
        else {
            axiosInstance.post(`http://localhost:3000/blogs/addblog`, form)
            .then((res) => {
                alert(res.data.message);
                navigate('/blogs');
            })
            .catch((error) => console.log(error));
        }
    }
  return (
    <div>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5rem'}}>
            <Grid container spacing={2}>
                <Grid size={12}>  
                    <TextField sx={{ width: '50rem' }} id="outlined-basic" label='Blog Name' name="name" value={form.name} variant="outlined" onChange={(e) => {
                        setForm({...form, name:e.target.value})
                    }}/>
                </Grid>
                <Grid size={12}>
                    <TextField sx={{ width: '50rem' }} id="outlined-basic" label='Blog Image URL' name="image" value={form.image} variant="outlined" onChange={(e) => {
                        setForm({...form, image:e.target.value})
                    }}/>
                </Grid>
                <Grid size={12}>
                    <TextField sx={{ width: '50rem' }} id="outlined-basic" label='Blog Author' name="author" value={form.author} variant="outlined" onChange={(e) => {
                        setForm({...form, author:e.target.value})
                    }}/>
                </Grid>
                <Grid size={12}>
                    <TextField multiline rows={6} sx={{ width: '50rem' }} id="outlined-basic" label='Blog Description' name="description" value={form.description} variant="outlined" onChange={(e) => {
                        setForm({...form, description:e.target.value})
                    }}/>
                </Grid>
                <Grid size={12}>
                    <Button variant='contained' sx={{backgroundColor:'darkgreen', fontSize: '1.2rem'}} onClick={() => capValue()}>Add Blog</Button>
                </Grid>
            </Grid>
        </Box>
    </div>
  )
}

export default AddBlog