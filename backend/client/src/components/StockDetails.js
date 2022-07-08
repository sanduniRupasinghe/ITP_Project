import React, {Component} from "react";
import axios from "axios";

export default class StockDetails extends Component{
    constructor(props){
      super(props);
      this.state={
        stock:{}
      };
    }
  
    componentDidMount(){
        const id = this.props.match.params.id;
    
        axios.get(`http://localhost:8000/stocks/${id}`).then ((res) =>{
          if(res.data.success){
            this.setState({
              stock:res.data.stock
          });
    
          console.log(this.state.stock);
        }
    
      });
    }


    render(){

        const {bdtype,noofbags,stockdate,expiredate,inchargename} = this.state.stock;
      return(
        <div style = {{marginTop: '20px'}}>
          <h3>{bdtype}</h3>
          <hr/>
      
          
            <div>
           
           <i><b><h3><p class="text-success"> Care and Cure Hospital</p></h3></b></i>
              <br></br>
            
            </div>
            <br></br>
      
          <d1 className="row">
            
            <dt className="col-sm-3">No of Bags</dt>
            <dd className="col-sm-9">{noofbags}</dd>
            <br></br>
      
            <dt className="col-sm-3">Date of stock</dt>
            <dd className="col-sm-9">{stockdate}</dd>
      
            <dt className="col-sm-3">Expire Date</dt>
            <dd className="col-sm-9">{expiredate}</dd>
      
            <dt className="col-sm-3">Name In-charge</dt>
            <dd className="col-sm-9">{inchargename}</dd>
            </d1>
        </div>
      )
      }
      }