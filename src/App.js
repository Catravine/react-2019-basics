import React, {useState} from 'react';
import './App.scss';
import NameTag from './components/nameTag';

const initialNames = [
  {firstName: "john", lastName: "johnson"},
  {firstName: "peter", lastName: "peterson"},
  {firstName: "jill", lastName: "jillson"},
]

function App() {
  const [names, setNames] = useState(initialNames)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        <NameTag firstName={names[0].firstName} lastName={names[0].lastName} />
        <NameTag firstName={names[1].firstName} lastName={names[1].lastName} />
        <NameTag firstName={names[2].firstName} lastName={names[2].lastName} />
      </header>
    </div>
  );
}

export default App;
