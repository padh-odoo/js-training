/** @odoo-module **/
import { Component, useState} from "@odoo/owl";
import { Todo } from "../todo/todo";
import { useAutofocus } from "../utils";

export class Todo_List extends Component {
    static template = "owl_playground.todo_list";
    static components = { Todo };

    setup() {
        this.id=1;
        this.todolist = useState([]);
        useAutofocus("todoListInput");
    }

    addTodo(ev){
        if (ev.keyCode == 13 && ev.target.value != "") {
            this.todolist.push({ id: this.id++, description: ev.target.value, done: false });
            ev.target.value = "";
        }
    }

    toggleTodo(id){
        const todo = this.todolist.find((todo) => todo.id ===id);
        if (todo) {
            todo.done = !todo.done ;
        }
    }
    removeTodo(id) {
        const todoIndex = this.todolist.findIndex((todo) => todo.id === id);
        if (todoIndex >= 0) {
            this.todolist.splice(todoIndex, 1);
        }
    }

}
