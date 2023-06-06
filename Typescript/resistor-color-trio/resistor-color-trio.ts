//define the color bands with their values
const colors = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9,
} as const;

type Colors = keyof typeof colors;

//define the constants to represent the multipliers
//kilo = 1000
//mega = 1,000,000
//giga = 1,000,000,000,000
const KILO = 1000;
const MEGA = KILO * 1000;
const GIGA = MEGA * 1000;

export function decodedResistorValue(values: Colors[]): string {
  //decontruct the first three colors from the array into'first''second''third'. 
  //ignore the rest of the colors
  const [first, second, ohms] = values;
  //then constructs the quantity part by concatenating the values of the first and second colors
  const quantity = `${colors[first]}${colors[second]}`;
  //also constructs the number of zeros by creating an array of zeros of length equal to the value of the ohms color, then joins these zeros into a string
  const zeroes = Array(Number(colors[ohms])).fill(0).join("");
  //the final resistance value by appending the zeros to the quantity and converting it into a number
  const amount = Number(`${quantity}${zeroes}`);

  if (amount <= KILO) {
    return `${amount} ohms`;
  }
  if (amount <= MEGA) {
    return `${amount / 1e3} kiloohms`;
  }
  if (amount <= GIGA) {
    return `${amount / 1e6} megaohms`;
  }
  return `${amount / 1e9} gigaohms`;
}


//This example uses: 

//    Dictionary (HashMap): The colors constant is a dictionary (also known as a hashmap). This data structure is used for quick lookup of values based on a unique key. In this case, the color names are the keys, and the corresponding values are the color codes. The JavaScript engine implements this using a Hash table in the background.

//Array: The function uses arrays to handle the digits of the resistance value and the number of zeros to append. In particular, it uses the fill and join methods of arrays to generate a string of zeros.

//Conditional Branching (if-else): The function uses conditional branching (the if-else statements) to determine the correct unit for the resistance value (ohms, kiloohms, megaohms, or gigaohms). This could be thought of as a very simple form of a decision tree algorithm.