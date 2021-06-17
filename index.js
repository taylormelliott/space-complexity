// 1) -------------------------------------------------------
function printNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

// Q: Given an array of numbers, what is the space complexity of this function?
// ANSWER: 0(n)

// 2) You are challenged to find the 4th element of the array, and you came up with this solution:

function findFourth(numbers) {
  var count = 1;
  var answer = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (count === 4) {
      answer = numbers[i];
      return;
    } else {
      count += 1;
    }
  }
}

// Q: Given an array of numbers, what is the space complexity of this function?
// ANSWER: 0(1)

// 3) -------------------------------------------------------
function printA() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}
// Q: What is the space complexity of this function?
// ANSWER: 0(1)

// 4) -------------------------------------------------------
function printB(number) {
  for (let i = 0; i < number; i++) {
    console.log(i);
  }
}
// Q: What is the space complexity of the function?
// ANSWER: 0(n)

// 5) -------------------------------------------------------
function printC(num, arr) {
  for (let i = 0; i < num; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(j);
    }
  }
}
// Q: What is the space complexity of the function?
// ANSWER: 0(n^2)

// 6) -------------------------------------------------------
function nested(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      console.log(j);
    }
  }
}

// Q: What is the space complexity of this function?
// ANSWER: 0(n^2)

// 7) -------------------------------------------------------
let newNumbersA = numbers.filter((num) => {
  return num < 5;
});

// Q: What is the space complexity of the filter higher-order function?
// ANSWER: 0(n)

// 8) -------------------------------------------------------
let newNumbersB = numbers.map((num) => {
  return num * 3;
});
// Q: What is the space complexity of the map higher-order function?
// ANSWER: 0(n)

// 9) You are challenged to find the squared value of each number in an array. This is not the best solution, but it is what you come up with anyway...

function getNumbersSquared(numbers) {
  let numbers2 = [...numbers];

  let answers = [];

  for (let i = 0; i < numbers.length; i++) {
    let squaredValue = numbers[i] * numbers2[i];
    answers.push(squaredValue);
  }
  return answers;
}

// Q: What is the space complexity of this function?
// ANSWER: 0(n)

// Q: Is it possible to improve this functions space complexity?
// ANSWER:

function getNumbersSquared(numbers) {
  return numbers.map((num) => num ** 2);
}

console.log(getNumbersSquared([1, 2, 3, 4]));

// 9) -------------------------------------------------------
// This function takes in parentArr which is an array of arrays
// It will only ever have 2 levels of arrays (the child arrays can't have array children)
// ex: [[1,2,3], ['a','b','c'], [5,null,'x',0]]
// NOT: [[1,2,3], ['a', ['an', 'invalid', '(grand)child', 'array], 'b', 'c'], [6,7,8,9,10]]
function arrInception(parentArr) {
  for (let i = 0; i < parentArr.length; i++) {
    let childArr = parentArr[i];
    for (let j = 0; j < childArr.length; j++) {
      console.log(
        `value at index ${j} in child arr (at ${i} in parent arr): ${childArr[j]}`
      );
    }
  }
}
// Q: What is the space complexity of this function?
// ANSWER: O(n^2)

// 11) Here are two functions that you came up with to count how many of each letter is in a given string and return an object with the individual counts:

function countLetters(str) {
  let letters = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  str = str.toLowerCase();
  const splitStr = str.split("");

  splitStr.forEach((char) => {
    if (letters.hasOwnProperty(char)) {
      letters[char]++;
    }
  });

  for (let prop in letters) {
    if (letters[prop] === 0) {
      delete letters[prop];
    }
  }

  return letters;
}

/////////////////////////////

function countLettersRoundTwo(str) {
  str = str.toLowerCase().replace(/([^a-z])+/g, "");
  let letters = {};
  for (let i = 0; i < str.length; i++) {
    if (letters.hasOwnProperty(str[i])) {
      letters[str[i]]++;
    } else {
      letters[str[i]] = 0;
    }
  }
  return letters;
}

// Q: Do these functions have the same space complexity?
// ANSWER: Yes

