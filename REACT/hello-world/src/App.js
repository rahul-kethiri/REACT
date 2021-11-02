
import { Navbar, NavbarBrand } from 'reactstrap';
import React, {Component} from 'react';
//import MenuComp from './components/MenuComp';
import Menu from './components/Menu';
import { DISHES } from './components/Dishes';
class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       dishes: DISHES
    }
  }

  render() {
    
    
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
