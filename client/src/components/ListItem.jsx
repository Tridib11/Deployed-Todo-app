import { useState } from "react";
import TickIcon  from "./TickIcon.jsx";
// import LinearProgress from '@mui/material/LinearProgress';
import Modal from "./Modal.jsx";

function ListItem({task}) {
    // let progress=40;

    const[showModal,setShowModal]=useState(false)
    return (
        <li className="list-item">
            <div className="info-container">
                <TickIcon/>
                <p className="task-title">{task.title}</p>
                {/*<LinearProgress variant="determinate" value={progress} />*/}
            </div>

            <div className="button-container">
                <button className="edit" onClick={()=>setShowModal(true)}>Edit</button>
                <button className="delete">Delete</button>
            </div>
            {showModal && <Modal mode={'edit'} setShowModal={setShowModal} task={task}/>}
        </li>
    )
}

export default ListItem
