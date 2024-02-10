import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DebanjanImage from "../../assets/images/Debanjan.jpg";
import RishiImage from "../../assets/images/Rishi_Mondal.jpg";
import RohitImage from "../../assets/images/Rohit.jpg";
import AnimeshImage from "../../assets/images/Animesh.jpeg";
import "./style.css"; // Import CSS file for styling

function About() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={3}>
        <Card className="card">
          <CardMedia
            component="img"
            className="cardMedia"
            height="800"
            image={DebanjanImage}
            alt="Debanjan"
          />
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component="div">
              Debanjan Mukherjee
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Font-end Developer
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card className="card">
          <CardMedia
            component="img"
            className="cardMedia"
            height="800"
            image={RishiImage}
            alt="Rishi Mondal"
          />
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component="div">
              Rishi Mondal
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Full-stack Developer
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card className="card">
          <CardMedia
            component="img"
            className="cardMedia"
            height="800"
            image={RohitImage}
            alt="Rohit"
          />
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component="div">
              Rohit
            </Typography>
            <Typography variant="body2" color="text.secondary">
             Backend Developer
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card className="card">
          <CardMedia
            component="img"
            className="cardMedia"
            height="800"
            image={AnimeshImage}
            alt=" Animesh"
          />
          <CardContent className="cardContent">
            <Typography gutterBottom variant="h5" component="div">
              Animesh
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Front-end Developer
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default About;
