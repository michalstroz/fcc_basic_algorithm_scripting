function largestOfFour(arr) {
  let i = 0;
  const highestArr = [];

  while(i < arr.length) {
    let highestValue = arr[i][0];
    let j = 1;

    while(j < arr[i].length) {
      if (arr[i][j] > highestValue) {
        highestValue = arr[i][j];
      }
      j++;
    }
    highestArr[i] = highestValue;
    i++;
  }
  return highestArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
