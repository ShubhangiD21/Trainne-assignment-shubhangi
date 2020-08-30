function getValue(num)
{
    var inputt=document.getElementById('outp');
    switch(num)
        {
            case 1:
                inputt.value +='1';
                break;
            case 2:
                inputt.value +='2';
                break;
            case 3:
                inputt.value +='3';
                break;
            case 4:
                inputt.value +='4';
                break;
            case 5:
                inputt.value +='5';
                break;
            case 6:
                inputt.value +='6';
                break;
            case 7:
                inputt.value +='7';
                break;
            case 8:
                inputt.value +='8';
                break;
            case 9:
                inputt.value +='9';
                break;
            case 0:
                inputt.value +='0';
                break;
            default : 
                inputt.value += num;
        }
}


function operation()
{
           
    let rString = document.getElementById('outp').value;
    let Result = eval(rString);  //10
    document.getElementById('outp').value = Result;
}

    // clear the screen
    function clearData()
    {
        document.getElementById('outp').value="";
    }
    