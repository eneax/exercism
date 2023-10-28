#!/usr/bin/env node
const fs = require("fs").promises;
const path = require("path");

const LINE_NUMBER = "-n";
const FILES_WITH_MATCHES = "-l";
const IGNORE_CASE = "-i";
const INVERT_MATCH = "-v";
const LINE_REGEXP = "-x";
const VALID_OPTIONS = [
  LINE_NUMBER,
  FILES_WITH_MATCHES,
  IGNORE_CASE,
  INVERT_MATCH,
  LINE_REGEXP,
];

const parseArgs = ([...args]) => ({
  options: args.splice(
    0,
    args.filter((arg) => VALID_OPTIONS.includes(arg)).length
  ),
  pattern: args[0],
  files: args.slice(1),
});

const createPredicate = (options, pattern) => (string) =>
  options.includes(INVERT_MATCH) ^
  new RegExp(
    options.includes(LINE_REGEXP) ? `^${pattern}$` : pattern,
    `m${options.includes(IGNORE_CASE) ? "i" : ""}`
  ).test(string);

(async ({ files, options, pattern }) => {
  const fileLines = await Promise.all(
    files.map((file) => fs.readFile(path.resolve(file), { encoding: "utf-8" }))
  );

  const matchesPattern = createPredicate(options, pattern);

  fileLines.forEach((lines, fileNum) =>
    options.includes(FILES_WITH_MATCHES)
      ? matchesPattern(lines) && console.log(files[fileNum])
      : lines
          .split("\n")
          .forEach(
            (line, lineNum) =>
              matchesPattern(line) &&
              console.log(
                [
                  files.length > 1 ? files[fileNum] : [],
                  options.includes(LINE_NUMBER) ? lineNum + 1 : [],
                  line,
                ]
                  .flat()
                  .join(":")
              )
          )
  );
})(parseArgs(process.argv.slice(2)));
