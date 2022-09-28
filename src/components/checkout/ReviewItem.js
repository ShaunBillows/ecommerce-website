import "./ReviewItem.css";

const ReviewItem = ({ item, handleIncrementBasket, handleDecrementBasket }) => {
  return (
    <div className="review-item-container">
      <span className="item-name">{item.name}</span>
      <span className="total-cont">£{item.price * item.quantity}</span>
      <span className="quantity"></span>
      <span className="plus-minus" onClick={() => handleDecrementBasket(item)}>
        -
      </span>
      {item.quantity}
      <div className="plus-minus" onClick={() => handleIncrementBasket(item)}>
        +
      </div>
    </div>
  );
};

export default ReviewItem;
