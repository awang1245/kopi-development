import "./styles/App.css";
import ItemCard from "./components/ItemCard";
import coffeeData from "../src/ItemData.json";
import { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import FilterDropdown from "./FilterDropdown";

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
  const [type, setType] = useState<string[]>([]);
  const [roast, setRoast] = useState<string[]>([]);
  const [flavor, setFlavor] = useState<string[]>([]);
  const [origin, setOrigin] = useState<string[]>([]);

  useEffect(() => {
    console.log(flavor);
  }, [flavor]);

  useEffect(() => {
    console.log(origin);
  }, [origin]);

  useEffect(() => {
    let newDisplayItems: ItemData[] = coffeeData.items;

    if (type.length > 0) {
      newDisplayItems = newDisplayItems.filter((item: ItemData) =>
        type.includes(item.type)
      );
    }
    if (roast.length > 0) {
      newDisplayItems = newDisplayItems.filter((item: ItemData) =>
        roast.includes(item.roast)
      );
    }
    if (flavor.length > 0) {
      console.log("made it here!");
      newDisplayItems = newDisplayItems.filter((item: ItemData) => {
        return flavor.some((taste) => item.flavor.includes(taste));
      });
      console.log(newDisplayItems);
    }
    if (origin.length > 0) {
      newDisplayItems = newDisplayItems.filter(
        (item: ItemData) => item.origin && origin.includes(item.origin)
      );
    }
    setDisplayItems(newDisplayItems);
  }, [type, roast, flavor, origin]);

  const onRemove = (item: ItemData) => {
    const newCartCount = { ...cartCount };
    delete newCartCount[item.name];
    setCartCount(newCartCount);

    const newCart = cart.filter(
      (cartItem: ItemData) => cartItem.name !== item.name
    );
    setCart(newCart);
    setHeaderColor("");
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

  const onFilterType = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setType((prevType) => [...prevType, value]);
    } else {
      const newType = [...type];
      const index = type.findIndex((filter: string) => filter === value);
      newType.splice(index, 1);
      setType(newType);
    }
  };

  const onFilterRoast = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setRoast((prevRoast) => [...prevRoast, value]);
    } else {
      const newRoast = [...roast];
      const index = roast.findIndex((filter: string) => filter === value);
      newRoast.splice(index, 1);
      setRoast(newRoast);
    }
  };

  const onFilterFlavor = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setFlavor((prevFlavor) => [...prevFlavor, value]);
    } else {
      const newFlavor = [...flavor];
      const index = flavor.findIndex((filter: string) => filter === value);
      newFlavor.splice(index, 1);
      setFlavor(newFlavor);
    }
  };

  const onFilterOrigin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;

    if (checked) {
      setOrigin((prevOrigin) => [...prevOrigin, value]);
    } else {
      const newOrigin = [...origin];
      const index = origin.findIndex((filter: string) => filter === value);
      newOrigin.splice(index, 1);
      setOrigin(newOrigin);
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
          <div className="items-header">
            <div className="items-header-text">all coffee</div>
            <button className="reset-button">reset all</button>
            <FilterDropdown
              onFilterType={onFilterType}
              onFilterRoast={onFilterRoast}
              onFilterFlavor={onFilterFlavor}
              onFilterOrigin={onFilterOrigin}
            />
          </div>
          <div className="item-listings">
            {displayItems.map((item, index) => (
              <ItemCard
                item={item}
                index={index}
                setHeaderColor={setHeaderColor}
                addToCart={addToCart}
                key={index}
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
                key={index}
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
