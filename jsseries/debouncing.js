// debouncing
let count = 0
function getData() {
    console.log("fetchingdata"+ count++);
}

function myDebounce(call,d) {
    let timer;
    return function(...arg) {
      if (timer) clearTimeout(timer);
     timer= setTimeout(()=>{
        call();
      },d)  
    }
}
const skipTime = myDebounce(getData,1000)