function upper() 
{
    let str = document.getElementById("ip").value;
    let output = "";
    for (let i = 0; i < str.length; i++) {
      if (i == 0 || str[i - 1] == " ")
       {
    output=output+ str[i].toUpperCase();
      }
       else 
      {
        output=output+ str[i].toLowerCase();
      }
    }
    document.getElementById("result").innerHTML = output;
  }