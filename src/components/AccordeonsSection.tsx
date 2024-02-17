import useLocalStorage from "../hooks/useLocalStorage";
import { makeSlug } from "../utils/utils";
import Accordeon from "./Accordeon";
import Section from "./sections/Section";
import sections from "./sections/sections";

function AccordeonsSection() {
  const [openedAccordeon, setOpenedAccordeon] = useLocalStorage<string | null>(
    "opened-accordeon",
    makeSlug(sections[0].title)
  );

  return (
    <>
      {sections.map(({ title, content }, idx) => {
        const slug = makeSlug(title);

        return (
          <Accordeon
            key={`section-${slug}`}
            title={title}
            isOpen={slug === openedAccordeon}
            dispatchToggleOpen={() =>
              setOpenedAccordeon((prev) => (prev === slug ? null : slug))
            }
            addSeparator={idx !== sections.length - 1}>
            {<Section content={content} slug={slug} />}
          </Accordeon>
        );
      })}
    </>
  );
}

export default AccordeonsSection;
