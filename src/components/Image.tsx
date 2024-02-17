import type { ImageProps } from "../types/Image";
import { makeClassString } from "../utils/utils";
import Link from "./Link";

function Image({ imgSrc, title, url, extraImgClasses = [] }: ImageProps) {
  const img = (
    <img
      className={makeClassString("accordeon-content-img", ...extraImgClasses)}
      src={imgSrc}
      alt={title}
      title={title}
    />
  );

  if (url !== undefined) {
    return <Link href={url}>{img}</Link>;
  }

  return <div>{img}</div>;
}

export default Image;
