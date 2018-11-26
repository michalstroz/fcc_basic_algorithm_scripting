function factorialize(num) {
  if (num < 0) {
    return -1;
  } else if (num === 0) {
    return 1;
  } else {
    for(let i = num - 1; i > 0; i--) {
      num *= i;
    }
    return num;
  }
}

factorialize(5);
factorialize(10);
factorialize(20);
factorialize(0);
