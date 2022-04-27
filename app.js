percentageGlobal=0;
document.querySelector("section.people>div>.peopleInput>label>input").placeholder = 0;
//Cyan Border
var myTotalAmountBar = "";
document.querySelector("div.total-amount>input")
  .addEventListener("focus", () => {
    myTotalAmountBar = document.querySelector("div.total-amount");
    myTotalAmountBar.classList.add("ta-Active")
  })
document.querySelector("div.total-amount>input")
  .addEventListener("focusout", () => {
    myTotalAmountBar = document.querySelector("div.total-amount");
    myTotalAmountBar.classList.remove("ta-Active")
  })

var myTotalAmountBar1 = "";
document.querySelector("div.peopleInput>label>input")
  .addEventListener("focus", () => {
    myTotalAmountBar1 = document.querySelector("div.peopleNumber");
    myTotalAmountBar1.classList.add("ta-Active")
  })
document.querySelector("div.peopleInput>label>input")
  .addEventListener("focusout", () => {
    myTotalAmountBar1 = document.querySelector("div.peopleNumber");
    myTotalAmountBar1.classList.remove("ta-Active")
  })

//Error Border
let peopleAmount = document.querySelector("section.people>div>.peopleInput>label>input")
peopleAmount.addEventListener("focusout", () => {
  if (document.querySelector("section.people>div>.peopleInput>label>input").value.length == 1 & document.querySelector("section.people>div>.peopleInput>label>input").value == 0) {
    document.querySelector("#zero").textContent = "Can't be Zero";
    //div class="peopleNumber isZero"
    setTimeout(() => {
      document.querySelector("div.peopleNumber").classList.add("isZero");
      document.querySelector("#zero").style.opacity = 1;
    }, 200);
  } else {
    document.querySelector("div.peopleNumber").classList.remove("isZero");
    document.querySelector("#zero").style.opacity = 0;
  }
})

const tipAmountPerson = document.querySelector("#tipAmountPerson");

const totalPersonNumber = document.querySelector("#totalPersonNumber");

function doit(percentage) {
  percentage = parseInt(percentage);
  var numberPeople = parseInt(document.querySelector("section.people>div>.peopleInput>label>input").value);
  var billAmount = parseFloat(document.querySelector("#totalAmountBill").value)
  
  if(!numberPeople){
    numberPeople = 1;
  }

  if(!percentage){
    percentage = 1;
  }
 
  totalPersonNumber.value = "$"+parseFloat((billAmount + (billAmount * percentage/100 ))/numberPeople).toFixed(2)

  tipAmountPerson.value =  "$"+parseFloat((billAmount * percentage / 100)/5).toFixed(2)

  if(document.querySelector("#totalAmountBill").value.length == ''){
    totalPersonNumber.value = "$0.0";
    tipAmountPerson.value = "$0.0"; 
  }
  if(document.querySelector("section.people>div>.peopleInput>label>input").value.length == ''){
    console.log("18293")
    tipAmountPerson.value = "$0.0"; 
    totalPersonNumber.value = "$0.0"; 
  }


}

document.querySelector("#totalAmountBill")
  .addEventListener("input", () => {
    doit(percentageGlobal)
  })
document.querySelector("#peopleAmountIdk")
  .addEventListener("input", () => {
    doit(percentageGlobal)
  })

let percentages = document.getElementsByClassName("percentages");
for (let i = 0; i < percentages.length; i++) {
  percentages[i].addEventListener("click",()=>{
    document.querySelector("#tipCustom").classList.remove("customActive") & (document.querySelector("#tipCustom").value = null)
    percentageGlobal = percentages[i].innerHTML.split("").splice(0,percentages[i].innerHTML.split("").length-1).join("");
    doit(percentages[i].innerHTML.split("").splice(0,percentages[i].innerHTML.split("").length-1).join(""))
    percentages[i].classList.add("percentageActive")
    let xd = document.getElementsByClassName("percentageActive");
    //Bro idk why i did this, with a simple checkbox it would be more easier xd
    for (let j = 0; j < xd.length; j++) {
        if(percentages[i] != xd[j]){
          xd[j].classList.remove("percentageActive")
        } 
    }
  })
}
   var inputBox = document.getElementById("peopleAmountIdk");
            
                var invalidChars = [
                    "-",
                    "+",
                    "e",
                    "."
                ];

                inputBox.addEventListener("input", function() {
                    this.value = this.value.replace(/[e\+\-\.]/gi, "");
                });
                

                inputBox.addEventListener("keydown", function(e) {
                    if (invalidChars.includes(e.key)) {
                        e.preventDefault();
                    }
                });
          
document.querySelector("#tipCustom").addEventListener("input", (data)=>{
  doit(data.srcElement.value)
  let xd = document.getElementsByClassName("percentageActive");
    //Bro idk why i did this, with a simple checkbox it would be more easier xd
    for (let j = 0; j < xd.length; j++) {
          xd[j].classList.remove("percentageActive")
    }
    data.srcElement.classList.add("customActive")
})
function reset(){
  document.querySelector("#totalPersonNumber").value = "$0.0"
  document.querySelector("#tipAmountPerson").value = "$0.0"
  document.querySelector("#peopleAmountIdk").value = ''
  document.querySelector("#tipCustom").value = ''
  document.querySelector("#tipCustom").classList.remove("customActive")
  document.querySelector("#totalAmountBill").value = ''
  for (let j = 0; j < document.getElementsByClassName("percentageActive").length; j++) {
    document.getElementsByClassName("percentageActive")[j].classList.remove("percentageActive")
}
}