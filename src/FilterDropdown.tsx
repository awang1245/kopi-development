import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ContextAwareToggle from "./ContextAwareToggle";

// FilterDropDown code is mostly taken directly from the
// example on the official Bootstrap Accordion Documentation
interface FilterDropdownProps {
  onFilterType: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterRoast: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterFlavor: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onFilterOrigin: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function FilterDropdown({
  onFilterType,
  onFilterRoast,
  onFilterFlavor,
  onFilterOrigin,
}: FilterDropdownProps) {
  return (
    <>
      <Accordion className="filter-accordion">
        <Card className="filter-card">
          <Card.Header className="filter-header">
            <ContextAwareToggle eventKey="0" callback={undefined}>
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
          <Accordion.Collapse eventKey="0">
            <Card.Body className="filter-body">
              <div className="category">
                <div className="category-name">TYPE</div>
                <div className="option">
                  <input
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
                    type="checkbox"
                    id="roast1"
                    name="roast1"
                    value="light"
                    onChange={onFilterRoast}
                  />
                  <label htmlFor="type1">light</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    id="roast2"
                    name="roast2"
                    value="medium"
                    onChange={onFilterRoast}
                  />
                  <label htmlFor="type2">medium</label>
                </div>
                <div className="option">
                  <input
                    type="checkbox"
                    id="roast3"
                    name="roast3"
                    value="dark"
                    onChange={onFilterRoast}
                  />
                  <label htmlFor="type2">dark</label>
                </div>
              </div>
              <div className="category">
                <div className="category-name">FLAVOR</div>
                <div className="option">
                  <input
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
        </Card>
      </Accordion>
    </>
  );
}

export default FilterDropdown;
