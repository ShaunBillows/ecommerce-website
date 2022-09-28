import ReviewItem from "./ReviewItem";
import "./ReviewOrder.css";

const ReviewOrder = ({
  basket,
  setModalContent,
  handleIncrementBasket,
  handleDecrementBasket,
  getTotal,
  closeModal,
}) => {
  return (
    <div className="review-order-container">
      <button className="checkout-button" onClick={() => closeModal()}>
        back to shop
      </button>
      <h2>Review your order</h2>
      {basket.map((item, index) => (
        <ReviewItem
          key={index}
          item={item}
          handleDecrementBasket={handleDecrementBasket}
          handleIncrementBasket={handleIncrementBasket}
          getTotal={getTotal}
        />
      ))}
      <h3 className="total">total: {getTotal()}</h3>
      <button onClick={() => setModalContent("payment")}>go to payment</button>
    </div>
  );
};

export default ReviewOrder;
