function truncateString(str, num) {
  if (str.length > num) {
    let newStr = "";
    let i = 0;
    while(i < num){
      newStr += str[i];
      i++;
    }
    return newStr + "...";
  } else {
    return str;
  }
}
