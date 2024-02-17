import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import type { AccordeonProps } from "../types/Accordeon";
import { makeClassString } from "../utils/utils";

function Accordeon({
  title,
  isOpen,
  dispatchToggleOpen,
  addSeparator = true,
  children,
}: AccordeonProps) {
  return (
    <section className="accordeon">
      <header className="accordeon-header" onClick={dispatchToggleOpen}>
        <h2>{title}</h2>
        {isOpen ? (
          <ChevronUp className="accordeon-header-chevron" />
        ) : (
          <ChevronDown className="accordeon-header-chevron" />
        )}
      </header>
      <div
        className={makeClassString(
          "accordeon-content",
          !isOpen && "accordeon-content-hidden"
        )}>
        <div className="accordeon-content-wrapper">{children}</div>
      </div>
      {addSeparator && <div className="accordeon-separator"></div>}
    </section>
  );
}

export default Accordeon;
