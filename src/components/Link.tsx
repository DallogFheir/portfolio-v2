import type { LinkProps } from "../types/Link";

function Link({ href, children }: LinkProps) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

export default Link;
