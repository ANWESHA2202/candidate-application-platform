const Modal = ({ open, handleClose, modalContent }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <h1>Job Description</h1>
      <h3>About Company</h3>
      <div>{modalContent}</div>
    </Modal>
  );
};

export default Modal;
