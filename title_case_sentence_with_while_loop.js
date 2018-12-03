function titleCase(str) {
  str = str.toLowerCase().split(" ");
  let i = 0;
  while(i < str.length){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    i++;
  }
  return str.join(" ");
}

titleCase("I'm a little tea pot");
