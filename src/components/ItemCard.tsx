import "../styles/ItemCard.css";
import plus from "../../public/plus.svg";
import arrow from "../../public/arrow.svg";
import { ItemData } from "../App";
import { useEffect, useState } from "react";

interface ItemCardProps {
  item: ItemData;
  index: number;
  setHeaderColor: React.Dispatch<React.SetStateAction<string>>;
  addToCart: (item: ItemData) => void;
}

function ItemCard({ item, index, setHeaderColor, addToCart }: ItemCardProps) {
  const [smallScreen, setSmallScreen] = useState<boolean>(false);

  useEffect(() => {
    const detectSmall = () => {
      setSmallScreen(window.innerWidth <= 1056);
      // setSmallScreen(window.innerWidth <= 920);
    };

    detectSmall();
    window.addEventListener("resize", detectSmall);

    return () => {
      window.removeEventListener("resize", detectSmall);
    };
  });

  const onMouseEnter = () => {
    setHeaderColor(item.color);
  };

  const onMouseLeave = () => {
    setHeaderColor("");
  };

  return (
    <>
      <div
        className={
          smallScreen
            ? `card-back ${index % 2 !== 0 ? "no-left" : ""} ${
                index > 1 ? "no-top" : ""
              }`
            : `card-back ${index % 3 !== 0 ? "no-left" : ""} ${
                index > 2 ? "no-top" : ""
              }`
        }
        // className={`card-back ${index % 3 !== 0 ? "no-left" : ""} ${
        //   index > 2 ? "no-top" : ""
        // }`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img className="item-img" src={item.path} alt={item.name} />
        <div className="card-info">
          <div className="info-row">
            <div>{item.display}</div>
            <div>{`${item.roast} roast`}</div>
          </div>
          <div className="name-price">
            <div>{item.name}</div>
            <div>{`$${item.price}`}</div>
          </div>
          <div className="info-row">
            <div>notes</div>
            <div>{`${item.notes[0]}, ${item.notes[1]}, ${item.notes[2]}`}</div>
          </div>
          <div className="buttons">
            <button onClick={() => addToCart(item)}>
              <div>quick add</div>
              <img src={plus} alt="add icon" />
            </button>
            <button className="see-details">
              <div>see details</div>
              <img src={arrow} alt="arrow icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
