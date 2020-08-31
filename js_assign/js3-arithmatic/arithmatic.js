function addition()
{
    let number1=parseFloat(document.getElementById("num1").value);
    let number2=parseFloat(document.getElementById("num2").value);
    let result=number1+number2;
    document.getElementById("output").value = result;
   }

function substraction()
{
    let number1=parseFloat(document.getElementById("num1").value);
    let number2=parseFloat(document.getElementById("num2").value);
     let result=number1-number2;
    document.getElementById("output").value=result;
    //console.log(result);
}

function multiplication()
{
    let number1=parseFloat(document.getElementById("num1").value);
    let number2=parseFloat(document.getElementById("num2").value);
    let result=number1*number2;
    document.getElementById("output").value=result;
   // console.log(result);
}

function division()
{
    let number1=parseFloat(document.getElementById("num1").value);
    let number2=parseFloat(document.getElementById("num2").value);
    let result=number1/number2;
    document.getElementById("output").value=result;
   // console.log(result);
}