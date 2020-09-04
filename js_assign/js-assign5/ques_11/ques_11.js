function validate() {
    let brand = document.getElementById("mbbrand").value;
    let model = document.getElementById("mbmodel").value;
    let price = Number.parseFloat(document.getElementById("amount").value);
    console.log(brand, model, price);
    if ( Number.isNaN(price) || !brand || !model ) 
    {
      window.alert("Please enter valid input !!");
      return;
    }
    document.getElementById("result").innerHTML += `Model name : ${model} <br/>`;
    document.getElementById("result").innerHTML += `Brand name : ${brand} <br/>`;
   
    document.getElementById("result").innerHTML += `Price is : ${price}`;
  }