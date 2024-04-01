import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ContextAwareToggle from "./ContextAwareToggle";
import "../../src/styles/SortDropdown.css";

function SortDropdown() {
  return (
    <>
      <Accordion className="sort-accordion">
        <Card className="sort-card">
          <Card.Header className="sort-header">
            <ContextAwareToggle
              eventKey="0"
              callback={(eventKey: string) => {
                console.log(`Toggle with event key ${eventKey} clicked`);
              }}
            >
              <div>sort by</div>
            </ContextAwareToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="sort-body"></Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </>
  );
}

export default SortDropdown;
