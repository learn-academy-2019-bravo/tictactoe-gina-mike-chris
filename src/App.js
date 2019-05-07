import React, {Component} from 'react';
import './App.css';
import Board from './board'
import Square from './square'

class App extends Component {
    constructor(props) {
        super (props)


    }

    render () {
        return (
            <div className = 'App'>
                <Board />
            </div>
        );
    }
}

export default App;
