import { styleTags, tags as t } from "@lezer/highlight";

export const liquidHighlighting = styleTags({
  String: t.string,
  Number: t.number,
  "True False": t.bool,
  PropertyName: t.propertyName,
  Null: t.null,
  ".": t.separator,
  "[ ]": t.squareBracket,
  "if unless else elsif": t.controlKeyword,
});
