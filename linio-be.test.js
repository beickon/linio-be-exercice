const parameter = 100;
const { tellWhatMultipleIsIt } = require("./linio-be");
const multiplesArray = Array.from(
  { length: parameter },
  (v, index) => index + 1
);

// beforeAll(() => {});
// afterAll(() => {});

test("tellWhatMultipleIsIt function exists", () => {
  expect(tellWhatMultipleIsIt).toBeDefined();
});

test("tellWhatMultipleIsIt is a function", () => {
  expect(typeof tellWhatMultipleIsIt).toBe("function");
});

test("Should return an array", () => {
  const arrayResponse = tellWhatMultipleIsIt(parameter);
  expect(Array.isArray(arrayResponse)).toBeTruthy();
});

test("Should return an object of same length as parameter", () => {
  const arrayResponse = tellWhatMultipleIsIt(parameter);
  expect(arrayResponse.length).toBe(parameter);
});

test("Should be a number 1 at index 0", () => {
  const arrayResponse = tellWhatMultipleIsIt(parameter);
  expect(arrayResponse[0]).toBe(1);
});

test("Should be a number for all number NOT multiple by 3 or 5", () => {
  const notMultiplesOf3And5 = multiplesArray.filter(
    ele => !(ele % 3 === 0) && !(ele % 5 === 0)
  );

  const arrayResponse = tellWhatMultipleIsIt(parameter);
  notMultiplesOf3And5.forEach(multiple => {
    expect(typeof arrayResponse[multiple - 1]).toBe("number");
  });
});

test("Should be Linio string at index 2", () => {
  const arrayResponse = tellWhatMultipleIsIt(parameter);
  expect(arrayResponse[2]).toBe("Linio");
});

test("Should be Linio for all possible multiple of JUST 3", () => {
  const multiplesBy3 = multiplesArray.filter(
    ele => ele % 3 === 0 && !(ele % 5 === 0)
  );

  const arrayResponse = tellWhatMultipleIsIt(parameter);
  multiplesBy3.forEach(multiple => {
    expect(arrayResponse[multiple - 1]).toBe("Linio");
  });
});

test("Should be IT string at index 4", () => {
  const arrayResponse = tellWhatMultipleIsIt(parameter);
  expect(arrayResponse[4]).toBe("IT");
});

test("Should be IT for all possible multiple of JUST 5", () => {
  const multiplesOf5 = multiplesArray.filter(
    ele => ele % 5 === 0 && !(ele % 3 === 0)
  );
  const arrayResponse = tellWhatMultipleIsIt(parameter);
  multiplesOf5.forEach(multiple => {
    expect(arrayResponse[multiple - 1]).toBe("IT");
  });
});

test("Should be Linianos string at index 14", () => {
  const arrayResponse = tellWhatMultipleIsIt(parameter);
  expect(arrayResponse[14]).toBe("Linianos");
});

test("Should be Linianos for all possible multiple of both 3 and 5", () => {
  const multiplesOf3And5 = multiplesArray.filter(ele => ele % 15 === 0);
  const arrayResponse = tellWhatMultipleIsIt(parameter);
  multiplesOf3And5.forEach(multiple => {
    expect(arrayResponse[multiple - 1]).toBe("Linianos");
  });
});

test("When function is call without parameters should return an empty object", () => {
  const arrayResponse = tellWhatMultipleIsIt();
  expect(arrayResponse).toEqual([]);
});

test("When function is call with parameter equal to number 0 should return an empty object", () => {
  const arrayResponse = tellWhatMultipleIsIt(0);
  expect(arrayResponse).toEqual([]);
});

test("When function is call with parameter equal to number 1 should return an array as [1]", () => {
  const arrayResponse = tellWhatMultipleIsIt(1);
  expect(arrayResponse).toEqual([1]);
});

test("When function is call with parameter equal to negative number should return a object", () => {
  const arrayResponse = tellWhatMultipleIsIt(parameter * -1);
  expect(arrayResponse).not.toEqual([]);
});

test("When function is call with string parameter should return an empty object", () => {
  const arrayResponse = tellWhatMultipleIsIt("this is a string");
  expect(arrayResponse).toEqual([]);
});
