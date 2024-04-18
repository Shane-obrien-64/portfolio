import "./Modal.css";

const Modal = ({ closeModal, selectedCard }) => {
  const handleLink = () => {};
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__container">
        <div className="modal__header">
          <h2 className="modal__title">{selectedCard.title}</h2>
          <a href={selectedCard.link} target="_blank">
            <img
              src={selectedCard.logoSrc}
              className="modal__logo"
              alt={`${selectedCard.title} Logo`}
            />
          </a>
        </div>
        <p className="modal__text">{selectedCard.text}</p>
        <p className="modal__text modal__text_bold">
          Tech: {selectedCard.tech}
        </p>
        <a href={selectedCard.link} target="_blank">
          <img className="modal__img" src={selectedCard.imgSrc} />
        </a>
      </div>
    </div>
  );
};

export default Modal;
