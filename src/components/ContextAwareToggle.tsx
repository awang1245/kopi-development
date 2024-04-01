import { useAccordionButton } from "react-bootstrap/AccordionButton";
import { ReactNode, useContext } from "react";
import AccordionContext from "react-bootstrap/esm/AccordionContext";
import "../../src/styles/FilterDropdown.css";

// ContextAwareToggle code is mostly taken directly from the
// example on the official Bootstrap Accordion Documentation
interface ContextAwareToggleProps {
  children: ReactNode;
  eventKey: string;
  callback?: (eventKey: string) => void;
}

function ContextAwareToggle({
  children,
  eventKey,
  callback,
}: ContextAwareToggleProps) {
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
