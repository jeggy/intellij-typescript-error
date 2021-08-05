import React from 'react';
import logo from './logo.svg';
import './App.css';

const T: React.FC<{ name: string }> = (props) => (
  <span>{props.name2}</span>
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <T name="Hello" />
      </header>
    </div>
  );
}

export default App;
