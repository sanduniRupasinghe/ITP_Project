import React, {Component} from "react";
import axios from "axios";

export default class EditStock extends Component{


    constructor (props){
      super(props);
      this.state={
        bdtype:"",
        noofbags:"",
        stockdate:"",
        expiredate:"",
        inchargename:""
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
      const {bdtype,noofbags,stockdate,expiredate,inchargename} = this.state;
  
      const data = {
            bdtype:bdtype,
            noofbags: noofbags,
            stockdate:stockdate, 
            expiredate:expiredate,
            inchargename:inchargename,
      }
  
      console.log(data)
  
       axios.put(`http://localhost:8000/stocks/update/${id}`,data).then((res) =>{
         if(res.data.success){
           alert("Stocks Updated Successfully")
           
           this.setState(
             {
                bdtype:"",
                noofbags:"",
                stockdate:"",
                expiredate:"",
                inchargename:""
             }
           )
         }
       })
    }
  
  
    componentDidMount(){
      const id = this.props.match.params.id;
  
      axios.get(`http://localhost:8000/stocks/${id}`).then ((res) =>{
        if(res.data.success){
  
          this.setState({
  
            bdtype:res.data.stock.bdtype,
            noofbags:res.data.stock.noofbags,
            stockdate:res.data.stock.stockdate,
            expiredate:res.data.stock.expiredate,
            inchargename: res.data.stock.inchargename,
        });
        console.log(this.state.stock);
      }
  
    });
  }



  render(){
    return(
      <div className= "container">
        
        <br></br>
        <form className="row g-3" onSubmit= {this.onSubmit}>

        <h4>Update Blood Stocks</h4>
        <br></br>
        
        <div className="col-md-8">
            <label for="bdtype">Blood Type</label>
                <select id="bdtype" required className="form-control" value={this.state.bdtype} onChange={this.handleInputChange}>
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

          <div className="col-md-8">
          <label for="inputcontac">No of Bags</label>
              <input type="text" className="form-control" id="noofbags" required placeholder="Enter Bags"
              value={this.state.noofbags} onChange={this.handleInputChange}/>
          </div>

          <div className="col-8">
          <label for="inputAddress">Date of stock</label>
              <input type="Date" className="form-control" id="stockdate" required placeholder="Enter Stock Date"
              value={this.state.stockdate} onChange={this.handleInputChange}/>
          </div>

          <div className="col-md-8">
            <label for="inputage">Expire Date</label>
              <input type="Date" className="form-control" id="expiredate" required placeholder="Enter Expire Date"
              value={this.state.expiredate} onChange={this.handleInputChange}/>
          </div>


          <div className="col-md-8">
            <label for="inputinchargename">Name In-charge</label>
              <input type="text" className="form-control" id="inchargename" required placeholder="Enter In-charge Name"
              value={this.state.inchargename} onChange={this.handleInputChange}/>
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