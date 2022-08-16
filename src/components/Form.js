import React, {useState} from "react";

const Form = (props) => {

    const {toDoList, setToDoList} = props;

    const [title, setTitle] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();

        setToDoList([...toDoList, {
            title: title,
            id: Math.floor(Math.random() * 10000).toString(),
            markedDelete: false
        }])

        setTitle("");
    }

    return(
    <div>
        <form onSubmit = {submitHandler}>
            <label>Title</label>
            <input onChange = {(e) =>{
                setTitle(e.target.value);
            }}
            value = {title}
            name= "title"
            type = "text"
            />

            <input className = "submitButton" type="submit" value="Add to List!"/>
        </form>
    </div> 
    )

}

export default Form;