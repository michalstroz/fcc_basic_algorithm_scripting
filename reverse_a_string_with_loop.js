function reverseString(str) {
  let i = str.length - 1;
  let myStr = '';
  while (i >= 0) {
    myStr += str[i];
    i--;
  }
  return myStr;
}

reverseString("hello");
