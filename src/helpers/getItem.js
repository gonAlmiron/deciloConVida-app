import { terrario } from "../data/terrario"


export const getItem = () => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve(terrario)
        }, 2000)
    })
}