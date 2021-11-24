import { HasFormatter } from "../interfaces/HasFormatter"

export class Invoice implements HasFormatter {
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
