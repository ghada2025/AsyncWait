import cors from "cors"
import "dotenv/config"
import express from "express"
import helmet from "helmet"

const app = express()

app.use(cors())
app.use(helmet())
app.use(express.json())
app.use(express.static("public"))

async function iterateWithAsyncAwait() {
    const tableau = ["A", "B", "C", "D", "E"];

    for (const element of tableau) {
        console.log(element);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Attendre 1 seconde
    }
}

iterateWithAsyncAwait();



app.get("/ping", async (req, res) => {
    res.send("pong")
})

app.listen(process.env.PORT, () => {
    console.log("Server is running on port", process.env.PORT)
  })