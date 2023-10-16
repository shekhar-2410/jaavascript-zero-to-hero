//* Object proptotypes
// *Prototypeinheritence
console.log("*****Object prototype****");
const personName = {
    name:'shekhar',
    getName: function () {
      return this.name;
    },
    getRoll: function () {
      return this.roll;
    },
  };

  
//sngle level inheritence
  const personRollNumber = {
    roll:22,
    __proto__: personName,
  };
  
  console.log(personRollNumber.getName(), personRollNumber.getRoll());
  
//multilevel inheritence
  const personBatch = {
    batch:"MCA",
    __proto__:personRollNumber
  }
  const obj3 = (`Person name is -${personBatch.name},Person rollno is- ${personBatch.roll},,Person batch is- ${personBatch.batch}`)
  console.log(obj3)

  
//  converting array in object using prototypes
const cities = ["Delhi","Banglore","Patna","Mumbai"]
Array.prototype.convertIntoObject=function () {
   let newObj={} 
   this.forEach(element=>{
    newObj[element]=element
   })
   return newObj
}
console.log(cities.convertIntoObject());