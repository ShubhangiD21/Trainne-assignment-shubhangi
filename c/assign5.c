

/*5.Write a program for fibonacci series .
Ex - 0 1 1 2 3 5 8 13
*/

#include<stdio.h>
#include<conio.h>
void main()
 {
     int t1=0,t2=1,next,lim;

       printf("enter the max limit of series");
       scanf("%d",&lim);

        for(int i=0;i<lim;i++)
        {
             printf(" %d  ",t1);
             next=t1+t2;
             t1=t2;
             t2=next;
        }

 }
