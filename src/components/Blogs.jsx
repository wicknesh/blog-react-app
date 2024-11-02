import { Card, CardContent, CardMedia, Typography } from "@mui/material"
import Grid from '@mui/material/Grid2';

const Blogs = () => {
  const data = [{blogname: 'Food blog', blogimg: '', blogdesc: 'A blog about food'},
    {blogname: 'Movie blog', blogimg: '', blogdesc: 'A blog about movie'},
    {blogname: 'Travel blog', blogimg: '', blogdesc: 'A blog about travel'}];

  return (
    <div>
      <Grid container spacing={2} style={{marginTop: "3%"}}>
        {data.map((row)=>(
          <Grid size={4}>
            <Card fullWidth>
              <CardMedia
              sx={{ height: 140 }}
              image={row.blogimg}/>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">{row.blogname}</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>{row.blogdesc}</Typography>
                </CardContent>
            </Card>
          </Grid>
        ))}  
      </Grid>
    </div>
  )
}

export default Blogs