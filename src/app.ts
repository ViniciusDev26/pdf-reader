import express from "express"
import { upload } from "./middlewares/upload"
import { ReadPdfController } from "./controllers/readPdfController"

const app = express()
const readPdfController = new ReadPdfController()

app.post("/readProductsPdf", upload.single('file'), readPdfController.read)

app.listen(3333, () => {
  console.log("server is running")
})