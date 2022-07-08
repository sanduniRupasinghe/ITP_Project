import React, {Component} from "react";
import axios from "axios";


export default class StockHome extends Component{

  constructor(props){
    super(props);
  
    this.state ={
      stocks: []
    };

  }

  componentDidMount(){
    this.retrievePosts();
  }

retrievePosts(){
  axios.get("http://localhost:8000/stocks").then(res=>{
    if(res.data.success){
    this.setState({
      stocks:res.data.existingStock

    });

    console.log(this.state.stocks);
  }
});
}


//delete the stock details

onDelete = (id) =>{
  axios.delete(`http://localhost:8000/stocks/delete/${id}`).then((res)=>{
    alert("Delete Successfully");
    this.retrievePosts();
  })
}



//search function

filterData(stock,searchKey){

  const result = stock.filter((stock) =>
  stock.bloodtype.toLowerCase().includes(searchKey)
  )

  this.setState({stocks:result})
}


handleSearchArea =(e) =>{
  const searchKey= e.currentTarget.value;

  axios.get("http://localhost:8000/stocks").then(res => {
    if(res.data.success){

      this.filterData(res.data.existingStock,searchKey)
  }
  });
}


    render(){
        return (
          <div className= "container">
              <div>
             <br></br>
              <div className="row">
                  <div className="col-lg-8 mt-2 mb-2">
      
                      <b><h4><p>All Blood Stokd List</p></h4></b>
                     
                  </div>
      
                  <div className= "col-lg-3 mt-2 mb-2">
                    <input className="form-control" type="search" name="searchQuery" placeholder="Search" onChange={this.handleSearchArea}>
                    </input> 
                  </div>
      
              </div> <br></br>
      
                <table className="table">
                  <thead>
                  <tr>
                      <th scope="col">#</th>
                      <th scope="col">Blood type</th>
                      <th scope="col">No of Bags</th>
                      <th scope="col">Date of stock</th>
                      <th scope="col">Expired Date</th>
                      <th scope="col">Name In-charge</th>
                      <th scope="col">Action</th>

                    </tr>
                  </thead>
                 
                  <tbody>
                    {this.state.stocks.map((stocks,index) =>(
                      <tr key={index}>
          
                        <th scope="row">{index+1}</th>
                        <td>
                            <a href={` /stocks/${stocks._id}`} style={{textDecoration:'none'}}>
                            {stocks.bdtype}
                            </a>
      
                          </td>
                        <td>{stocks.noofbags}</td>
                        <td>{stocks.stockdate}</td>
                        <td>{stocks.expiredate}</td>
                        <td>{stocks.inchargename}</td>
                        <td>
                          <a className="btn btn-warning" href= {`/editstock/${stocks._id}`}>
                            <i className="fas fa-edit"></i>&nbsp;Edit  </a>
                          &nbsp;
                          <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(stocks._id)}>
                            <i className="fas fa-trash-alt"></i>&nbsp;delete
                          </a>
      
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
      
                <button className="btn btn-success"><a href="/addStock" style= {{textDecoration:'none', color:'white'}}>Create New Stock</a></button>
                    
              </div> 
          </div>
          )
        } 
}