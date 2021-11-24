import { Invoice } from "./classes/Invoice.js";
import { Payment } from "./classes/Payment.js";
let docs = [];
const doc1 = new Invoice("akif", "doing something", 23);
const doc2 = new Payment("afif", "doing something more", 238);
docs.push(doc1);
docs.push(doc2);
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(toFrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(toFrom.value, details.value, amount.valueAsNumber);
    }
    console.log(doc);
});
