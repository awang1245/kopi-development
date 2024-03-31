import "./App.css";
import ItemCard from "./ItemCard";
import coffeeData from "../src/ItemData.json";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";

export interface ItemData {
  name: string;
  path: string;
  display: string;
  notes: string[];
  price: string;
  roast: string;
  type: string;
  origin?: string;
  flavor: string[];
  color: string;
}

function App() {
  const [displayItems, setDisplayItems] = useState<ItemData[]>(
    coffeeData.items
  );
  const [cart, setCart] = useState<ItemData[]>([]);
  const [headerColor, setHeaderColor] = useState<string>("");
  const [cartCount, setCartCount] = useState<{
    [key: string]: { cartItem: ItemData; quantity: number };
  }>({});

  useEffect(() => {
    //nothing for now
    //setDisplayItems for filtering
  }, []);

  useEffect(() => {
    console.log("cart");
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    console.log("cart count");
    console.log(cartCount);
  }, [cartCount]);

  const onRemove = (item: ItemData) => {
    const newCartCount = { ...cartCount };
    delete newCartCount[item.name];
    setCartCount(newCartCount);

    const newCart = cart.filter(
      (cartItem: ItemData) => cartItem.name !== item.name
    );
    setCart(newCart);
  };

  const addToCart = (item: ItemData) => {
    setCart([...cart, item]);

    setCartCount((prevCartCount) => ({
      ...prevCartCount,
      [item.name]: {
        cartItem: item,
        quantity: (prevCartCount[item.name]?.quantity || 0) + 1,
      },
    }));
  };

  const removeFromCart = (item: ItemData) => {
    const newCart = [...cart];
    const index = cart.findIndex((value: ItemData) => value.name === item.name);
    newCart.splice(index, 1);
    setCart(newCart);

    if (cartCount[item.name].quantity > 1) {
      setCartCount((prevCartCount) => ({
        ...prevCartCount,
        [item.name]: {
          cartItem: item,
          quantity: prevCartCount[item.name]?.quantity - 1,
        },
      }));
    } else {
      onRemove(item);
    }
  };

  return (
    <article className="site-content">
      <header
        className="header"
        style={{
          backgroundColor:
            headerColor === "" ? "white" : `var(--${headerColor})`,
        }}
      >
        <div className="logo">
          <div className="brand-name">
            <div className="mixed">K</div>OP<div className="mixed">I</div>
          </div>
          <div className="sub-name">
            organic <br />
            roastery
          </div>
        </div>
        <nav className="nav-bar">
          <ul className="nav-links">
            <li>
              <a>COFFEE</a>
            </li>
            <li>
              <a>SUBSCRIBE</a>
            </li>
            <li>
              <a>LEARN</a>
            </li>
            <li>
              <a>LOCATE</a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="main-content">
        <div className="items">
          <div className="items-header">all coffee</div>
          <div className="item-listings">
            {displayItems.map((item, index) => (
              <ItemCard
                item={item}
                index={index}
                setHeaderColor={setHeaderColor}
                addToCart={addToCart}
                // setCart={setCart}
                // setCartCount={setCartCount}
              />
            ))}
          </div>
        </div>
        <div className="cart">
          <div className="cart-header">{`my cart (${cart.length})`}</div>
          <div className="cart-listings">
            {Object.keys(cartCount).map((name, index) => (
              <CartItem
                item={cartCount[name].cartItem}
                quantity={cartCount[name].quantity}
                index={index}
                setHeaderColor={setHeaderColor}
                onRemove={onRemove}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
              />
            ))}
          </div>
          <div className="cart-total">
            <div className="subtotal-row">
              <div>SUBTOTAL</div>
              <div>
                {"$"}
                {cart
                  .reduce(
                    (currTotal, item) => currTotal + parseInt(item.price),
                    0
                  )
                  .toFixed(2)}
              </div>
            </div>
            <button className="checkout-button">checkout</button>
          </div>
        </div>
      </main>
    </article>
  );
}

export default App;
