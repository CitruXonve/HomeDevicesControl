import React from 'react';

class MyForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = null;

        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }

    // handleChange(event) {
    //     this.setState({ value: event.target.value });
    // }
    handleChange = event => {
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
        // const body = new FormData(this.form);
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
          <form ref={el => (this.form = el)}>
            {/* <label>I'll be a null value:</label>
            <input type="text" name="im-empty" />
            <label>I'll be filled in:</label>
            <input
              type="text"
              name="im-not-empty"
              value="Im already filled in."
            />
            <label>I'll be an empty file:</label>
            <input type="file" name="im-an-empty-file" />
            <form>
              <h1>I'm a nested form</h1>
              <label>FormData wont even know I'm here!</label>
              <input type="file" name="im-a-nested-empty-file" />
            </form> */}
            <div class="form-group row">
                     <div class="col-12 col-md-4">
                         <input type="text" class="form-control" id="latitude" name="latitude" onChange={this.handleChange}
                             placeholder="latitude" />
                     </div>
                     <div class="col-12 col-md-4">
                         <input type="text" class="form-control" id="longitude" name="longitude" onChange={this.handleChange}
                             placeholder="longitude" />
                     </div>
                 </div>
            <div class="form-group row">
                <div class="col-12 col-md-4">
                    <input type="text" class="form-control" id="keyword" name="keyword" onChange={this.handleChange}
                        placeholder="keyword" />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-12 col-md-4">
                    <input type="text" class="form-control" id="distance_delta" name="distance_delta" onChange={this.handleChange}
                        placeholder="distance" />
                </div>
            </div>
            <div class="form-group row">
                     <div class="col-12 col-md-4">
                         <input type="text" class="form-control" id="delta_time" name="delta_time" onChange={this.handleChange}
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

// class MyForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { value: '' };

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(event) {
//         this.setState({ value: event.target.value });
//     }

//     // handleSubmit(event) {
//     //     // alert('A name was submitted: ' + this.state.value);
//     //     event.preventDefault();
//     //     const data = new FormData(event.target);
//     //     console.log(JSON.stringify(data))
//     // }
//     handleSubmit(event) {
//         event.preventDefault();
//         const data = new FormData(event.target);

//         console.log("Submit: ",data)
        
//         fetch('localhost:8080/query_event', {
//           method: 'GET'
//         });
//       }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit} target="localhost:8080/query_event">
//                 {/* <label>
//                     Name:
//             <input type="text" value={this.state.value} onChange={this.handleChange} />
//                 </label> */}

//                 <label htmlFor="username">Enter username</label>
//                 <input id="username" name="username" type="text" />

//                 <label htmlFor="email">Enter your email</label>
//                 <input id="email" name="email" type="email" />

//                 <label htmlFor="birthdate">Enter your birth date</label>
//                 <input id="birthdate" name="birthdate" type="text" />

//                 <div class="form-group row">
//                     <div class="col-12 col-md-4">
//                         <input type="text" class="form-control" id="latitude" name="latitude"
//                             placeholder="latitude" />
//                     </div>
//                     <div class="col-12 col-md-4">
//                         <input type="text" class="form-control" id="longitude" name="longitude"
//                             placeholder="longitude" />
//                     </div>
//                 </div>
//                 <div class="form-group row">
//                     <div class="col-12 col-md-4">
//                         <input type="text" class="form-control" id="keyword" name="keyword"
//                             placeholder="keyword" />
//                     </div>
//                 </div>
//                 <div class="form-group row">
//                     <div class="col-12 col-md-4">
//                         <input type="text" class="form-control" id="distance_delta" name="distance_delta"
//                             placeholder="distance" />
//                     </div>
//                 </div>
//                 <div class="form-group row">
//                     <div class="col-12 col-md-4">
//                         <input type="text" class="form-control" id="delta_time" name="delta_time"
//                             placeholder="time" />
//                     </div>
//                 </div>

//                 <input type="submit" value="Submit" />
//             </form>
//         );
//     }
// }
export default MyForm;