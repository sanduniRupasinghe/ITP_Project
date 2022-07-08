import React, {Component} from 'react';
import axios from 'axios';

export default class EditDonors extends Component{


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
    const id = this.props.match.params.id;
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

     axios.put(`http://localhost:8000/post/update/${id}`,data).then((res) =>{
       if(res.data.success){
         alert("Donors Updated Successfully")
         
         this.setState(
           {
            name:"",
            address:"",
            contact:"",
            age:"",
            dob:"",
            gender:"",
            bloodtype:""
           }
         )
       }
     })
  }


  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/post/${id}`).then ((res) =>{
      if(res.data.success){

        this.setState({

          name:res.data.post.name,
          address:res.data.post.address,
          contact:res.data.post.contact,
          age:res.data.post.age,
          dob: res.data.post.dob,
          gender:res.data.post.gender,
          bloodtype:res.data.post.bloodtype,
      });
      console.log(this.state.post);
    }

  });
}


render(){
  return(
    <div className= "container">
      
      <br></br>
      
      <form className="row g-3">

      <h3>Update Donors</h3>

        <div className="col-md-6">
          <label for="inputname">Donor Name</label>
            <input type="text" className="form-control" id="name"  placeholder="Enter Donor name"
             value={this.state.name} onChange={this.handleInputChange}/>
        </div>


        <div className="col-md-6">
        <label for="inputcontac">Contact No </label>
            <input type="text" className="form-control" id="contact" placeholder="Enter Phone No"
            value={this.state.contact} onChange={this.handleInputChange}/>
        </div>

        <div className="col-12">
        <label for="inputAddress">Address</label>
            <input type="text" className="form-control" id="address"  placeholder="Enter Address"
            value={this.state.address} onChange={this.handleInputChange}/>
        </div>

        <div className="col-md-6">
          <label for="inputage">Age</label>
            <input type="text" className="form-control" id="age"  placeholder="Enter Age"
            value={this.state.age} onChange={this.handleInputChange}/>
        </div>


        <div className="col-md-6">
            <label for="inputdob"><b>Date Of Birth</b></label>
              <input type="Date" className="form-control" id="dob"  placeholder="Enter Birthday"
              value={this.state.dob} onChange={this.handleInputChange}/>
          </div>


        <div className="col-md-6">
          <label for="gender">Gender</label>
              <select id= "gender" className="form-control" value={this.state.gender} onChange={this.handleInputChange}>
                  <option selected>Choose...</option>
                  <option>M</option>
                  <option>F</option>
              </select>
        </div>


        <div className="col-md-6">
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

        <center> <button className="btn btn-success" type="submit" style= {{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
                &nbsp; Update
        </button></center>

      </form>
    </div>
  )
  }
}
