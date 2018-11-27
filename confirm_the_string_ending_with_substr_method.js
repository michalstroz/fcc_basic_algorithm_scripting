function confirmEnding(str, target) {
  return str.substr(-target.length) === target;
}
confirmEnding("Bastian", "n");
confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain");
confirmEnding("Abstraction", "action");
confirmEnding("Open sesame", "game");
confirmEnding("He has to give me a new name", "name");
