const data = "I Love Javascript so much i hate it";

// const reverseWords = payload => {
//   return payload.split(" ").reverse().join(" ");
// };

// console.log(reverseWords(data));

// const duplicate = payload => {
//   let a1 = [...payload];

//   let a2 = [...payload];

//   return (a3 = [...a1, ...a2]);
// };

// console.log(duplicate([1, 2, 3, 4]));

// const mul = a => {
//   return b => {
//     return c => {
//       return a * b * c;
//     };
//   };
// };

// console.log(mul(2)(4)(6));

// const createBase = payload => {
//   return N => {
//     return payload + N;
//   };
// };

// const fizzBuzz = () => {
//   for (let i = 0; i < 100; i++) {
//     if (i % 3 === 0) {
//       console.log("Fizz");
//     }

//     if (i % 5 === 0) {
//       console.log("Buzz");
//     }
//   }
// };

// console.log(fizzBuzz());

// const isPalindrome = str =>
//   str.split("").reverse().join("") === str ? true : false;

// console.log(isPalindrome("lame"));

const sum = a => {
  if (arguments.length === 2) {
    return arguments[0] + arguments[1];
  } else {
    return x => {
      return a + x;
    };
  }
};

const two = sum(2);

console.log(two(3));
