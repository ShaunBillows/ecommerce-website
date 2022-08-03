import OrderItem from "../checkout/OrderItem"

const ReviewOrder = ({basket, setModalContent, handleIncrementBasket, handleDecrementBasket, getTotal}) => {
    return (
        <div>
        <h2>Review your order</h2>
        {basket.map(item => 
            <OrderItem item={item} handleDecrementBasket={handleDecrementBasket} handleIncrementBasket={handleIncrementBasket} getTotal={getTotal}/>
        )}
        <h3>total: {getTotal()}</h3>
        <button onClick={() => setModalContent('payment')}>go to payment</button>
        </div>
    )
}

export default ReviewOrder