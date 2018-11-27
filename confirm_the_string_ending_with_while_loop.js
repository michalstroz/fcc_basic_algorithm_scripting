function confirmEnding(str, target) {
  let j = 0;
  let i = str.length - target.length;
  let strLength = str.length;
  while(i < str.length){
    if (str[i] !== target[j]){
      return false;
    }
    i++;
    j++;
  }
  return true;
}

confirmEnding("Bastian", "n");
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
confirmEnding("Abstraction", "action");
confirmEnding("Open sesame", "game");
confirmEnding("He has to give me a new name", "name");
