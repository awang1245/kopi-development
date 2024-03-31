import "./App.css";
import ItemCard from "./ItemCard";
import coffeeData from "../src/ItemData.json";

function App() {
  return (
    <article className="site-content">
      <header className="header">
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
            {coffeeData.items.map((item, index) => (
              <ItemCard
                name={item.name}
                path={item.path}
                display={item.display}
                notes={item.notes}
                price={item.price}
                roast={item.roast}
                index={index}
              />
            ))}
          </div>
        </div>
        <div className="cart">
          <div className="cart-header">my cart</div>
        </div>
      </main>
    </article>
  );
}

export default App;
