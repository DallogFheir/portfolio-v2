import { ChevronDown, ChevronUp } from "react-bootstrap-icons";
import useLocalStorage from "../hooks/useLocalStorage";
import type { AccordeonProps } from "../types/Accordeon";

function Accordeon({ title, key, isOpenByDefault, children }: AccordeonProps) {
  const [isOpen, setIsOpen] = useLocalStorage(
    `accordeon-${key}`,
    !!isOpenByDefault
  );

  const toggleIsOpen = () => setIsOpen((prev) => !prev);

  return (
    <section className="accordeon">
      <header className="accordeon-header">
        <h2>{title}</h2>
        {isOpen ? (
          <ChevronUp
            className="accordeon-header-chevron"
            onClick={toggleIsOpen}
          />
        ) : (
          <ChevronDown
            className="accordeon-header-chevron"
            onClick={toggleIsOpen}
          />
        )}
      </header>
      {isOpen && children}
    </section>
  );
}

export default Accordeon;
