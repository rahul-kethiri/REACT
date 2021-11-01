import logo from './logo.svg';

import r from './components/greet';
import Greet from './components/greet';
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Counter from './components/counter';
import Functionclick from './components/Functionclick';
import Classclick from './components/Classclick';
import Childcomp from './components/Childcomp';
import Parentcomp from './components/Parentcomp';
import Usergreeting from './components/Usergreeting';
import List from './components/List';
import Stylesheet from './components/Stylesheet';
import Form from './components/Form';
import Fragmentdemo from './components/Fragmentdemo';
import Menu from './components/Menu';
import { Navbar, NavbarBrand } from 'reactstrap';
import React, {Component} from 'react';
function App() {
  return (
    <div>
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="/">ABC </NavbarBrand>
        </div>
      </Navbar>
      <Menu />
    { /* <Counter /> */   }
  {/*<Functionclick />  */}
    
    </div>
  );
}

export default App;
