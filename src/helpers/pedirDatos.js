import { stock } from "../data/data"

export const pedirDatos = () => {
    return new Promise( (resolve) => {
            setTimeout(() => {
                resolve(stock)
            }, 1500)
        } )
}