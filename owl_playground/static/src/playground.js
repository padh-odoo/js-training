/** @odoo-module **/

import { Component} from "@odoo/owl";
import {Counter} from "./counter/counter";
import { Todo_List } from "./todo_list/todo_list";
import { Card } from "./card/card";
import { Navbar } from "./navbar/navbar";

export class Playground extends Component {
    static template = "owl_playground.playground";
    static components = { Counter,Todo_List,Card,Navbar}; 
}