const convertToBase = (
  num,
  base,
  numLength = 1 + ~~(Math.log(num) / Math.log(base))
) => {
  return numLength
    ? [...convertToBase((num / base) | 0, base, numLength - 1), num % base]
    : [];
};

export const convert = (digits, a = 0, b = 0) => {
  if (a <= 1 || a % 1) throw new Error("Wrong input base");
  if (b <= 1 || b % 1) throw new Error("Wrong output base");
  if (
    [
      !digits.length,
      digits.length > 1 && digits[0] === 0,
      digits.some((digit) => digit < 0 || digit >= a),
    ].some((assertion) => assertion)
  ) {
    throw new Error("Input has wrong format");
  }

  return convertToBase(
    digits.reduce((num, digit) => digit + num * a),
    b
  );
};
