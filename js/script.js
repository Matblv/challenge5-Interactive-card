//DOM
const btnConfirm = document.getElementById("btnConfirm");
const backgroundBottom = document.getElementById("backgroundBottom");

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
const mmError = document.getElementById("mmError");

const yy = document.getElementById("yy");
const yyInput = document.getElementById("yyInput");
const yyError = document.getElementById("yyError");

const code = document.getElementById("code");
const codeInput = document.getElementById("codeInput");
const codeError = document.getElementById("codeError");

//validations 
let nameValidation = false;
let numberValidation = false;
let mmValidation = false;
let yyValidation = false;
let codeValidation = false;

//expresión regular
let regExp = /[A-z]/g;
let regExpNumb = /[0-9]/g;


inputNameBox.addEventListener("input", () => {
    inputModified(cardName, inputNameBox, errorName, "Jane Appleseed", regExpNumb, "letters");
});

inputNumberBox.addEventListener("input", () => {
    inputNumberBox.value = event.target.value.replace(/\s/g, "").replace(/([0-9]{4})/g, "$1 ").trim();

    inputModified(cardNumbers, inputNumberBox, errorNumber, "0000 0000 0000 0000", regExp, "numbers");
});

mmInput.addEventListener("input", () => {
    mmInput.value = event.target.value.replace(/\s/g, "");

    inputModified(mm, mmInput, mmError, "00", regExp, "numbers");
    // testExpDate(mmInput.value, 1, 12, mmError);
});

yyInput.addEventListener("input", () => {
    yyInput.value = event.target.value.replace(/\s/g, "");

    inputModified(yy, yyInput, yyError, "00", regExp, "numbers");
    // testExpDate(yyInput.value, 22, 30, yyError);
});

codeInput.addEventListener("input", () => {
    codeInput.value = event.target.value.replace(/\s/g, "");

    inputModified(code, codeInput, codeError, "000", regExp, "numbers");
});

function inputModified(cardContent, inputBox, errorDiv, placeHol, regExp, numWord) {
    cardContent.innerHTML = inputBox.value;
    if (inputBox.value === "") return cardContent.innerHTML = placeHol;

    regExp.test(inputBox.value)
        ? errorDiv.innerText = `Wrong format, ${numWord} only`
        : errorDiv.innerText = "";
};

function testExpDate(input, paramet, paramet2, errorBox) {
    let inputInt = parseInt(input);
    if (inputInt < paramet || inputInt > paramet2) errorBox.innerText = "Ingrese una fecha válida";
};

btnConfirm.addEventListener("click", () => {
    event.preventDefault
    if (!inputNameBox.value) {
        errorName.innerText = "Completar campo"
    } else {
        nameValidation = true;
    }

    if (!inputNumberBox.value) {
        errorNumber.innerText = "Completar campo"
    } else {
        if (inputNumberBox.value.length < 19) {
            errorNumber.innerText = "Cantidad de carácteres inferior a lo requerido"
        } else {
            numberValidation = true;
        }
    }
    
    if (!mmInput.value) {
        mmError.innerText = "Completar campo"
    } else {
        testExpDate(mmInput.value, 1, 12, mmError);
        if (mmInput.value.length === 1) {
            let numWithZero = mmInput.value = 0 + mmInput.value
            mm.innerHTML = numWithZero;
        } else {
            mmValidation = true;
        }
    }
    
    
    if (!yyInput.value) {
        yyError.innerText = "Completar campo"
    } else {
        testExpDate(yyInput.value, 22, 30, yyError);
        yyValidation = true;
    }
    
    if (!codeInput.value) {
        codeError.innerText = "Completar campo"
    } else {
        if (codeInput.value.length < 3) {
            codeError.innerText = "Se necesitan 3 números";
        } else {
            codeValidation = true;
        }
    }

    //Full validation
    if (nameValidation === true && numberValidation === true && mmValidation === true && yyValidation === true && codeValidation === true) {
        console.log("je");
        backgroundBottom.innerHTML = 
        `
        <div class="finishDiv">
            <img src="./images/icon-complete.svg">
            <p class="finishTitle">THANK YOU!</p>
            <p class="finishText">We've added your card details</p>
            <button class="btnConfirm" style="margin-top: 40px; min-width: 300px;">Continue</button
        </div>
        `
    }
})