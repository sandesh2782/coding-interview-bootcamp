function palindrome1(str) {
  return (
    str
      .split("")
      .reverse()
      .join("") === str
  );
}

function palindrome2(str) {
  return str.split("").every((char, i) => char === str[str.length - i - 1]);
}

module.exports = {
  palindrome1: function(str) {
    return palindrome1(str);
  },
  palindrome2: function(str) {
    return palindrome2(str);
  }
};
