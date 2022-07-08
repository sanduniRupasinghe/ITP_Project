import React, {Component} from 'react';
import axios from 'axios';
import logo from './adddonor.jpg';

export default class CreateDonors extends Component{

  constructor (props){
    super(props);
    this.state={
      name:"",
      address:"",
      contact:"",
      age:"",
      dob:"",
      gender:"",
      bloodtype:""
    }
  }


  handleInputChange = (e =>{
    const {id,value} =e.target;

    this.setState({
      ...this.state,
      [id]:value
    })
  })


  onSubmit = (e) =>{

    e.preventDefault();

    const {name,address,contact,age,dob,gender,bloodtype} = this.state;

    const data = {
      name:name,
      address:address,
      contact:contact,
      age:age,
      dob:dob,
      gender:gender,
      bloodtype:bloodtype,
    }

    console.log(data)

     axios.post("http://localhost:8000/post/save",data).then((res) =>{
       if(res.data.success){
         alert ("Donors Details Added Successfully")
         this.setState(
           {
            name:"",
            address:"",
            contact:"",
            age:"",
            dob:"",
            gender:"",
            bloodtype:"",
           }
         )
       }
     })
  }


  render(){
    return(
      <div className= "container">
        
        <br></br>
        <form className="row g-3" class="row needs-validation" novalidate  onSubmit= {this.onSubmit}>

          <div className="row text">
            <div className="col-md-6 cols">
            <h4>Add New Donors</h4>

            <img src={logo} alt="" width="450" height="450" class="d-inline-block align-text-top"/>
            </div>


      <div className="col-md-6 cols">
        <br></br>
        
          <div className="mb-3">
            <label for="inputname">Donor Name</label>
              <input type="text" className="form-control" id="name" required placeholder="Enter Donor name" 
               value={this.state.name} onChange={this.handleInputChange}/>
          </div>

          <div className="mb-3">
          <label for="inputcontac">Contact No</label>
              <input type="text" className="form-control" id="contact" required placeholder="07x-xxxxxxx"
              pattern="[0]{1}[7]{1}[0-9]{1}-[0-9]{7}"
              value={this.state.contact} onChange={this.handleInputChange}/>
          </div>

          <div className="mb-3">
          <label for="inputAddress">Address</label>
              <input type="text" className="form-control" id="address" required placeholder="Enter Address"
              value={this.state.address} onChange={this.handleInputChange}/>
          </div>

          <div className="mb-3">
            <label for="inputage">Age</label>
              <input type="text" className="form-control" id="age" required placeholder="Enter Age"
              value={this.state.age} onChange={this.handleInputChange}/>
          </div>


          <div className="mb-3">
            <label for="inputdob">Date Of Birth</label>
              <input type="Date" className="form-control" id="dob" required placeholder="Enter Birthday"
              value={this.state.dob} onChange={this.handleInputChange}/>
          </div>

          <div className="row">

          <div className="col-md-6">
          <label for="gender">Gender</label>
              <select id= "gender" className="form-control" value={this.state.gender} onChange={this.handleInputChange}>
                  <option selected>Choose...</option>
                  <option>M</option>
                  <option>F</option>
              </select>
        </div>



        <div className="col-md-6 cols">

        <div className="col-md-15">
          <label for="bloodtype">Blood Type</label>
              <select id="bloodtype"  className="form-control" value={this.state.bloodtype} onChange={this.handleInputChange}>
                  <option selected>Choose...</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB</option>
                  <option>O+</option>
                  <option>O-</option>
              </select>
        </div> 
        </div>
  
          <center> <button className="btn btn-success" type="submit" style= {{marginTop:'15px'}} >
              <i onClick={this.onSubmit}>  </i>
                  &nbsp; Add
          </button></center>
          </div>
          </div>
          </div>

        </form>
      </div>
    )
    }
}



