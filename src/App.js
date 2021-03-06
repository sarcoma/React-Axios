import React, { Component } from 'react';
import RequestJson from './Request';
import TaskColumns from './TaskColumns';

class App extends Component {
    constructor() {
        super();
        this.request = new RequestJson();
    }

    render() {
        return (
            <div className="App">
                <h1 className="f1 pb3 bb bw1">Tasks</h1>
                <TaskColumns/>
            </div>
        );
    }
}

export default App;
