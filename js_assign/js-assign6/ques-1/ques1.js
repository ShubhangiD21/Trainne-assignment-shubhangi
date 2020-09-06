function large()
{
    var num1=parseFloat(document.getElementById("no1").value);
    var num2=parseFloat(document.getElementById("no2").value);

    if(num1>num2)
    {
        document.write("Greatest number is : "+num1);
    }
    else
    {
        document.write("Greatest number is : "+num2);
    }

}