import Card from "./card/Card"

const ShopItems = ({handleAddBasket, handleDecrementPage, handleIncrementPage, basket, currPage, shopItems}) => {
    return (
        <div>
            
            { basket ? <div></div>: <h3>Oops, no items found...</h3>}
          <div className="cards-container">
            {shopItems.map((item, i) => (
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

export default ShopItems