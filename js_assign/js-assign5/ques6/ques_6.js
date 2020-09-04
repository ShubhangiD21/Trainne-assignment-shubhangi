function print()
{
    var size=document.getElementById("num").value;
    for(var i=2;i<=size;i++)
    {
        if(check(i))
        {
            document.write(i+"  ");
        }
    }
}
function check(x)
{
    var i=0;
    if(x<=1)
    {
        return false;
    }
    for(i=2;i<x;i++)
    {
        if(x%i==0)
        {
            return false;
        }
    }
    return true;
}