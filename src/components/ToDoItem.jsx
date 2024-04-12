import React from 'react'

const ToDoItem = (props) => {
    // const [clicked, setClicked] = useState(false);

    return (
        <div onClick={() => {
            props.onChecked(props.id)
        }}>
            <li>
                {props.text}
            </li>
        </div>
    )
}

export default ToDoItem;
