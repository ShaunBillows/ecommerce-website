import { useState, useEffect } from "react";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import CheckoutModal from "./components/checkout/CheckoutModal"
import Header from "./components/header/Header"
import Products from "./components/header/Products"
import Shop from "./components/shop/Shop"

const App = () => {

  const faker = require("faker");

  const [ shopItems, setShopItems ] = useState([]);
  const [ basket, setBasket ] = useState([]);
  const [ sidebarIsOpen, setSidebar ] = useState(false);
  const [ modalIsOpen, setModal ] = useState(false);
  const [ modalContent, setModalContent ] = useState("review")
  const [ currPage, setPage ] = useState(1)
  const [ searchItem, setSearchItem ] = useState("hammer")

  useEffect(() => {
    getShopItems(searchItem);
  }, []);

  // next page functions

  const handleIncrementPage = async () => {
    await setPage( () => currPage + 1 ) 
    await getShopItems(searchItem, currPage)
  }

  const handleDecrementPage = async () => {
    await setPage( () => currPage - 1 ) 
    await getShopItems(searchItem, currPage)
  }

  // checkout modal functions

  function openModal() {
    setModalContent('review')
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  // header functions

  const getBasketItemNumber = () => {
    return basket.reduce((previousValue, currentValue) =>  previousValue + currentValue.quantity, 0)
  }

  const handleChangeProduct = async (newProduct) => {
    setSearchItem(newProduct)
    setPage(1)
    await getShopItems(newProduct);
  };

  const getShopItems = async (item, page=1) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?client_id=a_QuiCYdhJR3n-SB10HVqHIsqTmiiCUjFX0cmzbvMXk&query=${item}&per_page=12&page=${page}`
      );
      const data = await response.json();
      setShopItems(
        data.results.map((el) => {
          return {
            image: el.urls.thumb,
            price: faker.commerce.price(),
            quantity: 1,
            name: el.alt_description,
          };
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  // shared functions

  const getTotal = () => {
    return [...basket].reduce((prev, next) => prev + next.price * next.quantity, 0)
  };

  // sidebar functions

  const handleShowSidebar = () => {
    setSidebar(!sidebarIsOpen);
  };

  const handleAddBasket = (item) => {
    const find = basket.find((el) => el.image === item.image);
    if (find) {
      setBasket(
        [...basket].map((el) =>
          el.image === item.image ? { ...item, quantity: el.quantity + 1 } : el
        )
      );
    } else {
      setBasket([...basket, item]);
    }
  };

  // basket functions 

  const handleRemoveItem = (item) => {
    const find = [...basket].find((el) => el.image === item.image);
    if (find.quantity !== 1) {
      setBasket(
        [...basket].map((el) =>
          el.image === item.image ? { ...item, quantity: el.quantity - 1 } : el
        )
      );
    } else {
      setBasket([...basket].filter((el) => el !== item));
    }
  };

  const handleAddItem = (item) => {
    setBasket(
      [...basket].map((el) =>
        el.image === item.image ? { ...el, quantity: el.quantity + 1 } : el
      )
    );
  };

  return (
    <>
          <Sidebar
            sidebarIsOpen={sidebarIsOpen}
            basket={basket}
            handleRemoveItem={handleRemoveItem}
            handleAddItem={handleAddItem}
            handleShowSidebar={handleShowSidebar}
            getTotal={getTotal}
          />
        <div className="content">
          <Header 
            openModal={openModal} 
            setSidebar={setSidebar} 
            getBasketItemNumber={getBasketItemNumber} 
            handleShowSidebar={handleShowSidebar}
          />

          <Products 
          handleChangeProduct={handleChangeProduct} 
          searchItem={searchItem}
          />
          <Shop 
            handleAddBasket={handleAddBasket} 
            handleDecrementPage={handleDecrementPage} 
            handleIncrementPage={handleIncrementPage} 
            basket={basket} 
            currPage={currPage} 
            shopItems={shopItems}
          />
        </div>
        <CheckoutModal 
            modalIsOpen={modalIsOpen} 
            closeModal={closeModal} 
            basket={basket} 
            modalContent={modalContent} 
            getTotal={getTotal} 
            setModalContent={setModalContent} 
            setBasket={setBasket} 
            handleAddItem={handleAddItem} 
            handleRemoveItem={handleRemoveItem}
          />
    </> 
  );
};

export default App;