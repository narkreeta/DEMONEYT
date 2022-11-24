import React, {useState} from 'react';
import Router from 'next/router'
import Card from '@mui/material/Card';
import Banner from '../../public//asset/images/Applogo-Banner.png';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Input } from '@mui/material'; 
import { styled, Box, Stack } from '@mui/system';
import Button, { ButtonProps as MuiButtonProps } from '@mui/material/Button';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { useStyles } from "./style"; 

const Login = () => {
  const classes = useStyles(); 
  const [values, setValues] = useState({userName: '', passWord: '', showPassword: false});

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword, 
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleChange = (e, value) => {
    let data = {...values}
    data[value] = e.target.value
    setValues(data);
  } 

  const handleSubmit = () => {
    Router.push('/welcome');
    localStorage.setItem("userName", values?.userName);
  }

  return (
    <div className={classes.root}>
        <Card sx={{ boxShadow: 2 }} className={classes.card}>
            <CardMedia
                component="img" 
                height="350"
                image={Banner.src}
                alt="Banner"
            />
            <CardContent className={classes.cardContent}>  
                <div>
                    <Stack spacing={2}> 
                        <Input placeholder='Username' value={values?.userName} className={classes.inputBox} onChange={(e) => handleChange(e, 'userName')} />
                        <Input 
                            placeholder='Password'
                            className={classes.inputBox} 
                            type={values.showPassword ? 'text' : 'password'} 
                            value={values?.passWord}
                            onChange={(e) => handleChange(e, 'passWord')} 
                            endAdornment={
                                <InputAdornment position="end">
                                  <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                  >
                                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                  </IconButton>
                                </InputAdornment>
                              }
                        />
                    </Stack>       
                    <div className={classes.buttonHead}>    
                        <Button variant="outlined" className={classes.button} style={{ border: '1px solid #939598', color: '#939598' }} >Help</Button> 
                        <Button disabled={values?.userName && values?.passWord !== '' ? false : true} onClick={() => handleSubmit()} className={classes.button} style={{ backgroundColor: values?.userName && values?.passWord !== '' ? '#00D084' : '#939598', color: '#fff', marginRight: 0 }} >Login</Button> 
                    </div> 
                </div> 
            </CardContent>
        </Card>
    </div>
  )
}

export default Login