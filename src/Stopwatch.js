import React, { Component } from 'react'

export default class Stopwatch extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            timer: 0
        };
    }
   
    Start = () => {
        this.timer = setInterval(
            () => this.task(),
            100,
        )
         document.getElementById('resume').disabled=false;
         document.getElementById('start').disabled=true;
        
    }
    task = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    Reset = () => {
        this.setState({
            count: 0
        })
        clearInterval(this.timer);
        document.getElementById('start').disabled=false;
    }

    Pause = () => {
        clearInterval(this.timer);
        document.getElementById('start').disabled=false;
       
    }

    Resume = () => {
        console.log("resume")
            this.Start();
    }

    render() {
        return (
            <div style={{ backgroundColor: 'white', padding: '8vw' }}>
                <div><h1>React Stopwatch</h1></div>
                <h1>{this.state.count}</h1>
                <div>
                    <button onClick={this.Start} id='start' >Start</button>
                    <button onClick={this.Pause}>Pause</button>
                    <button onClick={this.Start} id='resume'>Resume</button>
                    <button onClick={this.Reset}>Reset</button>
                </div>
            </div>
        )
    }
}
