
const calculateBtn=document.querySelector(".calculate");
const loanDetailsWrapper=document.querySelector(".loan-details-wrapper");
const inputAmountRef=document.querySelector(".loan-amount");
const annualInterestRef=document.querySelector(".rateOfInt");
const yearsRef = document.querySelector(".years");
const monthlyAmtRef = document.querySelector(".monthly-amt");
const totalAmtRef = document.querySelector(".total-amt");
const totalIntRef = document.querySelector(".total-int");
const loaderRef=document.querySelector(".loader");



calculateBtn.addEventListener("click",calculateLoan);
inputAmountRef.addEventListener("keydown",updateValue);



function calculateLoan(){
    loaderRef.style.display="block";
    setTimeout(disableLoader,2000);
    const Amount = inputAmountRef.value;
    const ROI = annualInterestRef.value;
    const years = yearsRef.value;
    const months = (Number(yearsRef.value)*12);

    // monthlyAmtRef.innerText = Number();
    const totalInterest = Number((Amount/ROI)*years);
    totalIntRef.innerText = totalInterest;

    const TotalAmount = Number(Amount) + totalInterest;
    totalAmtRef.innerHTML = TotalAmount;

    const monthlyAmount = Number(TotalAmount/12);
    monthlyAmtRef.innerText = monthlyAmount;

}

function disableLoader(){
    loaderRef.style.display="none";
    loanDetailsWrapper.style.display="block";
}

function updateValue(){
    loanDetailsWrapper.style.display="none";
}