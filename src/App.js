import './App.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <div className="LoginFrame">
        <form className="Form">
          <label>
            Usuario:
            <input type="text" name="user" />
          </label>
          <label>
            Senha:
            <input type="text" name="password" />
          </label>
          <Button type="submit" variant="contained"> 
            Enviar
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
