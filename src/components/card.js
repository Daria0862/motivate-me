import React, { useState } from 'react';
import EditTask from '../modals/editTask'

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor: "#E0BBE4",
            secondaryColor: "#F9F1FA"
        },
        {
            primaryColor: "#957DAD",
            secondaryColor: "#EAE5EF"
        },
        {
            primaryColor: "#D291BC",
            secondaryColor: "#F6E9F2"
        },
        {
            primaryColor: "#FEC8D8",
            secondaryColor: "#FFF4F7"
        },
        {
            primaryColor: "#FFDFD3",
            secondaryColor: "#FFDFD3"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
    }


    return (
        <div class="card-wrapper mr-5">
            <div class="card-top" style={{ "background-color": colors[index % 5].primaryColor }}></div>
            <div class="task-holder">
                <span class="card-header" style={{ "background-color": colors[index % 5].secondaryColor, "border-radius": "10px" }}>{taskObj.Name}</span>
                <p className="mt-3">{taskObj.Description}</p>

                <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
                <i class = "far fa-edit mr-3" style={{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {() => setModal(true)}></i>
                <i class="fas fa-trash-alt" style = {{"color" : colors[index%5].primaryColor, "cursor" : "pointer"}} onClick = {handleDelete}></i>

                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj}/>
        </div>
    );
};

export default Card;