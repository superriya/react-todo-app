import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  function deleteHandler() {
    // console.log("clicked");
    // console.log(props.text);
    setmodalIsOpen(true);
  }

  function closeModalHandler() {
    setmodalIsOpen(false);
  }

  function confirmModalHandler() {
    setmodalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancle={closeModalHandler} onConfirm={confirmModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancle={closeModalHandler} />}
    </div>
  );
}

export default Todo;
