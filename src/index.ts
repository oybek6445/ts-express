type ProductType = "book" | "pen"

interface Product {
    type: ProductType
    price: number
    }

function logMessage(message: string): void{
    console.log(message);
}

logMessage('Hello World')