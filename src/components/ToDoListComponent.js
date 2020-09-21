import React, { Component } from "react";
import TodoItem from "./ToDoItemComponent";
import { ListGroupItemHeading } from "reactstrap";

export default class ToDoList extends Component {

    
    render() {
        const {items,clearList,handleDelete} =this.props;
        console.log("todolist****");
        console.log(items)
    
        return (
            <ul className="list-group my-5">
               <h3 className="text-capitalize text-center">  To Do 
               List</h3>

               {items.map(item=> {
                return (<TodoItem 
                 key={item.id}
                 title={item.title}
                 handleDelete={()=>handleDelete(item,id)}
                 />
                 );
              
                })}
         
                <button type="button" className="btn btn-danger
            btn-block text-capitalize mt-5"
            onClick={clearList}>
                    clearList
            </button>
            </ul>
        );
    }
}