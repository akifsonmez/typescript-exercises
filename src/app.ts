import { Invoice } from "./classes/Invoice.js"
import { Payment } from "./classes/Payment.js"
import { HasFormatter } from "./interfaces/HasFormatter.js"

let docs: HasFormatter[] = []

const doc1 = new Invoice("akif", "doing something", 23)
const doc2 = new Payment("afif", "doing something more", 238)

docs.push(doc1)
docs.push(doc2)


const form = document.querySelector(".new-item-form") as HTMLFormElement
const type = document.querySelector("#type") as HTMLInputElement
const toFrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    let doc: HasFormatter;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber)
    }
    else{
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber)
    }
    console.log(doc)
})