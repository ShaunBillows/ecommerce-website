import Modal from 'react-modal'
// import { useState} from 'react'
import "./CheckoutModal.css"
import ReviewOrder from '../checkout/ReviewOrder';
import Payment from "../checkout/Payment"


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

Modal.setAppElement(document.getElementById('root'));

const CheckoutModal = ({modalIsOpen, afterOpenModal, closeModal, basket, modalContent, getTotal, setModalContent, setBasket, handleRemoveItem, handleAddItem}) => {

    return (
        <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={() => afterOpenModal()}
          onRequestClose={() => closeModal()}
          style={customStyles}
          contentLabel="Checkout Modal"
          className="Modal"
          overlayClassName="Overlay"
        >
          <button onClick={() => closeModal()}>back to shop</button>
     
        {
            modalContent === 'review' 
            ?
            <ReviewOrder basket={basket} getTotal={getTotal} setModalContent={setModalContent} handleRemoveItem={handleRemoveItem} handleAddItem={handleAddItem}/> 
            :
            <div></div>
        }

        {
            modalContent === 'payment' 
            ?
            <Payment setModalContent={setModalContent} closeModal={closeModal} setBasket={setBasket}/> 
            :
            <div></div>
        }
        </Modal>
      </div>
    )
}

export default CheckoutModal