function go()
{
    var num=document.getElementById("num").value;
  //  var str=num.toString();
 //  document.write(str.length);
var op="";
     for(var i=0;i<num.length;i++)
     {
         var s1=Number.parseFloat(num[i]);
         var s2=Number.parseFloat(num[i+1]);
         if(s1%2==0 && s2%2==0)
         {
              op=op+s1+'-';
         }
         else
         {
             op=op+s1;
         }
     }
     document.getElementById("result").value=op;
    

}