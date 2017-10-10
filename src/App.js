import React, { Component } from 'react';
import './App.css';
import ReactLogo from './logo.svg';
import TodoList from './TodoList';
import { reducer, actionCreators } from './redux';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const CloverLogo = 'http://hillhouseconstruction.com/wp-content/uploads/2015/12/Clover.png'
const store = createStore(reducer)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={CloverLogo} className="App-logo spinning" alt="logo" />
            <img src={ReactLogo} className="App-logo spinning" alt="logo" />
            <h1 className="App-title">Welcome to the React/Redux Clover Crash Course</h1>
          </header>
          <section className="gifs">
            <TodoList />
          </section>
        </div>
      </Provider>
    );
  }
}



export default App;
