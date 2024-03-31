import "./ItemCard.css";
import plus from "../public/plus.svg";

interface ItemCardProps {
  name: string;
  path: string;
  display: string;
  notes: string[];
  price: string;
  roast: string;
  index: number;
}

function ItemCard({
  name,
  path,
  display,
  notes,
  price,
  roast,
  index,
}: ItemCardProps) {
  return (
    <>
      <div
        className={`card-back ${index % 3 !== 0 ? "no-left" : ""} ${
          index > 2 ? "no-top" : ""
        }`}
      >
        <img className="item-img" src={path} />
        <div className="card-info">
          <div className="info-row">
            <div>{display}</div>
            <div>{`${roast} roast`}</div>
          </div>
          <div className="name-price">
            <div>{name}</div>
            <div>{`$${price}`}</div>
          </div>
          <div className="info-row">
            <div>notes</div>
            <div>{`${notes[0]}, ${notes[1]}, ${notes[2]}`}</div>
          </div>
          <div className="buttons">
            <button>
              <div>quick add</div>
              <img src={plus} />
            </button>
            <button className="see-details">
              <div>see details</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="11"
                viewBox="0 0 14 11"
                fill="none"
              >
                <path
                  d="M2 5.58691L11.5361 5.58691"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="square"
                />
                <path
                  d="M8.80188 9.75001L12.9269 5.625"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="square"
                />
                <path
                  d="M8.80188 1.5L12.9269 5.62501"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="square"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
