function gcd()
{
    var num1=parseFloat(document.getElementById("no1").value);
    var num2=parseFloat(document.getElementById("no2").value);

    var gcd=0;
    var i;
    for(i=1;i<=num1 && i<=num2;i++)
    {
        if(num1%i==0 && num2%i==0)
        {
            gcd=i;
        }
    }
    
    document.getElementById("result").value=gcd;

}