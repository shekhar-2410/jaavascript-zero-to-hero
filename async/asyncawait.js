
async function newFunct(a,b){
    return a+b
}

newFunct(5,9).then((x)=>{
   setTimeout(()=>{alert(x)},1000) 
})
console.log('Hi There')

async function weatherSet() {
    let delhiWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Delhi Wether ---22 deg🌞");
      }, 4000);
    });
  
    let bangaloreWeather = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Banglore Wether --- 18 deg🌞");
      }, 7000);
    });
  
    console.log("fetching delhi weather please ...");
    let delW = await delhiWeather;
    console.log('fetched delhi weather'+ delW)
    console.log("fetching banglore weather please ...");
    let bagW = await bangaloreWeather;
    console.log('fetched banglore weather'+  bagW)
    return {
        delhiWeather: delW,
        bangaloreWeather: bagW,
      };
  }
  
  console.log("weather alert");
  weatherSet()
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
  
  