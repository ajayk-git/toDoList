import React,{ Component } from "react";

import TodoItem from "./ToDoItemComponent";
export default class ToDoList extends Component{
    render(){
    return ( 
        <ul className="list-group my-5">
            <h3  className="form-control text-capitalize">To Do List</h3>
        </ul>);
}
}