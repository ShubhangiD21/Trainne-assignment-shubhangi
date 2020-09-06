function fele(ary,n)
{
    if (n === undefined)
     {
        return ary[0];
      }
      return ary.slice(0,n);
    }

function getary()
{
    let a=[1,3,5,7,3];
    let b=['a','b','c','d','e'];
    document.getElementById("result").innerHTML+= `fele(a,2) :: ${fele(a,2)} <br/>`;

    document.getElementById("result").innerHTML+= `fele(b,2) :: ${fele(b,4)} <br/>`;

}