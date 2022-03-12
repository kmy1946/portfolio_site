import React from "react";
import { Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  root:{
    textAlign:"center",
    margin:'0 auto',
    width:500
  }
});

export default function About() {
  const classes = useStyles();

  return (
    <section id="about" className="section">
      <div>
      <Card className={classes.root}>
        <CardActionArea>
          <img src='images/saboten.jpg'
            className="product-card-img" width='350'
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
               Name:Saboten
          </Typography>
            <Typography variant="body3" color="textSecondary" component="p">
              学生です。社会人です。
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
                <a href='/'>
                  Top
                </a>
          </CardActions>
        </Card>
        </div>
    </section>
  );
}