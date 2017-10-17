//constructor function
class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }
  greet() {
    console.log("ello");
  }
}



module.exports = Person;
