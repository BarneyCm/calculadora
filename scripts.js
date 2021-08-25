function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById('bill').Value;
  let serviceQual = document.getElementById('serviceQual').Value;
  let numOfPeople = document.getElementById('people').Value;

  if(bill == "" | serviceQual ==0){
    alert("por favor, preencha os valores")
    return;
  }

  if(numOfPeople == "" | numOfPeople <=1) {
    numOfPeople = 1;
    document.getElementById('each').style.display = "none"
  }else { 
     document.getElementById('each').style.display = "block"
  }

  let total = (bill * serviceQual) / numOfPeople;
  total = total.toFixed(2);
  document.getElementById('Tip').innerHTML = total;
  document.getElementById('totaltip').style.display = "block";
}




document.getElementById('totaltip').style.display = "none";
document.getElementById('each').style.display = "none";

document.getElementById('tipsform').addEventListener("submit", calculateTip);