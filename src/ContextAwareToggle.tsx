import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { useContext } from "react";
import AccordionContext from "react-bootstrap/esm/AccordionContext";
import "./styles/FilterDropdown.css";

// ContextAwareToggle code is mostly taken directly from the
// example on the official Bootstrap Accordion Documentation
function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey)
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      className="filter-button"
      style={{
        backgroundColor: isCurrentEventKey ? "var(--black)" : "white",
        color: isCurrentEventKey ? "white" : "var(--black",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

export default ContextAwareToggle;
