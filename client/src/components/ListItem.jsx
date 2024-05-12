import { useState } from "react";
import TickIcon from "./TickIcon.jsx";
// import LinearProgress from '@mui/material/LinearProgress';
import Modal from "./Modal.jsx";
// require('dotenv').config();

function ListItem({ task, getData }) {
  // let progress=40;

  const [showModal, setShowModal] = useState(false);
  const deleteItem=async()=>{
    try{
      const response=await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`,{
        method:"DELETE"
      });
      if(response.status===200){
        getData();
      }
    }
    catch(err){
      console.error(err);
    }
  }
  return (
    <li className="list-item">
      <div className="info-container">
        <TickIcon />
        <p className="task-title">{task.title}</p>
        {/*<LinearProgress variant="determinate" value={progress} />*/}
      </div>

      <div className="button-container">
        <button className="edit" onClick={() => setShowModal(true)}>
          Edit
        </button>
        <button className="delete" onClick={deleteItem}>Delete</button>
      </div>
      {showModal && (
        <Modal
          mode={"edit"}
          setShowModal={setShowModal}
          getData={getData}
          task={task}
        />
      )}
    </li>
  );
}

export default ListItem;
