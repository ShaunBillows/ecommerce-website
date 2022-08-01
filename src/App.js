import { useState, useEffect } from "react";
import Card from "./components/card/Card";
import SidebarContent from "./components/sidebar/Sidebar";
import "./App.css";
import SidebarIcon from "./components/sidebar-icon/SidebarIcon";
import CheckoutModal from "./components/modal/CheckoutModal"
import Search from "./components/Search"

const faker = require("faker");

const App = () => {

  const [shopItems, setShopItems] = useState([]);
  const [basket, setBasket] = useState([]);
  const [sidebar, setSidebar] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('review')

  // checkout modal functions

  function openModal() {
    setModalContent('review')
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  // header functions

  const getBasketItemNumber = () => {
    return basket.reduce((previousValue, currentValue) =>  previousValue + currentValue.quantity,0)
  }

  const handleChangeProduct = async (newProduct) => {
    await getShopItems(newProduct);
  };

  const getShopItems = async (item) => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${item}&client_id=a_QuiCYdhJR3n-SB10HVqHIsqTmiiCUjFX0cmzbvMXk`
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
    setSidebar(!sidebar);
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

  useEffect(() => {
    getShopItems("hammer");
  }, []);

  // useEffect(() => {
  //   getTotal();
  // }, [basket]);

  return (
    <>
      <div className={sidebar ? "sidebar open" : "sidebar"}>
        <SidebarContent
          basket={basket}
          handleRemoveItem={handleRemoveItem}
          handleAddItem={handleAddItem}
          handleShowSidebar={handleShowSidebar}
          getTotal={getTotal}
        />
      </div>

      <div className="body">
        <div className="content">
          <div className="header">
            <div className="heading-container">
              <h1>Hardware Store</h1>
            </div>
            <div className="cheackout-container">
              <div className="checkout-item checkout-icon" onClick={() =>{ openModal(); setSidebar(false);} }></div>
              <div className="checkout-item checkout-quantity">
                {getBasketItemNumber()}
              </div>
            </div>
            <div className="sidebar-toggle">
              <SidebarIcon handleShowSidebar={handleShowSidebar}/>
            </div>
          </div>

          <div className="products-container">
            <div
              className="product-item"
              onClick={() => handleChangeProduct("hammer")}
            >
              <h3>hammers</h3>
            </div>
            <br></br>
            <div
              className="product-item"
              onClick={() => handleChangeProduct("saw")}
            >
              <h3>saws</h3>
            </div>
            <br></br>
            <div
              className="product-item"
              onClick={() => handleChangeProduct("drill")}
            >
              <h3>drills</h3>
            </div>
            <div
              className="product-item"
              onClick={() => handleChangeProduct("chainsaw")}
            >
              <h3>chainsaw</h3>
            </div>
            <div
              className="product-item"
              onClick={() => handleChangeProduct("toolbox")}>
              <h3>toolbox</h3>
            </div>
            <Search handleChangeProduct={handleChangeProduct}/>
          </div>

          <div className="cards-container">
            {shopItems.map((item, i) => (
              <Card item={item} handleAddBasket={handleAddBasket} key={i} />
            ))}
          </div>
        </div>

        <CheckoutModal modalIsOpen={modalIsOpen} closeModal={closeModal} basket={basket} modalContent={modalContent} getTotal={getTotal} setModalContent={setModalContent} setBasket={setBasket} handleAddItem={handleAddItem} handleRemoveItem={handleRemoveItem}/>

      </div>
    </>
  );
};

export default App;
