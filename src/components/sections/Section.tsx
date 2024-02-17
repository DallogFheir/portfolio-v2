import type { SectionProps } from "../../types/Section";
import { makeSlug } from "../../utils/utils";
import Image from "../Image";

function Section({ slug, content }: SectionProps) {
  return (
    <div className="accordeon-content-section">
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
