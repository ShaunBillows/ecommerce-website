import "./CheckoutModal.css";
import Modal from "react-modal";
import ReviewOrder from "../checkout/ReviewOrder";
import Payment from "../checkout/Payment";

const CheckoutModal = ({
  modalIsOpen,
  // afterOpenModal,
  closeModal,
  basket,
  modalContent,
  getTotal,
  setModalContent,
  setBasket,
  handleDecrementBasket,
  handleIncrementBasket,
}) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: "100%",
      maxWidth: "500px",
      padding: "1rem",
    },
  };

  Modal.setAppElement(document.getElementById("root"));

  return (
    <Modal
      isOpen={modalIsOpen}
      // onAfterOpen={() => afterOpenModal()}
      onRequestClose={() => closeModal()}
      style={customStyles}
      contentLabel="Checkout Modal"
      className="Modal"
      overlayClassName="Overlay"
      closeModal={closeModal}
    >
      {modalContent === "review" ? (
        <ReviewOrder
          basket={basket}
          getTotal={getTotal}
          setModalContent={setModalContent}
          handleDecrementBasket={handleDecrementBasket}
          handleIncrementBasket={handleIncrementBasket}
          closeModal={closeModal}
        />
      ) : (
        <div></div>
      )}
      {modalContent === "payment" ? (
        <Payment
          setModalContent={setModalContent}
          closeModal={closeModal}
          setBasket={setBasket}
        />
      ) : (
        <div></div>
      )}
    </Modal>
  );
};

export default CheckoutModal;
