import "./Modal.css";

const Modal = ({ closeModal, handleSelectedCard }) => {
  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal__container">
        <h2 className="modal__title">Title</h2>
        <p className="modal__text">
          about content here dsd grgh yutioeru vdjhrwe ferslhfeh hjlfhes fesh h
          efs f fdsakjkfds rew rnfds kjas aaa bbb wwewqr kdfdsf dfsa r e qw
          fdsfg nmngtmopj kljyt oupiyt gfd csa
        </p>
        <img
          className="modal__img"
          src={
            "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_640.jpg"
          }
        />
      </div>
    </div>
  );
};

export default Modal;
