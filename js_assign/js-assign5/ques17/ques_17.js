function avg()
{
var num1=parseFloat(document.getElementById("m1").value);
var num2=parseFloat(document.getElementById("m2").value);
var num3=parseFloat(document.getElementById("m3").value);
var num4=parseFloat(document.getElementById("m4").value);
var num5=parseFloat(document.getElementById("m5").value);
var num6=parseFloat(document.getElementById("m6").value);
var num7=parseFloat(document.getElementById("m7").value);
var num8=parseFloat(document.getElementById("m8").value);
var num9=parseFloat(document.getElementById("m9").value);
var num10=parseFloat(document.getElementById("m10").value);
var add=num1+num2+num3+num4+num5+num6+num7+num8+num9+num10;
var avgg=add/10;
document.write("Avg is "+ avgg);
}


