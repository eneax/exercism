function wrap(text, tag) {
  return `<${tag}>${text}</${tag}>`;
}

function parseWithDelimiter(markdown, delimiter, tag) {
  const pattern = new RegExp(`${delimiter}(.+?)${delimiter}`, "g");
  const replacement = `<${tag}>$1</${tag}>`;
  return markdown.replace(pattern, replacement);
}

function parseStrong(markdown) {
  return parseWithDelimiter(markdown, "__", "strong");
}

function parseEmphasis(markdown) {
  return parseWithDelimiter(markdown, "_", "em");
}

function parseText(markdown, isList) {
  const parsedText = parseEmphasis(parseStrong(markdown));
  return isList ? parsedText : wrap(parsedText, "p");
}

function parseHeader(markdown, isList) {
  const headerLevel = markdown.match(/^#+/);
  if (!headerLevel) return [null, isList];

  const count = headerLevel[0].length;
  if (count > 6) return [null, isList];

  const headerTag = `h${count}`;
  const headerContent = markdown.substring(count + 1).trim();
  const headerHtml = wrap(headerContent, headerTag);

  return isList ? [`</ul>${headerHtml}`, false] : [headerHtml, false];
}

function parseListItem(markdown, isList) {
  if (markdown.startsWith("* ")) {
    const listItemHtml = wrap(
      parseText(markdown.substring(2).trim(), true),
      "li"
    );
    return isList ? [listItemHtml, true] : [`<ul>${listItemHtml}`, true];
  }
  return [null, isList];
}

function parseParagraph(markdown, isList) {
  const paragraphHtml = parseText(markdown, false);
  return isList ? [`</ul>${paragraphHtml}`, false] : [paragraphHtml, false];
}

function parseLine(markdown, isList) {
  let [result, inListAfter] = parseHeader(markdown, isList);
  if (result === null) {
    [result, inListAfter] = parseListItem(markdown, isList);
  }
  if (result === null) {
    [result, inListAfter] = parseParagraph(markdown, isList);
  }
  if (result === null) {
    throw new Error("Invalid markdown");
  }
  return [result, inListAfter];
}

export function parse(markdown) {
  const lines = markdown.split("\n");
  let result = "";
  let isList = false;

  for (const line of lines) {
    const [lineResult, newList] = parseLine(line, isList);
    result += lineResult;
    isList = newList;
  }

  return isList ? result + "</ul>" : result;
}
