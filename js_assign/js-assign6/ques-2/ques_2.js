
function check()
{
    var num1=Number.parseFloat(document.getElementById("n1").value);
    var num2=Number.parseFloat(document.getElementById("n2").value);
    var num3=Number.parseFloat(document.getElementById("n3").value);
     if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3))
     {
        alert("Please enter valid input number");
        return;
      }
      if (num1 == 0 || num2 == 0 || num3 == 0)
       {
        alert("Multiplication will be zero ");
        return;
      }
      if (num1 > 0 && num2 > 0 && num3 > 0)
       {
        document.write(num1 * num2 * num3);
        alert("Multiplication of will have + sign");
        return;
      }
       else if (num1 > 0 && num2 < 0 && num3 < 0)
        {
        document.write(num1 * num2 * num3);
        alert("Multiplication of  will have + sign");
        return;
      }
       else if (num1 < 0 && num2 > 0 && num3 < 0)
        {
            document.write(num1 * num2 * num3);
        alert("Multiplication of  will have + sign");
        return;
      }
      else if (num1 < 0 && num2 < 0 && num3 > 0)
       {
        document.write(num1 * num2 * num3);
        alert("Multiplication of  will have + sign");
        return;
      }
      
      else
       {
        document.write(num1 * num2 * num3);
        alert("Multiplication of  will have - sign");
        return;
      }
    }
