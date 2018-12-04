function mutation(arr) {
  return [...arr[1].toLowerCase()].every((char) =>  arr[0].toLowerCase().indexOf(char) !== -1);
}

mutation(["hello", "hey"]);
