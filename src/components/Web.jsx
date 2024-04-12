import React, {useState} from "react";
import ToDoItem from "./ToDoItem";

function App() {

  const [listItem, setListItem] = useState([]);
  const [task, setTask] = useState("");
 

  function handleChange(e) {
    setTask(e.target.value);
    }

    function addItems () {
      setListItem(prev => {
        return [...prev, task];
      })

      setTask("");
    };

    function handleDelete(id) {
      console.log(id);
      setListItem(prev => {
        return prev.filter ((item, index) => {
          return index !== id;
        });
      });
    }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
        <div className="form">
          <input
            type="text" name="item"
            placeholder="Add task"
            onChange={handleChange}
            value={task} />
          <button onClick={addItems}>
            <span>Add</span>
          </button>
        </div>
      <div>
        <ul>
          {listItem.map((item, index) => 
           <ToDoItem
           key={index}
           id={index}
           text={item}
           onChecked={handleDelete}
           />
           )}
        </ul>
      </div>
    </div>
  );
}

export default App;
