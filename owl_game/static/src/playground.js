/** @odoo-module **/

import { Component} from "@odoo/owl";
import {Counter} from "./counter/counter";
import { Rock } from "./buttons/button";
import { Result } from "./result/result";
import { Score } from "./score/score";

export class Playground extends Component {
    static template = "owl_game.playground";
    static components = { Counter,Rock,Result,Score}; 
}