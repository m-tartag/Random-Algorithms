// Human creator

function Human(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.sayName = function() {
    console.log(`My name is ${firstName} ${lastName}`);
  };
}

// Init Humans

const kevin = new Human('Kevin', 'Michaels', 55);
const tim = new Human('Tim', 'Allen', 39);
const mary = new Human('Mary', 'White', 44);

kevin.sayName();
tim.sayName();
mary.sayName();
