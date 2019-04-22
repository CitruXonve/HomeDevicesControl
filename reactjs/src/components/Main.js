import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
// import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import { Switch, Route, Redirect } from 'react-router-dom';

// Container Component
class Main extends Component {
  local_config_default = '../../data/config.json';
  remote_config_default = 'https://smart-dev-2c89f.firebaseio.com/smart_devices.json'

  constructor(props) {
    super(props);
    this.state = {
      config: null
    };

    const loadConfig = (url) =>
      fetch(url)
        .then(res => res.json())
        .then(body => body);

    loadConfig(this.remote_config_default)
      .then(res => this.setState({'config': res}))
      .then(() => console.log('Mainstate: ' + JSON.stringify(this.state).slice(0,30)));
  }

  render() {
    const HomePage = () => {
      return (
        <Home config={this.state.config}/>
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
        {this.state.config ? <Footer config={this.state.config}/> : null}
      </div>
    );
  }
}

export default Main;