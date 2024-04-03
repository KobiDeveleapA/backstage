import React from 'react';
import { makeStyles } from '@material-ui/core';
import CustomizedLogo from './rsz_develeap_icon.jpg';


const useStyles = makeStyles({
  svg: {
    width: 'auto',
    height: 30,
  },
  path: {
    fill: '#7df3e1',
  },
});
const LogoFull = () => {
  const classes = useStyles();
  return <img src={CustomizedLogo} />;
};


export default LogoFull;
