import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import DebanjanImage from "../../assets/images/Debanjan.jpg";

function About() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="200px"
            src={DebanjanImage}
            alt="Debanjan"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Debanjan Mukherjee
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={require("../../assets/images/Rishi_Mondal.jpg").default}
            alt="Rishi Mondal"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rishi Mondal
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="200"
            image={require("../../assets/images/Rohit.jpg").default}
            alt="Rohit"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Rohit
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This card has supporting text below as a natural lead-in to
              additional content.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default About;
