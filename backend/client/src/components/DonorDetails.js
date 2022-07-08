import React, {Component} from 'react';
import axios from 'axios';

export default class DonorDetails extends Component{
  constructor(props){
    super(props);
    this.state={
      post:{}
    };
  }


  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`http://localhost:8000/post/${id}`).then ((res) =>{
      if(res.data.success){
        this.setState({
          post:res.data.post
      });

      console.log(this.state.post);
    }

  });
}


render(){

  const {name,address,age,gender,bloodtype} = this.state.post;
return(
  <div style = {{marginTop: '20px'}}>
    <h3>{name}</h3>
    <hr/>

    
      <div>
     
     <i><b><h3><p class="text-success"> Care and Cure Hospital</p></h3></b></i>
        <br></br>
      
      </div>
      <br></br>

    <d1 className="row">
      
      <dt className="col-sm-3">Address</dt>
      <dd className="col-sm-9">{address}</dd>

      <dt className="col-sm-3">Age</dt>
      <dd className="col-sm-9">{age}</dd>

      <dt className="col-sm-3">Gender</dt>
      <dd className="col-sm-9">{gender}</dd>

      <dt className="col-sm-3">Blood Type</dt>
      <dd className="col-sm-9">{bloodtype}</dd>
      </d1>
  </div>
)
}
}