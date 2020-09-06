function check()
{
    var n1=Number.parseFloat(document.getElementById("n1").value);
    var n2=Number.parseFloat(document.getElementById("n2").value);
    var n3=Number.parseFloat(document.getElementById("n3").value);
    var n4=Number.parseFloat(document.getElementById("n4").value);
    var n5=Number.parseFloat(document.getElementById("n5").value);
   
    if (Number.isNaN(n1) || Number.isNaN(n2) || Number.isNaN(n3) || Number.isNaN(n4) || Number.isNaN(n5))
    {
       alert("Please enter valid input number");
       return;
     }

     if(n1>n2 && n1>n3 && n1>n4 && n1>n5)
     {
         alert(n1 +" is greater");
     }
    
     else if(n2>n1 && n2>n3 && n2>n4 && n2>n5)
     {
        alert(n2 +" is greater");
     }
     else if(n3>n1 && n3>n2 && n3>n4 && n3>n5)
     {
        alert(n3 +" is greater");
     }
     else if(n4>n1 && n4>n2 && n4>n3 && n4>n5)
     {
        alert(n4 +" is greater");
     }

     else
     {
         alert(n5 +" is greater");
     }

}
