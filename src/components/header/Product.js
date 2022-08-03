const Product = ({ item, handleChangeProduct }) => {
    return (
        <div className="product-item" onClick={() => handleChangeProduct(item)}>
            <h3>{item}</h3>
        </div>
    )
}

export default Product