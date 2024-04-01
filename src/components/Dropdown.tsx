import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ContextAwareToggle from "./ContextAwareToggle";
import "../../src/styles/Dropdown.css";

// Accordion structure in the FilterDropDown code was written referencing the
// example on the official Bootstrap Accordion Documentation
interface DropdownProps {
  onFilterType: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterRoast: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterFlavor: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterOrigin: (event: React.ChangeEvent<HTMLInputElement>) => void;
  sort: string;
  setSort: React.Dispatch<React.SetStateAction<string>>;
}

function Dropdown({
  onFilterType,
  onFilterRoast,
  onFilterFlavor,
  onFilterOrigin,
  sort,
  setSort,
}: DropdownProps) {
  return (
    <>
      <Accordion className="filter-accordion">
        <Card className="filter-card">
          <Card.Header className="filter-header">
            <ContextAwareToggle
              eventKey="0"
              callback={(eventKey: string) => {
                console.log(`Toggle with event key ${eventKey} clicked`);
              }}
              isFilter={true}
            >
              {/* currentColor keyword wouldn't work if I imported the svg, only when pasting */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M1.66667 4.5H4.33334V7.16667H1.66667V4.5Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
                <path
                  d="M3 2.16667V4.16667"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
                <path
                  d="M3 7.5V12.8333"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
                <path
                  d="M6.66666 9H9.33333V11.6667H6.66666V9Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
                <path
                  d="M8 2.16667V8.83334"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
                <path
                  d="M8 12V12.8333"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
                <path
                  d="M11.6667 3H14.3333V5.66667H11.6667V3Z"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
                <path
                  d="M13 2V2.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
                <path
                  d="M13 6V12.8333"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
              </svg>
              <div>filter by</div>
            </ContextAwareToggle>
          </Card.Header>
          <Card.Header className="sort-header">
            <ContextAwareToggle
              eventKey="1"
              callback={(eventKey: string) => {
                console.log(`Toggle with event key ${eventKey} clicked`);
              }}
              isFilter={false}
            >
              {/* currentColor keyword wouldn't work if I imported the svg, only when pasting */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <rect
                  x="2"
                  y="2.5"
                  width="4"
                  height="4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <rect
                  x="2"
                  y="9"
                  width="4"
                  height="4"
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
                <path
                  d="M9.57143 10.5L11.9286 12.8571L14.2857 10.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
                <path
                  d="M11.9286 12V2.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="square"
                />
              </svg>
              <div>{`sort by / ${sort}`}</div>
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="filter-body">
              <div className="category">
                <div className="category-name">TYPE</div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="type1"
                    name="type1"
                    value="single origin"
                    onChange={onFilterType}
                  />
                  <label htmlFor="type1">single origin</label>
                </div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="type2"
                    name="type2"
                    value="blend"
                    onChange={onFilterType}
                  />
                  <label htmlFor="type2">blend</label>
                </div>
              </div>
              <div className="category">
                <div className="category-name">ROAST</div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="roast1"
                    name="roast1"
                    value="light"
                    onChange={onFilterRoast}
                  />
                  <label htmlFor="roast1">light</label>
                </div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="roast2"
                    name="roast2"
                    value="medium"
                    onChange={onFilterRoast}
                  />
                  <label htmlFor="roast2">medium</label>
                </div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="roast3"
                    name="roast3"
                    value="dark"
                    onChange={onFilterRoast}
                  />
                  <label htmlFor="roast3">dark</label>
                </div>
              </div>
              <div className="category">
                <div className="category-name">FLAVOR</div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="flavor1"
                    name="flavor1"
                    value="chocolatey"
                    onChange={onFilterFlavor}
                  />
                  <label htmlFor="flavor1">chocolatey</label>
                </div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="flavor2"
                    name="flavor2"
                    value="citrusy"
                    onChange={onFilterFlavor}
                  />
                  <label htmlFor="flavor2">citrusy</label>
                </div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="flavor3"
                    name="flavor3"
                    value="floral"
                    onChange={onFilterFlavor}
                  />
                  <label htmlFor="flavor3">floral</label>
                </div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="flavor4"
                    name="flavor4"
                    value="fruity"
                    onChange={onFilterFlavor}
                  />
                  <label htmlFor="flavor4">fruity</label>
                </div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="flavor5"
                    name="flavor5"
                    value="nutty"
                    onChange={onFilterFlavor}
                  />
                  <label htmlFor="flavor5">nutty</label>
                </div>
              </div>
              <div className="category">
                <div className="category-name">ORIGIN</div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="origin1"
                    name="origin1"
                    value="africa"
                    onChange={onFilterOrigin}
                  />
                  <label htmlFor="origin1">africa</label>
                </div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="origin2"
                    name="origin2"
                    value="asia"
                    onChange={onFilterOrigin}
                  />
                  <label htmlFor="origin2">asia</label>
                </div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="origin3"
                    name="origin3"
                    value="central america"
                    onChange={onFilterOrigin}
                  />
                  <label htmlFor="origin3">central america</label>
                </div>
                <div className="option">
                  <input
                    className="checkbox"
                    type="checkbox"
                    id="origin4"
                    name="origin4"
                    value="south america"
                    onChange={onFilterOrigin}
                  />
                  <label htmlFor="origin4">south america</label>
                </div>
              </div>
            </Card.Body>
          </Accordion.Collapse>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="sort-body">
              <div className="category">
                <button
                  value="best selling"
                  onClick={(ev) => setSort(ev.currentTarget.value)}
                >
                  best selling
                </button>
              </div>
              <div className="category">
                <button
                  value="a / z"
                  onClick={(ev) => setSort(ev.currentTarget.value)}
                >
                  a / z
                </button>
              </div>
              <div className="category">
                <button
                  value="z / a"
                  onClick={(ev) => setSort(ev.currentTarget.value)}
                >
                  z / a
                </button>
              </div>
              <div className="category">
                <button
                  value="price / high"
                  onClick={(ev) => setSort(ev.currentTarget.value)}
                >
                  price / high
                </button>
              </div>
              <div className="category">
                <button
                  value="price / low"
                  onClick={(ev) => setSort(ev.currentTarget.value)}
                >
                  price / low
                </button>
              </div>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

export default Dropdown;
