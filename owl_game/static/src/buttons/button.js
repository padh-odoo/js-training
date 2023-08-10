/** @odoo-module **/
import { Component,useState } from "@odoo/owl";

export class Rock extends Component{

    static template="owl_game.rock";

    stateuser=useState({value:0});
    statebot=useState({value:0});
    Rock(){
        const li=["Rock","Paper","Scissor"];
        let bot=li[Math.floor(Math.random() * 3)];
        console.log(bot)
        if (bot === "Paper"){
            this.statebot.value++
        }
        else if (bot === "Rock"){

        }
        else {
            this.stateuser.value++
        }

    }

    Paper(){
        const li=["Rock","Paper","Scissor"];
        let bot=li[Math.floor(Math.random() * 3)];
        console.log(bot);
        if (bot === "Paper"){
            

        }
        else if (bot === "Rock"){
            this.stateuser.value++
        }
        else {
            this.statebot.value++
        }
    }

    Scissor(){
        const li=["Rock","Paper","Scissor"];
        let bot=li[Math.floor(Math.random() * 3)];
        console.log(bot)
        if (bot === "Paper"){
            this.stateuser.value++
        }
        else if (bot === "Rock"){
            this.statebot.value++
        }
        else {

        }
    }


}

