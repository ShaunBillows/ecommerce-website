import "./basket-item.css";

const BasketItem = ({ item, handleRemoveItem, handleAddItem }) => {
  return (
    <div className="basket-item">
      <div
        className="image-container"
        style={{
          backgroundImage: `url(${item.image}
          )`,
        }}
      ></div>

      <div className="discription">{item.name}</div>

      <div className="cart-functions-container">
        <div className="remove-btn">
          <button type="button" onClick={() => handleRemoveItem(item)}>
            -
          </button>
        </div>
        <div className="quantity">{item.quantity}</div>
        <div className="add-btn">
          <button type="button" onClick={() => handleAddItem(item)}>
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasketItem;
