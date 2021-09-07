function Modal(props) {
  function cancleHandler() {
    props.onCancle();
  }
  function confirmHandler() {
    props.onConfirm();
  }
  return (
    //   overlay-cpmponent
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={cancleHandler}>
        Cancle
      </button>
      <button className="btn" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
