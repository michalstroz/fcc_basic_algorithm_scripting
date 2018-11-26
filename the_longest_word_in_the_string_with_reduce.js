function findLongestWordLength(str) {
  return str.split(" ").reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
   }, "").length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
