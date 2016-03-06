/*function Person(config) {
    this.name = config.name;
    this.age = config.age;
}
 
Person.prototype.getAge = function() {
    return this.age;
};
 
var tilo = new Person({name:"Tilo", age:23 });

console.log(tilo.getAge());*/


/*
EXAMPLE 2
function Plant () {
​this.country = "Mexico";
​this.isOrganic = true;
}
​
​// Add the showNameAndColor method to the Plant prototype property​
Plant.prototype.showNameAndColor =  function () {
console.log("I am a " + this.name + " and my color is " + this.color);
}
​
​// Add the amIOrganic method to the Plant prototype property​
Plant.prototype.amIOrganic = function () {
​if (this.isOrganic)
console.log("I am organic, Baby!");
}
​
​function Fruit (fruitName, fruitColor) {
​this.name = fruitName;
​this.color = fruitColor;
}
​
​// Set the Fruit's prototype to Plant's constructor, thus inheriting all of Plant.prototype methods and properties.​
Fruit.prototype = new Plant ();
​
​// Creates a new object, aBanana, with the Fruit constructor​
​var aBanana = new Fruit ("Banana", "Yellow");
​
​// Here, aBanana uses the name property from the aBanana object prototype, which is Fruit.prototype:​
console.log(aBanana.name); // Banana​
​
​// Uses the showNameAndColor method from the Fruit object prototype, which is Plant.prototype. The aBanana object inherits all the properties and methods from both the Plant and Fruit functions.​
console.log(aBanana.showNameAndColor()); // I am a Banana and my color is yellow.


*/
/*Example 3*/
function user(){
	this.name = "Iqrar Raza";
	this.designation = "Learner";
	this.isEligible = true;
}

user.prototype.showEmployee = function(){
	console.log("We have a employee name" + this.name + " and he is a quick " + this.designation);
}

user.prototype.isHeEligible = function(){
	if(this.isEligible){
		console.log("Yes, he is eligible for this task.");
	}
}

function Employee(employeeName, employeeDesignation){
	this.name = employeeName;
	this.designation = employeeDesignation;
}

Employee.prototype = new user();
var company = new Employee("Raza New", "Learner NEW");


company.isHeEligible();

company.showEmployee();