function friend(friends) {
  return friends.filter((e) => e.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
