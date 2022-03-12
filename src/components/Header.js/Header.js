import React, { useEffect, useState } from "react";
import { Toolbar, AppBar, CssBaseline, IconButton, Typography, Divider, List, ListItemText, Drawer, Select, TextField, MenuItem } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { Link } from "react-router-dom";
import { Box, useTheme } from "@mui/system";
import clsx from 'clsx';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


const useStyles = makeStyles({
  drawer: {
    
  },
  drawerHeader: {
    width:'25vw'
  },
  hamb_icon: {
  },
  color_label: {
    fontSize:"10px"
  },
  color_label__text: {
    whiteSpace:"nowrap",
  },
  color_label_textfield: {
    width:100
  }
});
export const Header = () => {
  const classes = useStyles();
  const theme = useTheme();
  // stateとstateを更新するための関数を宣言
  const [open, setOpen] = React.useState(false);
  const [example, setExample] = useState("primary");

  const isCustomColor = example === "customColor";
  const isCustomHeight = example === "customHeight";


  // メニューを開く関数
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  // メニューを閉じる関数
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [links, setLinks] = useState([
    {label: "Top", id: "0001", link: "/"},
    {label: "About", id: "0002", link: "/about"},
    {label: "Contact", id: "0003", link: "contact"}
  ]);
  const [colors, setColors] = useState([
    {label: "Default", id: "0001", colorclass: "default"},
    {label: "Primary", id: "0002", colorclass: "primary"},
    {label: "Secondary", id: "0003", colorclass: "secondary"}
  ]);

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}

        color={isCustomColor || isCustomHeight ? "primary" : example} className={`${isCustomColor && classes.customColor} ${
          isCustomHeight && classes.customHeight
        }`}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* メニューアイコンクリック時に呼び出す関数を定義 */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            MenuIcon
          </IconButton>
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
            <TextField
              id="outlined-select-currency"
              select
              label='color'
              //value='color'
              className={classes.color_label_textfield}
            >
              {
                colors.map(color => {
                  const colorclass = color.colorclass
                  return (
                    <IconButton
                      color="inherit"
                      onClick={() => setExample(colorclass)}
                      key={color.id}
                    >
                      <MenuItem value={color.colorclass}>
                        {color.label}
                      </MenuItem>
                    </IconButton>
                  )
                })
              }
            </TextField>
            <IconButton onClick={handleDrawerOpen} className={classes.hamb_icon}>
              <ChevronRightIcon/>
            </IconButton>
        </Toolbar>
      </AppBar>
      
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
          {
            links.map(link => {
              return (
                <li key={link.id}>
                  <a href={link.link}>
                    {link.label}
                  </a>          
                </li>
              )
            })
          }
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
      </main>
    </div>
  );
}