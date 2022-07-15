import React from 'react';
import './App.css';
import CryptoStreamer from './CryptoStreamer'

export default class App extends React.Component {
    render() {
      return (
        <div className="App">
          <CryptoStreamer />
        </div>
      );
    }
}
