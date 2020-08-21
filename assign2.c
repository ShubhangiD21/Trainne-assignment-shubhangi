
/* 2. Write a program to print the following pattern
  Ex -
            * * * * *
            * * * *
            * * *
            * *
            *
*/


   #include<conio.h>
   #include<stdio.h>
   void main()
   {
       for(int r=1;r<=5;r++)
       {
           for(int c=r;c<=5;c++)
           {
               printf("*");
           }
        printf("\n");
       }

   }
