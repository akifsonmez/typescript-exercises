import { Invoice } from "./classes/Invoice.js";
const inv1 = new Invoice("akif", "doing something", 23);
const inv2 = new Invoice("afif", "doing something more", 238);
const invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(i => console.log(i, i.format()));
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const toFrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
