function area()
{
    var len1=parseFloat(document.getElementById("num1").value);
    var len2=parseFloat(document.getElementById("num2").value);
    var len3=parseFloat(document.getElementById("num3").value);
    var add=len1+len2+len3;
    var p=add/2;
    var areaa=Math.sqrt(p*((p-len1)*(p-len2)*(p-len3)));
   document.write("Area of traingle is  : : "+areaa);
   
}