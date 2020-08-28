function printData()
{
    var data=" ";
     let fName=document.getElementById("fn").value;
     data=data+fName+" ";
     let lName=document.getElementById("ln").value;
     data=data+lName+" ";
     let deg=document.getElementById("de").value;
     data=data+deg+" ";
     let phn=document.getElementById("mb").value;
     data=data+phn+" ";
     let add=document.getElementById("ads").value;
     data=data+add+" ";
     let city=document.getElementById("ci").value;
     data=data+city+" ";
     let sts=document.getElementById("st").value;
     data=data+sts+" ";
     let pin=document.getElementById("pc").value;
     data=data+pin;
       alert(data);
}
 
