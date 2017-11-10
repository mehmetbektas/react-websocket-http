import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WebSocketHttp from './index.jsx'

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      message:""
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input name="test" type="text" value={this.state.message}/>
        <button onClick={() => this.sendMessage()}>Send Message</button>
        <WebSocketHttp url="http://localhost:8080/websocket-server"
                   senderPath="/send-message"
                   listenerPath="/listen-message"
                   onMessage={(message) => this.onMessage(message)}
                   ref={WebSocketHttp => {this.refWebSocketHttp = WebSocketHttp}}/>
      </div>
    );
  }

  onMessage(message){
    debugger;
  }

  sendMessage(){
    let user = "web client"
    this.refWebSocketHttp.sendMessage(message);
  }
}

export default App;
