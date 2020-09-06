
function lastele(ary,n)
{
    if (n === undefined)
    {
        return ary[ary.length - 1];
    }
     return ary.slice(ary.length - n);
}


function getary()
{
    let a=[1,3,5,7,3];
    let b=['a','b','c','d','e'];
    document.getElementById("result").innerHTML += `lastele(a,3) :- ${lastele(a,3)} <br/>`;
}