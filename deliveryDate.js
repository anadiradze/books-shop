const date = new Date();
let day = date.getDate();
if (day < 10) {
  day = "0" + day;
}
let month = date.getMonth() + 1;
if (month < 10) {
  month = "0" + month;
}
const year = date.getFullYear();
const minDate = `${year}-${month}-${day+1}`;
document.getElementById("delivery").setAttribute("min", minDate);

let checks = document.querySelectorAll(".maxTwoCheck");
let maximumChecks = 2;
for (let i = 0; i < checks.length; i++) checks[i].onclick = allCheckevents;
function allCheckevents(event) {
  let checkedChecks = document.querySelectorAll(".maxTwoCheck:checked");
  if (checkedChecks.length >= maximumChecks + 1) return false;
}

const form = document.getElementById("form");

const formInputs = document.getElementsByClassName("allInputs");
const formSpans = document.getElementsByClassName("form__span");
for (let i = 0; i < formInputs.length; i++) {
  document.getElementById("completeBtn").addEventListener("click",()=>{
    formInputs[i].addEventListener("onchange", () => {
      buttonUpdate();
    });
    formInputs[i].classList.add("inputValidation");
    if(i<5){
      formSpans[i].classList.add("spanValidation");
    }
    function passvalue(){
      const street = document.getElementById("street").value
      const house = document.getElementById("house").value
      const flat = document.getElementById("flat").value
      const fname=document.getElementById("fname").value
      const lname=document.getElementById("lname").value
      localStorage.setItem("textvalue",street)
      localStorage.setItem("textvalue1",house)
      localStorage.setItem("textvalue2",flat)
      localStorage.setItem("textvalue3",fname)
      localStorage.setItem("textvalue4",lname)

      return false
    }
    passvalue()
  });
}
function buttonUpdate() {
  document.getElementById("completeBtn").disabled = !form.checkValidity();
}

