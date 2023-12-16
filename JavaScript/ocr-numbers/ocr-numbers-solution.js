export const convert = (str) => {
  const zero = " _ " + "| |" + "|_|" + "   ";
  const one = "   " + "  |" + "  |" + "   ";
  const two = " _ " + " _|" + "|_ " + "   ";
  const three = " _ " + " _|" + " _|" + "   ";
  const four = "   " + "|_|" + "  |" + "   ";
  const five = " _ " + "|_ " + " _|" + "   ";
  const six = " _ " + "|_ " + "|_|" + "   ";
  const seven = " _ " + "  |" + "  |" + "   ";
  const eight = " _ " + "|_|" + "|_|" + "   ";
  const nine = " _ " + "|_|" + " _|" + "   ";

  const stringNumber = {
    [zero]: "0",
    [one]: "1",
    [two]: "2",
    [three]: "3",
    [four]: "4",
    [five]: "5",
    [six]: "6",
    [seven]: "7",
    [eight]: "8",
    [nine]: "9",
  };

  const rows = str.split("\n");
  let answer = "";

  for (let i = 0; i < rows.length; i += 4) {
    if (i > 0) answer += ",";

    for (let j = 0; j < rows[i].length; j += 3) {
      let num = "";
      num += rows[i].slice(j, j + 3);
      num += rows[i + 1].slice(j, j + 3);
      num += rows[i + 2].slice(j, j + 3);
      num += rows[i + 3].slice(j, j + 3);

      if (stringNumber.hasOwnProperty(num)) {
        answer += stringNumber[num];
      } else {
        answer += "?";
      }
    }
  }
  return answer;
};
