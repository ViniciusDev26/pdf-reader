import extract from "pdf-text-extract"

type ExtractProductsFromPdfParams = {
  path: string
  initialWord: string
  finishWord: string
  cb: (response: string[]) => any
}

export async function extractProductsFromPdf({ path, initialWord, finishWord, cb }: ExtractProductsFromPdfParams) {
  extract(path, (err: Error, pages: string[]) => {
    if(pages.length === 0) return cb([]);

    const regex =  /\d+\s(.*?)\s[\d]{8}/g;
    const currentPage = pages[0]
    const productsString = currentPage
      .split(finishWord)[0]
      .split(initialWord)[1]
      .match(regex)

    const productsArr = productsString?.map(row => {
      const result = row.replaceAll(/\d/g, '').trim();
      return result
    }) ?? []

    cb(productsArr)
  })
}