import React,{ Component } from 'react';
import './App.css';
import ToDoInput from './components/ToDoInputComponent';
import ToDoList from './components/ToDoListComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import {v1 as uuid} from "uuid"; 
class App extends Component {
  
  state={
items:[],
id:uuid(),
item:"",
editItem:false

  }

  handleChange= (e)=>{
    this.setState({
      item:e.target.value
    });
  };

  handleSubmit=(e)=>{

 e.preventDefault();
 const newItem={

  id:this.state.id,
  title:this.state.item
 }

 console.log(newItem);
 const updatedItems=[...this.state.items,newItem];

 this.setState=({
   items:updatedItems,
   item:"",
   id:uuid(),
   editItem:false
 })


  };
  
  render()

  {return (

    <div className="container">
    <div className="row">
    <div className="col-10 mx-auto coo-md-8 mt-4">
      <h3 className='text-capitalize text-center'>todo input</h3>
    
    <ToDoInput  item={this.state.item} 
    handleChange={this.handleChange}
    handleSubmit={this.handleSubmit}
    />

      <ToDoList items={this.state.items}/> 
      </div>
      </div>
    </div>
  );
}
}
export default App;
