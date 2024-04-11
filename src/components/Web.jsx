import React, {useState} from "react";

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
          {listItem.map(item => <li>{ item }</li> )}
        </ul>
      </div>
    </div>
  );
}

export default App;
