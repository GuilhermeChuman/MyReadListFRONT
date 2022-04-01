import './Login.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Login() {
  return (
    <div className="App">
      <Box
        className="LoginFrame"
        component="form"
        sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
        noValidate
        autoComplete="off">
          <h2 className="Label">Login</h2>
          <TextField id="outlined-basic" label="Usuário" color="success" variant="outlined" />
          <TextField id="outlined-basic" label="Senha" color="success" variant="outlined" />

        <div className="GroupButtons">

          <Button className="Button" type="submit" variant="contained"> 
            Login
          </Button>
          <a className="ForgotLink" href="">Esqueceu a senha?</a>
          <Button className="Button inverted" type="submit" variant="contained"> 
            Sign Up
          </Button>

        </div>
    
      </Box>
    </div>
  );
}

export default Login;
