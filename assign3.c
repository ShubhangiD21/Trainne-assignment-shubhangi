
/*3. Write a program to print the average of given number of array
   int number[]={2,7,1,4,9,0,1,8}
   int totalnumber[]=8; //Already the know the length of array*/


#include<stdio.h>
#include<conio.h>

 void main()
 {

     int a[40],size,i,j,sum=0,avg;

     printf("enter the size of ary");
     scanf("%d",&size);

     printf("enter the elements of ary");
     for(i=0;i<size;i++)
     {
         scanf("%d",&a[i]);
         sum=sum+a[i];
     }
     avg=sum/size;

     printf("avg of ary is %d ",avg);

 }

