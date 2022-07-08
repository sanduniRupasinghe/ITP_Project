import React, {Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import CreateDonors from './components/CreateDonors';
import EdidDonors from './components/EditDonors';
import Home from './components/Home';
import NavBar from './components/NavBar';
import DonorDetails from './components/DonorDetails';
import AddStock from './components/AddStock';
import StockHome from './components/StockHome';
import EditStock from './components/EditStock';
import StockDetails from './components/StockDetails';


export default class App extends Component{

  render(){
    return(
      <BrowserRouter>
      <div className="container">
        
        <NavBar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={CreateDonors}></Route>
        <Route path="/edit/:id" exact component={EdidDonors}></Route>
        <Route path="/post/:id" exact component={DonorDetails}></Route>

        <Route path="/addStock"  component={AddStock}></Route>
        <Route path="/stockhome"  component={StockHome}></Route>
        <Route path="/editstock/:id" exact component={EditStock}></Route>
        <Route path="/stocks/:id" exact component={StockDetails}></Route>

      </div>
      </BrowserRouter>
    )
  }
}