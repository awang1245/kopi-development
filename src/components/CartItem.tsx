import "../styles/CartItem.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import plus from "../../public/plus.svg";
import minus from "../../public/minus.svg";
import { ItemData } from "../App";

interface CartItemProps {
  item: ItemData;
  index: number;
  quantity: number;
  setHeaderColor: React.Dispatch<React.SetStateAction<string>>;
  onRemove: (item: ItemData) => void;
  addToCart: (item: ItemData) => void;
  removeFromCart: (item: ItemData) => void;
}

function CartItem({
  item,
  index,
  quantity,
  setHeaderColor,
  onRemove,
  addToCart,
  removeFromCart,
}: CartItemProps) {
  const onMouseEnter = () => {
    setHeaderColor(item.color);
  };

  const onMouseLeave = () => {
    setHeaderColor("");
  };

  return (
    <>
      <div
        className={`cart-item ${index === 0 ? "first" : ""}`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div
          className="square"
          style={{ backgroundColor: `var(--${item.color})` }}
        />
        <div className="cart-item-info">
          <div className="cart-item-name">{item.name}</div>
          <div className="cart-info-row">
            {/* used to factor quantity into the weight also, but unnecessary */}
            <div>12 oz</div>
            <div>
              {(quantity * parseFloat(item.price)) % 1 === 0.5
                ? `$${(quantity * parseFloat(item.price)).toFixed(2)}`
                : `$${quantity * parseFloat(item.price)}`}
            </div>
          </div>
          <div className="cart-info-row">
            <InputGroup className="item-quantity">
              <button
                className="control-button"
                onClick={() => removeFromCart(item)}
              >
                <img src={minus} alt="subtract icon" />
              </button>
              <Form.Control
                className="quantity-display"
                type="text"
                placeholder={quantity.toString()}
                readOnly
              />
              <button
                className="control-button"
                onClick={() => addToCart(item)}
              >
                <img src={plus} alt="add icon" />
              </button>
            </InputGroup>
            <button className="remove-button" onClick={() => onRemove(item)}>
              remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartItem;
