

//  4. Accept the 3 numbers from user and print the maximum number from them.

#include<stdio.h>
#include<conio.h>

void main()
 {
     int a,b,c;
     printf("enter three numbers\n");
     scanf("%d%d%d",&a,&b,&c);
     if(a>b && a>c)
     {
         printf("\n%d  is max",a);

     }
     else if(b>a && b>c)
     {
         printf("\n%d  is max",b);

     }
     else
     {

         printf("\n%d  is greater",c);
     }


}
