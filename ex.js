// WAP to remove empty value from given object.
const obj = {

  a: "",

  b: 4,

  c: {

    d: 2,

    e: []

  },

  // f: [1, "a", { g:8, h:null }]

};

// let x = Object.entries(obj)

// for (const key in obj) {
// if (obj[key] !== ''){
//   console.log(`${key}: ${obj[key]}`);
// }
 
// }
// {x.map(item =>{
//   item.map(items=>{
//     if(items !== ){
      
//     }
//   })
// })}

function removeEpmtychar(item) {
  if(item !== ''){
    if(item === Object|| Array){
      console.log(item)
    }
  }
}
removeEpmtychar(obj)

// WAP to remove special characters from given string. 
const str = "asdkjfaskdb$askjdn";

for (let index = 0; index < str.length; index++) {
  const element = str[index];
  // if (element !== '$'){
  //   console.log(element);
  // }
 let string = element.replace(/[^a-zA-Z0-9 ]/g, '')
 console.log(string);
  }

/**
  WAP to convert given string into pascal case, without using inbuilt methods.
  Sample String "hello world";  Expected result: Hello World
 */

 function toPasclecase(str) {
let words =  str.split (' ')
for (let index = 0; index < words.length; index++) {
 
words[index] = words[index].charAt(0).toUpperCase() + words[index].slice(1)
  console.log(words[index])
}
  
 }
 toPasclecase('hello world')

 /**
  WAP to reverse a string, without using inbuilt methods.

  hello --> olleh
 */

  const stri = 'hello'
  for (let index = stri.length-1; index >= 0; index--) {
    console.log(stri[index])
  }
 