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
  const [medScreen, setMedScreen] = useState<boolean>(false);

  useEffect(() => {
    const detectMed = () => {
      setMedScreen(window.innerWidth <= 1240 && window.innerWidth > 888);
    };

    detectMed();
    window.addEventListener("resize", detectMed);

    return () => {
      window.removeEventListener("resize", detectMed);
    };
  });

  useEffect(() => {
    const detectSmall = () => {
      setSmallScreen(window.innerWidth <= 888);
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
            ? `card-back ${index > 0 ? "no-top" : ""}`
            : medScreen
            ? `card-back ${index % 2 !== 0 ? "no-left" : ""} ${
                index > 1 ? "no-top" : ""
              }`
            : `card-back ${index % 3 !== 0 ? "no-left" : ""} ${
                index > 2 ? "no-top" : ""
              }`
        }
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <img className="item-img" src={item.path} alt={item.name} />
        <div className="card-info">
          <div className="info-row">
            <div>{item.display}</div>
            <div className="large-screen-roast">{`${item.roast} roast`}</div>
          </div>
          <div className="name-price">
            <div>{item.name}</div>
            <div>{`$${item.price}`}</div>
          </div>
          <div className="small-screen-roast-row">
            <div>roast</div>
            <div>{item.roast}</div>
          </div>
          <div className="info-row">
            <div>notes</div>
            <div className="item-notes">{`${item.notes[0]}, ${item.notes[1]}, ${item.notes[2]}`}</div>
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