// Q: What is the space complexity of each?
// ANSWER - countLetters: 0(n)
// ANSWER - countLettersRoundTwo: 0(n)

// Q: Explain how you came to your conclusions about the space complexity of each function.
// ANSWER: the first and second function potentially have limitless strings to loop over making them linear in nature

// 12) Memoization
/*
  Without looking up memoization examples on
  the internet, let's write a method in a class 
  that memoizes results.

  Create a class called Factorial 

  We'll be calculating factorials in this class 
    - factorial is a number multiplied by all the numbers 
      below it besides 0
    - so the factorial of 4 is 24, which is 4*3*2*1

  Inside the class, create a constructor function 
    - the constructor shouldn't take in any params
    - it should initialize this.cache which should
      be an empty object

  In the class, write a method called calcFac
    - the function should take in a num as an argument 
    - it should check if an answer for this input exists
      in the cache object already 
        - if it does, return that answer 
    - otherwise:
        - create an answer variable
        - create a loop that will perform the necessary multiplication
        - set the answer to a new property on the cache obj 
        - return the answer
*/

class Factorial {
  constructor() {
    this.cache = {};
  }

  calcFac(num) {
    if (this.cache[num]) return this.cache[num];

    this.cache[num] = num;

    for (let i = num - 1; i > 0; i--) {
      this.cache[num] *= i;
    }

    return this.cache[num];
  }
}

let test = new Factorial();
console.log(test.calcFac(4));

/* 
  We want to test a non-memoized version of this too, 
  so copy and paster your calcFac function and save it 
  to this new function called noCacheCalcFac
  (psst...don't forget to uncomment it)
*/

function noCacheCalcFac(num) {
  for (let i = num - 1; i > 0; i--) {
    num *= i;
  }
  return num;
}

/*
  The logs below will show you how long these functions
  take to run, fill out the CAPITALIZED PARTS before
  running this file 
  (run using 'node index.js' in the terminal, you'll
  need to comment out some of the functions above!)
*/

const myFac = new Factorial();

console.time("not memoized function time");
console.log("not memoized function");
console.log(noCacheCalcFac(8));
console.log(noCacheCalcFac(8));
console.log(noCacheCalcFac(8));
console.log(noCacheCalcFac(8));
console.timeEnd("not memoized function time");

console.log("memoized function");
console.time("memoized function time");
console.log(myFac.calcFac());
console.log(myFac.calcFac());
console.log(myFac.calcFac());
console.log(myFac.calcFac());
console.timeEnd("memoized function time");

// 13) Memoization Challenge
/*
  Write another class that contains a cache and a method 
  The method should cache answers

  This method should be constant (you can use examples 
    we've covered or come up with your own)
*/

class PleaseWork {
  constructor() {
    this.cache = {};
  }
  cacheAnswers(arr) {
    if (this.cache["arr"]) {
      return this.cache["arr"];
    }
    this.cache["arr"] = [];
    for (let i = 0; i < arr.length; i++) {
      this.cache["arr"].push(arr[i]);
    }
    return this.cache["arr"];
  }
}
const array = ["Taylor", "Michelle", "Splinter"];
const arrayOne = new PleaseWork();
console.log(arrayOne.cacheAnswers(array));

/*
    Copy and paste the method outside the class and
    save it to a new variable
*/

function cacheAnswers(arr) {
  return arr.map((name) => name);
}

/*
    Before you see how much time they take, make a 
    guess as to if one will be faster.
*/

// ANSWER: Class will go faster

// Now fill this out and run your file

// CREATE A NEW INSTANCE OF YOUR CLASS

console.time("not memoized function time");
console.log("not memoized function");
console.log(cacheAnswers(arr));
console.log(cacheAnswers(arr));
console.log(cacheAnswers(arr));
console.log(cacheAnswers(arr));
console.timeEnd("not memoized function time");

console.log("memoized function");
console.time("memoized function time");
console.log(PleaseWork.cacheAnswers());
console.log(PleaseWork.cacheAnswers());
console.log(PleaseWork.cacheAnswers());
console.log(PleaseWork.cacheAnswers());
console.timeEnd("memoized function time");
