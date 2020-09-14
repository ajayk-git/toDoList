import React,{ Component } from 'react';
import './App.css';
import ToDoInput from './components/ToDoInputComponent';
import ToDoList from './components/ToDoListComponent';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render()
  {return (

    <div className="container">
    <div className="row">
    <div className="col-10 mx-auto coo-md-8 mt-4">
      <h3 className='text-capitalize text-center'>todo input</h3>
    <ToDoInput/>
      <ToDoList/> 
      </div>
      </div>
    </div>
  );
}
}
export default App;
