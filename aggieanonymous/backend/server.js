import express from "express"
import cors from "cors"
import comments from "./api/comments.route.js"

const app = express()
const port = 3000;

app.use(cors())
app.use(express.json()) 

app.use("/api/v1/comments", comments)
app.use("*", (req, res) => res.status(404).json( { error: "not found}"}))

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  
export default app 