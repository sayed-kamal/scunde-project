import React, { useRef, useState } from 'react'

export default function App() {

  const [todos, setTodos] = useState([]);

  let inputRef = useRef();

  function addItem() {
    let text = inputRef.current.value;
    setTodos([...todos, {text , Completed:false}]);
    inputRef.current.value = '';
  }
  function addDone(index) {

    let newItem = [...todos];

    newItem[index].Completed = !newItem[index].Completed;

    setTodos(newItem);
  }
  function deletItem(index) {
    let newItem = [...todos];
    newItem.splice(index, 1);
    setTodos(newItem)
  }
  return <>
   <div className="App">
    <div className="container">
      <h1>To Do Liste :-</h1>
        <ul>
          
          {todos.map((item,index) => {
            return (
              <div  key = {index}  className="items">
                <li className={item.Completed ? 'done' : ''} onClick={() => { addDone(index) }}>{item.text}</li>

                <span onClick={()=>{deletItem(index)} }>❌</span>
              </div>
              );
           
          })}
        </ul>
        <div className="butt">
      <input ref={inputRef} type="text" />
      <button onClick={addItem}>Add</button></div>
  </div>
</div>
  </>
}
