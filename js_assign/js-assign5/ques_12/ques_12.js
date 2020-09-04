function m1()
{
    var num1=parseFloat(prompt("enter 1st number"));
    
    m2(num1);
}
function m2(n)
{
    var m=n;
    var num2=parseFloat(prompt("enter 2nd number"));
    add(m,num2);
}

function add(x,y)
{
    var sum=x+y;
    
    document.write("addition is  :: "+sum);
}