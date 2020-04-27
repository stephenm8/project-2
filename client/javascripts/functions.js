// jshint esversion: 6
//req 3a
let revWord = str => {
  let array = str.split("");
  let result = "";
  for (char of array) {
    result = char + result;
  }
  return result;
};

let revWords1 = sent => {
  let arr = sent.split(" ");
  let result = "";
  for (var i = 0; i < sent.length; i++) {
    revWord(arr[i]);
  }
  return result;
};
console.log(revWords1("Web app dev"));

//req 3b
let revWords2 = sent => {
  let arr = sent.split(" ");
  let result = "";
  arr.forEach(char => {
    revWord(arr[i]);
  });
  return result;
};
console.log(revWords2("Web app dev"));

//req 3c
let revWords3 = sent => {
  let arr = sent.split(" ");
  let result = "";
  for (char of arr) {
    revWord(arr[i]);
  }
  return result;
};
console.log(revWords3("Web app dev"));

let containsDuplicates = s => {
  let cArr = [0, 0, 0, 0],
    code;
  for (let i in cArr) {
    code = s[i].toUpperCase().charCodeAt(0) - 65;
    //console.log(code);
    if (cArr[code] > 0) {
      return true;
    } else {
      cArr[i]++;
    }
  }
  return false;
};
