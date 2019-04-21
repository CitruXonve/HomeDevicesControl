import React, { Component, TextInput, Container } from 'react';
import './App.css';
import MyForm from './myForm';

class App extends Component {
  constructor(props) {
		super(props);
		// this.state = {
		// 	form: {
		// 		firstName: '123',
		// 		email: 'aaa'
		// 	},
		// 	isValid: true
		// };
		// this.onChange = this.onChange.bind(this)
	}
	// onChange({updateData}){
  //   this.setState({ form: updateData })
  //   console.log('App change', updateData)
	// }

  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="row">
            <h2>Easy form validation example</h2>
            <MyForm />
            </div>
        </div>
      </div>
    );
  }
}

export default App;
