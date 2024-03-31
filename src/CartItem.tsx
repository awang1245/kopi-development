import "./CartItem.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import plus from "../public/plus.svg";
import minus from "../public/minus.svg";
import { ItemData } from "./App";

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
            <div>{`${12 * quantity} oz`}</div>
            <div>{`$${quantity * parseInt(item.price)}`}</div>
          </div>
          <div className="cart-info-row">
            <InputGroup className="item-quantity">
              <Button
                className="control-button"
                onClick={() => removeFromCart(item)}
              >
                <img src={minus} />
              </Button>
              <Form.Control
                className="quantity-display"
                placeholder={quantity.toString()}
              />
              <Button
                className="control-button"
                onClick={() => addToCart(item)}
              >
                <img src={plus} />
              </Button>
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
