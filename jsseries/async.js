console.log("****asyn/await/promise/callback****");

// Async Js Prog
// Callback , Promise, Async && Await

const personData = [
    { name: "Ajay", profession: "Software Engineer" },
    { name: "Benny", profession: "Software Engineer" },
  ];
  
  async function getDetail() {
    for (const items of personData) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(items.name);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(items.profession);
    }
  }
  
  getDetail();
  
