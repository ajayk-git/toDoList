import React, { Component } from "react";
import TodoItem from "./ToDoItemComponent";

export default class ToDoList extends Component {
    render() {
        const {items} =this.props;

        const itemList=items.map(item=> {
            return <TodoItem key={item.id}
                 title={item.title} />
         
        })
        return (
            <ul className="list-group my-5">
               <h3 className="text-capitalize text-center">  To Do List</h3>
        {itemList}
        
                <button type="button" className="btn btn-danger
            btn-block text-capitalize mt-5">
                    clearList
            </button>
            </ul>
        );
    }
}