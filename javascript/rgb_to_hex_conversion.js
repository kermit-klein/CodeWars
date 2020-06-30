// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b) {
  const hexadecimal = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  const hexadecimalPart = (input) => {
    if (input > 255) {
      input = 255;
    } else if (input < 0) {
      input = 0;
    }
    let firstPart = hexadecimal[parseInt(input / 16)];
    let secondPart = hexadecimal[16 * (input / 16 - parseInt(input / 16))];
    return firstPart.concat(secondPart);
  };
  return hexadecimalPart(r) + hexadecimalPart(g) + hexadecimalPart(b);
}
