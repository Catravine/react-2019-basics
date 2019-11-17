import React, {useState} from 'react';
import './App.scss';
import NameTag from './components/nameTag';

const initialNames = [
  {firstName: "john", lastName: "johnson"},
  {firstName: "peter", lastName: "peterson"},
  {firstName: "jill", lastName: "jillson"},
  {firstName: "mary", lastName: "scary"},
]

function App() {
  const [names, setNames] = useState(initialNames)
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="name title">Names List</h1>
        {
          names.map( (v, i) => {
            return <NameTag
              key={`${i}${v.firstName}${v.lastName}`}
              firstName={v.firstName}
              lastName={v.lastName}
            />;
          })
        }
      </header>
    </div>
  );
}

export default App;
