import './About.css';
import * as React from 'react';
import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function About() {
  return (
    <div className="About">
        <h2>Desenvolvido por:</h2>
        <div className='profile'>
          <div className='img1'>
          </div>
          <div className='desc'>
            Guilherme Chuman Troncon
            <a href='https://github.com/GuilhermeChuman'>https://github.com/GuilhermeChuman</a>
          </div>
        </div>
        <div className='profile'>
            <div className='img2'>
            </div>
            <div className='desc'>
              Fabricio da Silva Malachias
              <a href='https://github.com/FabricioMalachias'>https://github.com/FabricioMalachias</a>
            </div>
            
        </div>
    </div>
  );
}

export default About;
