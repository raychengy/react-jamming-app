import React, { Component } from 'react';

import './styles/reset.css';
import JammingContainer from './containers/JammingContainer';

class App extends Component {
    render() {
        return (
            <div>
                <h1>Ja<span className="highlight">mmm</span>ing</h1>
                <JammingContainer />
            </div>
        );
    }
}

export default App;