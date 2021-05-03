juiceGrinder = (apples, pinapples) => {
  let juice = `${apples} apples ${pinapples} pinapples tasty isn't`;
  return console.log(juice);
};
juiceGrinder(2, 4);

//    const friends = new Array("micheal " , "michael ", "john");
const friends2 = new Array(1, "michael ", 2, 3, 4, "john");
console.log(friends2);
const friends = ["Alex", "michel", "michales"];
console.log(friends);

friends2[2] = "calsa";
console.log(friends2);

const pornstar = {
  1: "your are girl",
  2: "too small",
  3: "as i say baby",
  four: "small",
  five: "Average",
  6: "Above Average",
  seven: "BIG",
  8: "too Big of Cum Fountain",
};

const { four, five, seven } = pornstar;

console.log(four, five, seven);

for (let i = 1; i < friends.length; i++) {
  console.log(`${friends[i]}`);
}

const quiz = prompt("whats you dick size  1 , 2, 3 ,4 ,5 ,6 ,7 ,8 (OMG)");
console.log(pornstar[quiz]);

const challangeOfFriends = {
  names: "john",

  friends: ["michale", "michal", "johnny"],
};

const sentence = prompt(
  friends[1] +
    " has " +
    friends.length +
    " friends and there best friend is " +
    friends[2]
);
const sentence = prompt(
  challangeOfFriends.names +
    " has " +
    challangeOfFriends.friends.length +
    " friends and there best friend is " +
    challangeOfFriends.friends[1]
);
const sentence = prompt(
  challangeOfFriends[names] +
    " has " +
    challangeOfFriends[friends.length] +
    " friends and there best friend is " +
    challangeOfFriends[friends[1]]
);
console.log(sentence);

/// Array destructuring

let array = ["son", "Goku", "God", "instincts"];

let [familyname, namer] = array;
console.log(familyname, namer);
let [, namer12, godname] = array;
[namer12, godname] = [godname, namer12];
console.log(namer12, godname);
