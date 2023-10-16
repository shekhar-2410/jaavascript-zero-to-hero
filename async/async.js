const say = "Hellow"
console.log(say)
function gretting(value){
    console.log(value)
}
gretting("Hellow Welocme here!")
setTimeout(()=>{console.log('Hellow World')},1000)
setTimeout(() => {
    gretting('');
}, 4000);