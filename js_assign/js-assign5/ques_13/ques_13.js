function check()
{
   
      var strr=document.getElementById("str").value;
      if (!strr)
       {
        alert("Please enter valid input string");
        return;
      }

      var visited=[];
      var str2=strr;
      var i,j,cnt=0;
      for(i=0;i<strr.length;i++)
      {
          cnt=0;
          for(j=0;j<strr.length;j++)
          {
                  if(strr[i]==str2[j] && !visited[j])
                  {
                      visited[j]=true;
                      cnt++;
                  }
          }
          
          if(cnt>1)
          {
          document.write(strr[i]+" ::::  "+ cnt +"<br>");
          }
          if(cnt==1)
          {
            document.write(strr[i]+" ::::  "+ cnt +"<br>");
       
          }
      }


}

