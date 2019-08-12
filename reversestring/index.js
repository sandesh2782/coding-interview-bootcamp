// Solution 1:
function reverse1(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

// Solution 2:
function reverse2(str) {
  let reversed = "";
  for (let char of str) {
    reversed = char + reversed;
  }
  return reversed;
}

// Solution 3:
function reverse3(str) {
  return str.split("").reduce((reversed, char) => char + reversed, "");
}

module.exports = {
  reverse1: function(str) {
    return reverse1(str);
  },
  reverse2: function(str) {
    return reverse2(str);
  },
  reverse3: function(str) {
    return reverse3(str);
  }
};
