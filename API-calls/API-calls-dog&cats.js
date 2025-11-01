let url1 = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";

//for random cat facts
async function getFacts(){
    try{
        let res = await axios.get(url1);
        let catFact = res.data.fact;
        return catFact;
    }
    catch(err){
        console.log("Error - ", err);
        return "No fact found";
    }
}

let btnCat = document.querySelector("#btnCat");
let facts = document.querySelector("#facts")

btnCat.addEventListener("click", async () => {
    let fact = await getFacts();
    facts.innerText = fact;
})

//for random dog pictures
async function getImg(){
    try{
        let res = await axios.get(url2);
        let dogImg = res.data.message;
        return dogImg;
    }
    catch(err){
        console.log("Error - ", err);
        return "No image found";
    }
}

let btnDog = document.querySelector("#btnDog");
let image = document.querySelector("#image")

btnDog.addEventListener("click", async () => {
    let img = await getImg();
    image.src = img;
})
