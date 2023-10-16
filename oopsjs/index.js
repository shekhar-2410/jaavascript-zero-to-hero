// const circle = {
//     radius:1,
//     location:{
//         x:1,
//         y:1
//     },
//     draw:function () {
//       console.log(this.location.x*this.location.y);  
//     }
// }

// Factory Function
function createCircle(radius) {
    return{
        radius,
        draw:function () {
            console.log("draw",radius);  
          }
        
    }
}
const circle = createCircle(1)

function createPerson(name, age) {
    // Create an empty object
    const person = {};
  
    // Set properties
    person.name = name;
    person.age = age;
  
    // Define methods
    person.sayHello = function() {
      console.log(`Hello, my name is ${this.name}`);
    };
  
    // Return the created object
    return person;
  }
  
  // Usage
  const john = createPerson("John", 30);
  console.log(john.name); // Output: "John"
  john.sayHello(); // Output: "Hello, my name is John"
  
  const jane = createPerson("Jane", 25);
  console.log(jane.name); // Output: "Jane"
  jane.sayHello(); // Output: "Hello, my name is Jane"
  


// constructor function 
function Circle(radius){
    this.radius = radius
    this.draw = function() {
       console.log("draw") 
    }
}
const another = new Circle (1) //* new--create an empty object
                              //* new--set this to  ponit that object
                            //* new--it will return the object from this finction