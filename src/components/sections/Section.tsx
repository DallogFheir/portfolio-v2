import type { SectionProps } from "../../types/Section";
import { makeClassString, makeSlug } from "../../utils/utils";
import Image from "../Image";

function Section({ slug, content, isMobile }: SectionProps) {
  return (
    <div
      className={makeClassString(
        "accordeon-content-section",
        isMobile && "accordeon-content-section-mobile"
      )}>
      {content.map(({ title, imgSrc, url, extraImgClasses }) => (
        <Image
          key={`${slug}--${makeSlug(title)}`}
          title={title}
          imgSrc={imgSrc}
          url={url}
          extraImgClasses={extraImgClasses}
        />
      ))}
    </div>
  );
}

export default Section;
