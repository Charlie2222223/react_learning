import { useState } from 'react';
import './App.css';
import { DisplayName } from './DisplayName';

function App() {
  const [name, setName] = useState("");
  const [array, setArray] = useState(["Charlie","柴川","aaaaa"]);
  console.log(array.map(v => (v + "さん")));

  return (
    <div className="App">
      <h1 className='heading'>hello,world!</h1>
      <input type="text" placeholder='名前を入力' value={name}
      onChange={e => {
        setName(e.target.value)
      }}
      />
      <input type="button" value={"追加"}
      onClick={() => {
        if (name == ""){
          return
        }
        setArray([...array,name])
        setName("")
      }}
      />
      <DisplayName userName="柴川" />
      {array.map(function (v,i) {
          return(
            <DisplayName userName={v} key={i}/>
          )
      })}
    </div>
  );
}

export default App;