import Modal from "./Modal";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
function ListHeader({ listName }) {
  const[showModal,setShowModal]=useState(false)
  function signOut() {
    console.log("Sign out");
  }
  return (
    <div className="list-header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create" onClick={()=>setShowModal(true)}>ADD NEW</button>
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
      <Modal mode={'create'}/>
    </div>
  );
}

export default ListHeader;
