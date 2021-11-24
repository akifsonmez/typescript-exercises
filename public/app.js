"use strict";
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client,
            this.details = details,
            this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes \u20BA").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var inv1 = new Invoice("akif", "doing something", 23);
var inv2 = new Invoice("afif", "doing something more", 238);
var invoices = [];
invoices.push(inv1);
invoices.push(inv2);
invoices.forEach(function (i) { return console.log(i, i.format()); });
var form = document.querySelector(".new-item-form");
var type = document.querySelector("#type");
var toFrom = document.querySelector("#tofrom");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toFrom.value, details.value, amount.valueAsNumber);
});
