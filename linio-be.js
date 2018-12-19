// INSTRUCTIONS
// Write a program that prints all the numbers from 1 to 100. However, for
// multiples of 3, instead of the number, print "Linio".For multiples of 5 print
// "IT".For numbers which are multiples of both 3 and 5, print "Linianos".

// But here's the catch: you can use only one `if`. No multiple branches, ternary
// operators or`else`.

exports.tellWhatMultipleIsIt = length => {
  const response = [];
  length = Math.abs(length);
  const multiplesArray = [3, 5, 15];
  const messageDictionary = { 3: "Linio", 5: "IT", 15: "Linianos" };

  Array.from({ length }, (v, index) => {
    const number = index + 1;

    response[index] = number;
    multiplesArray.forEach(multiple => {
      if (number % multiple === 0) {
        response[index] = messageDictionary[multiple];
      }
    });
  });
  return response;
};

this.tellWhatMultipleIsIt(100).forEach(number => console.log(number));
