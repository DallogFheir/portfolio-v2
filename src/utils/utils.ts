export const makeClassString = (
  ...classes: (string | null | undefined | boolean)[]
) => classes.filter((cls) => typeof cls === "string" && cls !== "").join(" ");

export const makeSlug = (title: string) =>
  title
    .split(" ")
    .map((part) => part.toLowerCase())
    .join("-");
