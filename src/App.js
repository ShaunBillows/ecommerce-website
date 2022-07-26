import { useState, useEffect } from "react"
import Card from "./components/card/Card"
import BasketItem from "./components/basket-item/basket-item"
import './App.css' 
const faker = require('faker');

const App = () => {

    const [ shopItems, setShopItems ] = useState([])
    const [ basket, setBasket ] = useState([])
    const [ sidebarShown, setSidebarShown ] = useState([])

    const showSidebar = () => {
        
    }

    const getShopItems = async () => {
        try {
            const response = await fetch("https://api.unsplash.com/search/photos?query=hammer&client_id=a_QuiCYdhJR3n-SB10HVqHIsqTmiiCUjFX0cmzbvMXk")
            const data = await response.json()
            setShopItems( data.results.map( el => {
                return {
                    image: el.urls.raw,
                    price: faker.commerce.price(),
                    quantity: 1,
                }
            }))
        }
        catch(err) {
            console.log(err)
        }
    }

    const handleAddBasket = (item) => {
        const find = basket.find( el => el.image === item.image )
        if (find) {
            setBasket(
                [...basket].map( el => 
                    el.image === item.image ? { ...item, quantity: el.quantity + 1 } : el
                )
            )
        } else {
            setBasket(
                [ ...basket, item ]
            )
        }
    }


    const handleRemoveItem = (item) => {
        const shoppingCart = [...basket]
        const find = shoppingCart.find( el => el.image === item.image)
        if (find.quantity !== 1) {
            setBasket(
                shoppingCart.map( el => 
                    el.image === item.image ? { ...item, quantity: el.quantity - 1 } : el
                    )
            )
        } else {
            setBasket(
                shoppingCart.filter( el => el !== item )
            )
        }
    }
 
    useEffect( () => {
        getShopItems()
    }, [] )

    return (
        
        <div className="body">

            <div className="sidebar" contenteditable>

            {basket.map( (item, i)=> 
                <BasketItem item={item} handleRemoveItem={handleRemoveItem} key={i}/>
                )}

            </div>
            <div className="content" contenteditable>


            <div className="cards-container">
                {shopItems.map( (item, i) => 
                                    <Card item={item} handleAddBasket={handleAddBasket} key={i}/> 
                                )}
            </div>

        </div>
      

        </div>
  
    )
}

export default App