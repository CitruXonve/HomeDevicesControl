import React from 'react';

class MyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = null;
        this.onChange = this.onChange.bind(this)
    }

    onChange = (event) => {
      this.setState({ [event.target.name]: event.target.value })
    }

    // send() {
    //   const method = "POST";
    //   const body = new FormData(this.form);
    //   console.log("Send: ", body)
    //   fetch("http://localhost:8080/query_event", { method, body })
    //     .then(res => res.json())
    //     .then(data => alert(JSON.stringify(data, null, "\t")));
    // }
    send() {
        const method = "GET";
        const body = this.state;

        const params = ((params)=>{
            var attr_list=[]
            for (var key in params){
                attr_list.push(key+'='+params[key])
            }
            return attr_list.join('&')
        })(body)

        console.log("Send: ", params)
        fetch("http://localhost:8080/query_event?" + params)
          .then(res => res.json())
          .then(body => console.log("Receive: ",JSON.stringify(body.count, null, "\t")));
      }
    render() {
      return (
        <div>
          <h1>I'm a form.</h1>
          <form onChange={this.onChange}>{/* <form ref={el => (this.form = el)}> */}
            <div class="form-group row">
                <div class="col-12 col-md-4">
                    <input type="text" class="form-control" id="latitude" name="latitude"// onChange={this.onChange}
                        placeholder="latitude" />
                </div>
                <div class="col-12 col-md-4">
                    <input type="text" class="form-control" id="longitude" name="longitude"// onChange={this.handleChange}
                        placeholder="longitude" />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-12 col-md-4">
                    <input type="text" class="form-control" id="keyword" name="keyword"// onChange={this.handleChange}
                        placeholder="keyword" />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-12 col-md-4">
                    <input type="text" class="form-control" id="distance_delta" name="distance_delta"// onChange={this.handleChange}
                        placeholder="distance" />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-12 col-md-4">
                    <input type="text" class="form-control" id="delta_time" name="delta_time"// onChange={this.handleChange}
                        placeholder="time" />
                </div>
            </div>  
          </form>
          <button onClick={() => this.send()}>Send</button>
          <p>Submit me to see what I send to the server.</p>
        </div>
      );
    }
  }

export default MyForm;