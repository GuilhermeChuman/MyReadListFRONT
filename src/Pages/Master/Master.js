import './Master.css';
import * as React from 'react';
import Image from '@mui/material/ImageList';
import Navbar from 'react-bootstrap/Navbar';
import {Container, Nav} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from '@mui/material/Button';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


//Pages
import Login from '../Login/Login';
import Home from '../Home/Home';

function Master() {
  return (
    <div className="Master">

      <div className='Header'>
        <a href='/'>
          <h1 className="title">MyReadList</h1>
        </a>
        <div>
          <Button href="/Login" className="MasterButton" type="link" variant="contained"> 
              Login
          </Button>
          <Button className="MasterButton inverted" type="link" variant="contained"> 
              Sign Up
          </Button>
            {/* <Image className="profile" href=""></Image> */}
        </div>
      </div> 

      <Navbar bg="dark" variant="dark">
        <Container>
            <Navbar.Brand href="#home">Melhores Livros</Navbar.Brand>
            <Navbar.Brand href="#home">Forum</Navbar.Brand>
            <Navbar.Brand href="#home">Notícias</Navbar.Brand>
            <Navbar.Brand href="#home">Sobre</Navbar.Brand>
        </Container>

        <Form className="search">
          <Form.Group controlId="formBasicEmail">
            <Form.Control className="formControl" type="search" placeholder="Pesquisar Livros" />
          </Form.Group>
        </Form>

      </Navbar>  

      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />}>
            </Route>
            <Route path="/" element={<Home />}>
            </Route>
          </Routes>
        </BrowserRouter>
      </Container>

    </div>
  );
}

export default Master;
