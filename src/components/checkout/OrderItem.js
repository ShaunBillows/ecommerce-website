const OrderItem = ({item, handleAddItem, handleRemoveItem}) => {
    return (
        <div>
            <span>{item.name}</span>
            <span onClick={() => handleRemoveItem(item)}>-</span>
            {item.quantity}
            <div onClick={() => handleAddItem(item)}>+</div>
            <span>{item.price * item.quantity}</span>

        </div>
    )
}

export default OrderItem