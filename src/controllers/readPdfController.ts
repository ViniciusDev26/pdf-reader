import { Request, Response } from "express";
import { extractProductsFromPdf } from "../services/extractProductsFromPdf";
import { resolve } from "path";

export class ReadPdfController {
  async read(req: Request, res: Response) {
    const { initialWord, finishWord } = req.body

    await extractProductsFromPdf({
      path: resolve(__dirname, "..", "..", req.file!.path),
      initialWord,
      finishWord,
      cb(response) {
        res.json(response)          
      },
    })
  }
}