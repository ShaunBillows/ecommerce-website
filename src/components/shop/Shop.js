import Card from "./Card"

const Shop = ({handleAddBasket, handleDecrementPage, handleIncrementPage, basket, currPage, shop}) => {
    return (
        <div>
            
            { basket ? <div></div>: <h3>Oops, no items found...</h3>}
          <div className="cards-container">
            {shop.map((item, i) => (
              <Card item={item} handleAddBasket={handleAddBasket} key={i} />
            ))}
            <div></div>
            <div></div>
            <div></div>

            <div className="scroll-buttons-container">
              { currPage !== 1 ? <div className="scroll-button-left" onClick={() => handleDecrementPage()}></div> : <div></div> }        
              <div className="scroll-button-right" onClick={() => handleIncrementPage()}></div>
            </div>
          </div>

        </div>
    )
}

export default Shop