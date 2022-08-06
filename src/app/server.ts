import app from "./index.js"
import dotenv from "dotenv"
dotenv.config()

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log("Server online and listening on port " + port)
})