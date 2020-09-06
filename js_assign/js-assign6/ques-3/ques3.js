function sort()
{
var num1=Number.parseFloat(document.getElementById("n1").value);
var num2=Number.parseFloat(document.getElementById("n2").value);
var num3=Number.parseFloat(document.getElementById("n3").value);

if (Number.isNaN(num1) || Number.isNaN(num2) || Number.isNaN(num3))
 {
    alert("Please enter valid input number");
    return;
  }
  var temp;
  var ary=[num1,num2,num3];
   for(var i=0;i<ary.length;i++)
   {
       for(var j=0;j<(ary.length)-1;j++)
       {
           if(ary[j]<ary[j+1])
           {
              temp=ary[j];
              ary[j]=ary[j+1];
              ary[j+1]=temp;
           }
       }
   }
document.write("ary after sorting is :: "+"<br>");
for(var j=0;j<ary.length;j++)
{
    document.write("  "+ary[j]);
}

}