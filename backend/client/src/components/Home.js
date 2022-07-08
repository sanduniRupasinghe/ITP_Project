import React, {Component} from 'react';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable'


export default class Home extends Component{
  constructor(props){
    super(props);
  
    this.state ={
      posts: []
    };

  }

  componentDidMount(){
    this.retrievePosts();
  }

retrievePosts(){
  axios.get("http://localhost:8000/posts").then(res=>{
    if(res.data.success){
    this.setState({
      posts:res.data.existingPost

    });

    console.log(this.state.posts);
  }
});
}


//report generate
genPDF =() => {

  const doc = new jsPDF()
  doc.setFontSize(20);
  doc.text("Donor Details", 50,10);
  doc.autoTable({
html: '#content'

})

doc.setFontSize(12);
doc.text("Care & Cure HOSPITAL - ", 10,272);
doc.setFontSize(10);
doc.text(" Donor Details Report", 52,272);
doc.save('Donor Details.pdf')

}



//delete the donor details

onDelete = (id) =>{
  axios.delete(`http://localhost:8000/post/delete/${id}`).then((res)=>{
    alert("Delete Successfully");
    this.retrievePosts();
  })
}



//search function

filterData(post,searchKey){

  const result = post.filter((post) =>
  post.name.toLowerCase().includes(searchKey) ||
  post.bloodtype.toLowerCase().includes(searchKey)
  )

  this.setState({posts:result})
}

handleSearchArea =(e) =>{
  const searchKey= e.currentTarget.value;

  axios.get("http://localhost:8000/posts").then(res => {
    if(res.data.success){

      this.filterData(res.data.existingPost,searchKey)
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

                <b><h4><p>All Donors List</p></h4></b>
               
            </div>

            <div className= "col-lg-3 mt-2 mb-2">
              <input className="form-control" type="search" name="searchQuery" placeholder="Search" onChange={this.handleSearchArea}>
              </input> 
            </div>

        </div> <br></br>

          <table className="table" id="content">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Address</th>
                <th scope="col">Contact No</th>
                <th scope="col">Age</th>
                <th scope="col">Birthday</th>
                <th scope="col">Gender</th>
                <th scope="col">Blood Type</th>
                <th scope="col">Action</th>
                
              </tr>
            </thead>
           
            <tbody>
              {this.state.posts.map((posts,index) =>(
                <tr key={index}>
    
                  <th scope="row">{index+1}</th>
                  <td>
                      <a href={` /post/${posts._id}`} style={{textDecoration:'none'}}>
                      {posts.name}
                      </a>

                    </td>
                  <td>{posts.address}</td>
                  <td>{posts.contact}</td>
                  <td>{posts.age}</td>
                  <td>{posts.dob}</td>
                  <td>{posts.gender}</td>
                  <td>{posts.bloodtype}</td>
                  <td>
                    <a className="btn btn-warning" href= {`/edit/${posts._id}`}>
                      <i className="fas fa-edit"></i>&nbsp;Edit                    </a>
                    &nbsp;
                    <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(posts._id)}>
                      <i className="fas fa-trash-alt"></i>&nbsp;delete
                    </a>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <button className="btn btn-success"><a href="/add" style= {{textDecoration:'none', color:'white'}}>Create New Donors</a></button>
          &nbsp;
          <button type="button" className="btn btn-danger" style={{width:'250px',position:"absolute",

        right:"150px"}}><a href="#" onClick={() =>this.genPDF()} style={{textDecoration:'none', color:'white'}}> Download Donor Details</a></button>
        </div> 
    </div>
    )
  }
}



