class Invoice {
    private client: string
    private details: string
    private amount: number

    constructor(client: string, details: string, amount: number) {
        this.client = client,
            this.details = details,
            this.amount = amount
    }

    format() {
        return `${this.client} owes ₺${this.amount} for ${this.details}`
    }
}

const inv1 = new Invoice("akif", "doing something", 23)
const inv2 = new Invoice("afif", "doing something more", 238)

const invoices: Invoice[] = []
invoices.push(inv1)
invoices.push(inv2)

invoices.forEach(i => console.log(i, i.format()))


const form = document.querySelector(".new-item-form") as HTMLFormElement
const type = document.querySelector("#type") as HTMLInputElement
const toFrom = document.querySelector("#tofrom") as HTMLInputElement
const details = document.querySelector("#details") as HTMLInputElement
const amount = document.querySelector("#amount") as HTMLInputElement

form.addEventListener("submit", (e: Event) => {
    e.preventDefault()
    console.log(
        type.value,
        toFrom.value,
        details.value,
        amount.valueAsNumber
    )
})