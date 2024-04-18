import "./Modal.css";

const Modal = ({ closeModal, selectedCard }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__container">
        <h2 className="modal__title">{selectedCard.title}</h2>
        <p className="modal__text">{selectedCard.text}</p>
        <img className="modal__img" src={selectedCard.imgSrc} />
      </div>
    </div>
  );
};

export default Modal;
