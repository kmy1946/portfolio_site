import React from "react";
import { CardActionArea, CardActions, CardContent, CardMedia, Typography, Card, Grid, Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import './Footer.css';

const Footer = () => {
  return (
    <>
      <div className='footer_group'>
      <div className='footer__description_box'>
        <p className="footer__description_text">ポートフォリオサイトです。</p>
      </div>
      <Container> 
        <br/>
        <br/>
        <Typography>
        </Typography>
            <Typography className="footer__title">
              {"Copyright © "}
                Your Own PortFolio Site
              {" "}
              {new Date().getFullYear()}
              {"."}
        </Typography>
      </Container>
    </div>
    </>
  );
}

export default Footer;