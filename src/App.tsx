import "./styles/App.css";
import ItemCard from "./components/ItemCard";
import coffeeData from "../src/ItemData.json";
import { useEffect, useState } from "react";
import CartItem from "./components/CartItem";
import Dropdown from "./components/Dropdown";

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
  rank: number;
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
  const [displayFilters, setDisplayFilters] = useState<string>("all coffee");
  const [sort, setSort] = useState<string>("best selling");

  useEffect(() => {
    let newDisplayItems: ItemData[] = [...coffeeData.items];
    let newDisplayFilter: string = "all coffee";

    // filter any items that have any of the types the user has specified
    // can be more than one
    if (type.length > 0) {
      newDisplayItems = newDisplayItems.filter((item: ItemData) =>
        type.includes(item.type)
      );
    }
    // if user picks one type, only display that type, keep displaying "all coffee"
    if (type.length === 1) {
      newDisplayFilter = type[0];
    }

    // filter any items with any of roasts user has selected
    if (roast.length > 0) {
      newDisplayItems = newDisplayItems.filter((item: ItemData) =>
        roast.includes(item.roast)
      );
      // add any roasts user has picked to the "breadcrumbs"
      roast.map((filter) => {
        newDisplayFilter = newDisplayFilter + ` / ${filter}`;
      });
    }

    // filter any items with any of flavors user has selected
    if (flavor.length > 0) {
      newDisplayItems = newDisplayItems.filter((item: ItemData) => {
        return flavor.some((taste) => item.flavor.includes(taste));
      });
      // add any flavors user has picked to the "breadcrumbs"
      flavor.map((filter) => {
        newDisplayFilter = newDisplayFilter + ` / ${filter}`;
      });
    }

    // if item is single origin (not blend), then filter any items with origins user has selected
    if (origin.length > 0) {
      newDisplayItems = newDisplayItems.filter(
        (item: ItemData) => item.origin && origin.includes(item.origin)
      );
      // add any origins user has picked to the "breadcrumbs"
      origin.map((filter) => {
        newDisplayFilter = newDisplayFilter + ` / ${filter}`;
      });
    }

    // feed filtered newDisplayItems into sorting function to get sorted
    newDisplayItems = applySort(newDisplayItems);

    setDisplayItems(newDisplayItems);
    setDisplayFilters(newDisplayFilter);
  }, [sort, type, roast, flavor, origin]);

  // factors out code and updates newDisplayItems with a sorted version
  const applySort = (items: ItemData[]) => {
    let sortedItems = [...items];

    if (sort === "best selling") {
      sortedItems.sort((a, b) => a.rank - b.rank);
    } else if (sort === "a / z") {
      sortedItems.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "z / a") {
      sortedItems.sort((a, b) => b.name.localeCompare(a.name));
    } else if (sort === "price / high") {
      sortedItems.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sort === "price / low") {
      sortedItems.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    }

    return sortedItems;
  };

  // if user completely removes an item from cart
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

  // if user clicks quick add once or increments counter in cart
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

  // if user decrements counter in cart
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
      // if user decrements cart counter to 0, remove item from cart completely
      onRemove(item);
    }
  };

  // handles selecting and unselecting type filters
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

  // handles selecting and unselecting roast filters
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

  // handles selecting and unselecting flavor filters
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

  // handles selecting and unselecting origin filters
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

  const onSort = (event: React.MouseEvent<HTMLButtonElement>) => {
    const value = event.currentTarget.value;
    setSort(value);
  };

  // handles resetting any filters selected + unchecking boxes
  // also resets sort to best selling
  const resetAll = () => {
    setDisplayItems(coffeeData.items);
    setDisplayFilters("all coffee");
    setType([]);
    setRoast([]);
    setFlavor([]);
    setOrigin([]);
    setSort("best selling");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((box) => {
      (box as HTMLInputElement).checked = false;
    });
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
            <div className="items-header-text">{displayFilters}</div>
            <button className="reset-button" onClick={resetAll}>
              reset all
            </button>
            <Dropdown
              onFilterType={onFilterType}
              onFilterRoast={onFilterRoast}
              onFilterFlavor={onFilterFlavor}
              onFilterOrigin={onFilterOrigin}
              sort={sort}
              onSort={onSort}
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
