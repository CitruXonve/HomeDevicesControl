import React, { Component, TextInput, Container } from 'react';
import logo from './logo.svg';
import './App.css';
import DocForm from "react-cross-form";
import MyForm from './myForm';

const FORM_FIELDS = [
  {
    key: "firstName",
    label: "First Name",
    placeholder: "Type your name...",
    component: TextInput,
    validators: { presence: { message: "is required" }, length: { minimum: 3 } }
  },
  {
    key: "email",
    label: "Email",
    placeholder: "Type your name...",
    component: TextInput,
    validators: { email: true }
  }
];

class App extends Component {
  constructor(props) {
		super(props);
		this.state = {
			form: {
				firstName: '123',
				email: 'aaa'
			},
			isValid: true
		};
		this.onChange = this.onChange.bind(this)
	}
	onChange({updateData}){
		this.setState({ form: updateData })
	}

  render() {
    return (
      <div className="App">
        <div className="container">
            <div className="row">
            <h2>Easy form validation example</h2>
            <MyForm />
            {/* <form action="localhost:8080/query_event" method="get" target="_blank">
              <div class="form-group row">
                  <div class="col-12 col-md-4">
                      <input type="text" class="form-control" id="latitude" name="latitude"
                          placeholder="latitude" />
                  </div>
                  <div class="col-12 col-md-4">
                      <input type="text" class="form-control" id="longitude" name="longitude"
                          placeholder="longitude" />
                  </div>
              </div>
              <div class="form-group row">
                <div class="col-12 col-md-4">
                    <input type="text" class="form-control" id="keyword" name="keyword"
                        placeholder="keyword" />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-12 col-md-4">
                    <input type="text" class="form-control" id="distance_delta" name="distance_delta"
                        placeholder="distance" />
                </div>
              </div>
              <div class="form-group row">
                <div class="col-12 col-md-4">
                    <input type="text" class="form-control" id="delta_time" name="delta_time"
                        placeholder="time" />
                </div>
              </div>
              <button type="submit">Submit</button>
            </form> */}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
