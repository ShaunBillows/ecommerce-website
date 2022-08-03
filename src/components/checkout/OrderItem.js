const OrderItem = ({item, handleIncrementBasket, handleDecrementBasket}) => {
    return (
        <div>
            <span>{item.name}</span>
            <span onClick={() => handleDecrementBasket(item)}>-</span>
            {item.quantity}
            <div onClick={() => handleIncrementBasket(item)}>+</div>
            <span>{item.price * item.quantity}</span>

        </div>
    )
}

export default OrderItem