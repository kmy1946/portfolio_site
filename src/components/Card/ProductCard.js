import { CardActionArea, CardActions, CardContent, CardMedia, Typography, Card, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import filters from './data';

const useStyles = makeStyles({
  main:{
    textAlign:"center",
    padding:"0.5em",
  },
  root:{
    margin:'0 auto',
    margin:10,
    height:'98%'
  }
});

export const ProductCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <Grid container justify="center">
        {
        filters.map(filter =>(
          <Grid item xs={12} sm={6} key={filter.id}>
            <Card className={classes.root} key={filter.id}>
              <CardActionArea>
                {/*
                <CardMedia
                  image={filter.image}
                  title="Contemplative Reptile"
                />
                */}
                <img src={filter.image}
                className="product-card-img" width='350'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {filter.title}
                </Typography>
                <Typography variant="body3" color="textSecondary" component="p">
                    {filter.descriprion}
                </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <a href={filter.link}>
                  More
                </a>
              </CardActions>
            </Card>
            </Grid>
          )
        )
      }
      </Grid>
      
    </div>
  );
}