import cors from "cors"
import "dotenv/config"
import express from "express"
import helmet from "helmet"

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.static("public"))

//______________Tache 1___________________________________________________________________

async function iterateWithAsyncAwait() {
    const tableau = ["g", "h", "a", "d", "a"];

    for (const element of tableau) {
        console.log(element);
        await new Promise(resolve => setTimeout(resolve, 1000)); 
    }
}

iterateWithAsyncAwait();


//______________Tache 2___________________________________________________________________

async function awaitcall () {
    try{
        const response = await fetch("https://localhost:3000/products")
        if(!response.ok){
            throw new Error("Network response was not ok")
        }
        const data = await response.json()
        console.log(data)
    } catch (err){
        res.status(500).json({ message : "Internal server error", error : err})  
    }
}
awaitcall()

//______________Tache 3___________________________________________________________________

async function function1() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Function 1");
}

async function function2() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Function 2");
}

async function function3() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Function 3");
}

async function chainedAsyncFunctions() {
    try {
        await function1();
        await function2();
        await function3();

        console.log("Toutes les fonctions ont été exécutées !");
    } catch (err) {
        console.error(" Une erreur est survenue :", err);
    }
}

chainedAsyncFunctions();

//______________Tache 4___________________________________________________________________

async function concurrentRequests() {
    try {

        const [data1, data2] = await Promise.all([
            fetch("https://localhost:3000/products").then(res => res.json()),
            fetch("https://localhost:3000/users").then(res => res.json())
        ]);

        console.log(" Données reçues :", { data1, data2 });
    } catch (err) {
        console.error(" Erreur lors des requêtes :", err);
    }
}
concurrentRequests();

//______________Tache 5___________________________________________________________________

async function parallelCalls(urls) {
    try {

        const responses = await Promise.all(
            urls.map(url => fetch(url).then(res => res.json()))
        );

        console.log("Toutes les données reçues :", responses);
    } catch (error) {
        console.error("Erreur lors des requêtes :", error);
    }
}
const urls = [
    "https://localhost:3000/products",
    "https://localhost:3000/products/1",
    "https://localhost:3000/users"
];

parallelCalls(urls);




app.get("/ping", async (req, res) => {
    res.send("pong")
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT)
  })