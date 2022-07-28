let DarthVader = {
    "Allegiance" : "Dark Side",
    "Weapon" : "LightSabre",
    "Sith" : "Lord",
    "Empire" : true,
    "LigthSabre" : true
}
console.log(DarthVader)


console.log(`Darth Vader's allegiance is to the ${DarthVader.Allegiance}`);
console.log(`Darth Vader's weapon of choice is a ${DarthVader.Weapon}`);
console.log(`Darth Vader is a sith? ${DarthVader.Sith}`);
console.log(`Darth Vader is a Jedi? ${DarthVader.Sith ? "false" : "true"}`);

let myArray = ["hello", "everyone"];
//console.log(myArray.length);

myArray.push("How", "Are", "You?");
console.log(myArray.length);
myArray.shift();
console.log(myArray);

let age = 27;
console.log(age>18 ? "False" : "True");

let dogs = {
    dog1 : {
    "breed" : "Collie",
    "size" : "Big",
    "Long-hair" : true
    },

    dog2 : {
        "breed" : "Collie",
        "size" : "Big",
        "Long-hair" : true,
        "Loud" : true,
        "Hungry" : false
    
}

}

dogs.dog1.Shampoo = true
console.log(dogs)
