// const backgroundBottom = document.getElementById("backgroundBottom")
// const btnConfirm = document.getElementById("btnConfirm");
// const confirmStateMob = document.getElementById("confirmStateMob");

// btnConfirm.addEventListener("click", () => {
//     backgroundBottom.style.display = "none";
//     confirmStateMob.style.display = "flex";
// });

// let expReg = /[a-zA-Z]\s?[a-zA-Z]?/g;
// let test = expReg.test(name);
// inputNameBox.addEventListener("submit", () => {
//     alert("xd")
// })

//NOMBRE
const cardName = document.getElementById("cardName");
const inputNameBox = document.getElementById("inputNameBox");
const errorName = document.getElementById("errorName");

//NUMERO
const cardNumbers = document.getElementById("cardNumbers");
const inputNumberBox = document.getElementById("inputNumberBox");
const errorNumber = document.getElementById("errorNumber");

//exp date
const mm = document.getElementById("mm");
const mmInput = document.getElementById("mmInput");
const yy = document.getElementById("yy");
const yyInput = document.getElementById("yyInput");
const code = document.getElementById("code");
const codeInput = document.getElementById("codeInput");
const codeError = document.getElementById("codeError");

//expresión regular
let regExp = /[A-z]/g;


inputNameBox.addEventListener("input", () => {
    cardName.innerHTML = inputNameBox.value;
    if (inputNameBox.value === "") return cardName.innerHTML = "Jane Appleseed";
    
    !regExp.test(inputNameBox.value)
    ? errorName.innerText = "Wrong format, letters only"
    : errorName.innerText = "";
    console.log(!regExp.test(inputNameBox.value));
});

inputNumberBox.addEventListener("input", () => {
    cardNumbers.innerHTML = inputNumberBox.value;
    if (inputNumberBox.value === "") return cardNumbers.innerHTML = "0000 0000 0000 0000";
    
    if (regExp.test(inputNumberBox.value)) {
        errorNumber.innerText = "Wrong format, numbers only";
    } else {
        inputNumberBox.value = event.target.value.replace(/\s/g, "").replace(/([0-9]{4})/g, "$1 ").trim();
        errorNumber.innerText = "";
    }
});

mmInput.addEventListener("input", () => {
    mm.innerHTML = mmInput.value;
    if (mmInput.value === "") return mm.innerHTML = "00"
    
    regExp.test(mmInput.value)
        ? mmError.innerText = "Wrong format, numbers only"
        :mmError.innerText = "";
})

yyInput.addEventListener("input", () => {
    yy.innerHTML = yyInput.value;
    if (yyInput.value === "") return yy.innerHTML = "00"
    
    regExp.test(yyInput.value)
        ? yyError.innerText = "Wrong format, numbers only"
        :yyError.innerText = "";
})

codeInput.addEventListener("input", () => {
    code.innerHTML = codeInput.value;
    if (codeInput.value === "") return code.innerHTML = "000"
    
    regExp.test(codeInput.value)
        ? codeError.innerText = "Wrong format, numbers only"
        :codeError.innerText = "";
})