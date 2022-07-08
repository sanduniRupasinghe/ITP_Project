import React, {Component} from 'react';
import logo from './donor.png';
import logos from './blood.png';

export default class NavBar extends Component{

  render(){
    
      return(
        <div>
           <nav className="navbar navbar-light bg-light">
              <form className="container-fluid justify-content-start">

              
              <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
             <a className ="nav-link" aria-current="page" href="http://localhost:3000/"><b>DONORS</b></a>
             

      
             <img src={logos} alt="" width="28" height="28" class="d-inline-block align-text-top"/>
             <a className ="nav-link" aria-current="page" href="http://localhost:3000/stockhome"><b>BLOOD STOCK</b></a>

            </form>
             
          </nav>
  
        </div>
      )
    }
  }