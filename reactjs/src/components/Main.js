import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './Menu';
import Header from './Header';
// import Footer from './Footer';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';

// Container Component
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = null;
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId});
  // }

  render() {
    const HomePage = () => {
      return(
          <Home />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
            <Route path='/home' component={HomePage} />
            {/* <Route path='/menu/:dishId' component={DishWithId} />
            <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
            <Route exact path='/contactus' component={Contact} />} /> */}
            <Redirect to="/home" />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Main;