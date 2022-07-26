
const BasketItem = ({ item, handleRemoveItem }) => {
    return (
        <>
            <h6>{item.image.slice(30,40)} {item.quantity}</h6>
            <button type="button" onClick={ () => handleRemoveItem(item) }>Click Me!</button>
        </>
    )
}

export default BasketItem