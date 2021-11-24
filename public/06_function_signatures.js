// example 1
let sayMyName;
sayMyName = (myName) => {
    console.log(`Hello ${myName}`);
};
sayMyName("Akif");
// example 2
let calculate;
calculate = (num1, num2, add) => {
    return add ? num1 + num2 : num1 - num2;
};
console.log(calculate(6, 2, true));
let logDetail;
logDetail = (user) => {
    console.log(user.username, user.age);
};
logDetail({ username: "Akif", age: 24 });
export {};
