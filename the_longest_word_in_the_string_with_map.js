function findLongestWordLength(str) {
  let arr = str.split(" ").map((word) => word.length);
  return Math.max(...arr);
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
