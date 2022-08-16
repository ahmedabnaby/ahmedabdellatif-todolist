import React from "react";

const Display = (props) =>{

    const {toDoList, setToDoList} = props;

    const deleteByListId = (idFromBelow) =>{
        setToDoList(toDoList.filter((list, index) => list.id !== idFromBelow))
    }
    
    return(
    <div>
        <h1>To Do List:</h1>
        {
            toDoList.map((list, index) => (
                <div key = {index}>
                    <p>Title: {list.title}</p>
                    
                    <label>Done?</label>
                    <input type="checkbox"/>

                    <button onClick={() => deleteByListId(list.id)}>Delete</button>
                </div>
            ))
        }
    </div>
    )

}

export default Display;