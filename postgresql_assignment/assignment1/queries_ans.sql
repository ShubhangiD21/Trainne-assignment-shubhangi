CREATE DATABASE ORG;
SHOW DATABASES;
USE ORG;

/*************worker table**********************

create table worker(worker_id number(10) ,
constraints  w_id primary key(worker_id),
 first_name varchar(20),
 last_name varchar(20),
 salary number(30),
 joining_date date,
 department varchar(10));


insert into worker values(001,'Monika','Arora',100000,
to_date('14-02-20 09.00.00','DD-MM-YY HH24.MI.SS'),'HR');

insert into worker values(002, 'Niharika', 'Verma', 80000,
to_date('14-06-11 09.00.00','DD-MM-YY HH24.MI.SS'), 'Admin');

insert into worker values(003, 'Vishal', 'Singhal', 300000,
to_date('14-02-20 09.00.00','DD-MM-YY HH24.MI.SS'), 'HR');

insert into worker values(004, 'Amitabh', 'Singh', 500000,
to_date('14-02-20 09.00.00','DD-MM-YY HH24.MI.SS'), 'Admin');

insert into worker values(005, 'Vivek', 'Bhati', 500000,
to_date('14-06-11 09.00.00','DD-MM-YY HH24.MI.SS'), 'Admin');

insert into worker values(006, 'Vipul', 'Diwan', 200000,
to_date('14-06-11 09.00.00','DD-MM-YY HH24.MI.SS'), 'Account');

insert into worker values(007, 'Satish', 'Kumar', 75000,
to_date('14-01-20 09.00.00','DD-MM-YY HH24.MI.SS'), 'Account');

insert into worker values(008, 'Geetika', 'Chauhan', 90000,
to_date('14-04-11 09.00.00','DD-MM-YY HH24.MI.SS'), 'Admin');
commit;



/********************Bonus table*******************

 create table bonus(worker_ref_id number(20),
 bonus_amount number(20),
 bonus_date date,
 constraints bnuss foreign key (worker_ref_id)
 references worker(worker_id)
  on delete cascade);


insert into bonus values(001, 5000, to_date('16-02-20','DD-MM-YY'));
insert into bonus values(002, 3000, to_date('16-06-11','DD-MM-YY'));
insert into bonus values(003, 4000, to_date('16-02-20','DD-MM-YY'));
insert into bonus values(001, 4500, to_date('16-02-20','DD-MM-YY'));
insert into bonus values(002, 3500, to_date('16-06-11','DD-MM-YY'));


/******* title table*******/

drop table title

create table title(
worker_ref_id number(10),
worker_title varchar(15),
affected_from date,
constraints ttl foreign key (worker_ref_id)
 references worker(worker_id)
 on delete cascade);

 drop table title

insert into title values(001, 'Manager','20-feb-2016');
insert into title values(002, 'Executive', '11-jun-2016');
insert into title values(008, 'Executive',  '11-jun-2016');
insert into title values(005, 'Manager', '11-jun-2016');
insert into title values(004, 'Asst. Manager', '11-jun-2016');
insert into title values(007, 'Executive', '11-jun-2016');
insert into title values(006, 'Lead', '11-jun-2016');
insert into title values(003, 'Lead', '11-jun-2016');




























               :: :: QUERIES SOLUTION :: ::



************************************************************************************************

Q-1. Write an SQL query to fetch “FIRST_NAME” from Worker table using the alias name as <WORKER_NAME>.

  select first_name as worker_name from worker;



************************************************************************************************

Q-2.Write an SQL query to fetch “FIRST_NAME” from Worker table in upper case.

select upper(first_name) from worker;



************************************************************************************************

Q-3.Write an SQL query to fetch unique values of DEPARTMENT from Worker table.

 select distinct(department)from worker;


************************************************************************************************


Q-4.Write an SQL query to print the first three characters of  FIRST_NAME from Worker table
 
select substr(first_name,1,3) from worker;



************************************************************************************************

Q-5.Write an SQL query to find the position of the alphabet (‘a’) in the first name column ‘Amitabh’ from Worker table.

select instr(first_name,'a') from worker 
   where first_name='Amitabh';


************************************************************************************************

Q-6. Write an SQL query to print the FIRST_NAME from Worker table after removing white spaces from the right side.

 select rtrim(first_name) from worker;


************************************************************************************************

Q-7. Write an SQL query to print the DEPARTMENT from Worker table after removing white spaces from the left side.

 select ltrim(department) from worker; 


************************************************************************************************

Q-8. Write an SQL query that fetches the unique values of DEPARTMENT from Worker table and prints its length

 select distinct length(department) from worker;

************************************************************************************************


Q-9. Write an SQL query to print the FIRST_NAME from Worker table after replacing ‘a’ with ‘A’.
 
select replace(first_name,'a','A') from worker;


************************************************************************************************

Q-10. Write an SQL query to print the FIRST_NAME and LAST_NAME from Worker table into a single column COMPLETE_NAME. A space char should separate them.

 select first_name || '  '|| last_name 
    as complete_name from worker;

************************************************************************************************

Q-11. Write an SQL query to print all Worker details from the Worker table order by FIRST_NAME Ascending.
 
select * from worker order by first_name;

************************************************************************************************

Q-12. Write an SQL query to print all Worker details from the Worker table order by FIRST_NAME Ascending and DEPARTMENT Descending.

 select * from worker order by first_name asc,department  desc;


************************************************************************************************

Q-13. Write an SQL query to print details for Workers with the first name as “Vipul” and “Satish” from Worker table. 

select * from worker where first_name IN('Vipul','Satish');


************************************************************************************************

Q-14. Write an SQL query to print details of workers excluding first names, “Vipul” and “Satish” from Worker table.

 select * from worker where first_name NOT IN('Vipul','Satish');


************************************************************************************************

Q-15. Write an SQL query to print details of Workers with DEPARTMENT name as “Admin”.

select * from worker where department='Admin';

************************************************************************************************


Q-16. Write an SQL query to print details of the Workers whose FIRST_NAME contains ‘a’.

 select * from worker where first_name like '%a%';



************************************************************************************************

Q-17. Write an SQL query to print details of the Workers whose FIRST_NAME ends with ‘a’.
       
     select * from worker where first_name like '%a';


************************************************************************************************

Q-18. Write an SQL query to print details of the Workers whose FIRST_NAME ends with ‘h’ and contains six alphabets.

     select * from worker
     where (trim(first_name) LIKE '%h')
     AND (length(first_name)=6);

************************************************************************************************

Q-19. Write an SQL query to print details of the Workers whose SALARY lies between 100000 and 500000.
 
select * from worker where salary between 100000 AND 500000;


************************************************************************************************

Q-20. Write an SQL query to print details of the Workers who have joined in Feb’2014.
    
 select * from worker where to_char(joining_date,'mon')='feb';


************************************************************************************************

Q-21. Write an SQL query to fetch the count of employees working in the department ‘Admin’.

 select count(department) from worker where department='Admin';


************************************************************************************************

 Q-22. Write an SQL query to fetch worker names with salaries >= 50000 and <= 100000.

   select first_name from worker
    where salary between 50000 And 100000;


************************************************************************************************

Q-23. Write an SQL query to fetch the no. of workers for each department in the descending order.
    
 select department,count(*) 
    from worker group by department
    order by count(*)desc ;

************************************************************************************************

Q-24. Write an SQL query to print details of the Workers who are also Managers.
 
   select w.first_name , t.worker_title 
    from worker w inner join title t
    on w.worker_id=t.worker_ref_id 
    and t.worker_title in('Manager');
     

************************************************************************************************

Q-25. Write an SQL query to fetch duplicate records having matching data in some fields of a table.

     select worker_title, affected_from, 
    COUNT(*) as repeated_value 
    from Title
    GROUP BY worker_title, affected_from
    having COUNT(*)>1;


************************************************************************************************


Q-26. Write an SQL query to show only odd rows from a table.

     select * from 
    (select rownum rw,first_name,last_name from worker)
    where mod(rw,2)<>0 ;
    


************************************************************************************************

Q-27. Write an SQL query to show only even rows from a table.

   select * from 
    (select rownum rw,first_name,last_name from worker)
    where mod(rw,2)=0 ;
    

************************************************************************************************

Q-28. Write an SQL query to clone a new table from another table.
  
 create table clone_table 
   as select * from  worker;
   

************************************************************************************************


Q-29. Write an SQL query to fetch intersecting records of two tables.

 select worker_id from worker 
    intersect
    select worker_ref_id from title;
    

************************************************************************************************


Q-30. Write an SQL query to show records from one table that another table does not have.
    select worker_id from worker 
    minus
    select worker_ref_id from title;
   

************************************************************************************************

 Q-31. Write an SQL query to show the current date and time.

 select current_timestamp from dual;


************************************************************************************************

Q-32. Write an SQL query to show the top n (say 10) records of a table.

 select * from worker where rownum<11;
 

************************************************************************************************

Q-33. Write an SQL query to determine the nth (say n=5) high est salary from a table. 
 
     select max(salary) from worker 
     where salary<(select max(salary) from worker 
     where salary<(select max(salary) from worker 
     where salary<(select max(salary) from worker
     where salary<(select max(salary) from worker))));


************************************************************************************************

Q-34. Write an SQL query to determine the 5th highest salary without using TOP or limit method.

     select max(salary) from worker 
    where salary<(select max(salary) from worker 
     where salary<(select max(salary) from worker 
     where salary<(select max(salary) from worker
     where salary<(select max(salary) from worker))));


************************************************************************************************

Q-35. Write an SQL query to fetch the list of employees with the same salary.

   select w1.* FROM worker w1, worker w2 
  WHERE (w1.salary = w2.salary) 
  AND (w1.worker_id != w2.worker_id);


************************************************************************************************

Q-36. Write an SQL query to show the second highest salary from a table.

    select max(salary) from worker 
     where salary<(select max(salary) from worker);



************************************************************************************************

 Q-37. Write an SQL query to show one row twice in results from a table.

     select first_name,last_name from worker w1
    union all
    select first_name,last_name from worker w2;
    

************************************************************************************************

Q-38. Write an SQL query to fetch intersecting records of two tables.
    
    select salary from worker
    intersect
    select bonus_amount from bonus;
    

************************************************************************************************

Q-39. Write an SQL query to fetch the first 50% records from a table.

    select * from worker
    where  worker_id <= (select count(last_name)/2 FROM worker);


************************************************************************************************

Q-40. Write an SQL query to fetch the departments that have less than five people in it.

    select department ,count(last_name)from worker
    having count(last_name)<5
    group by department;  
    
************************************************************************************************

 
Q-41. Write an SQL query to show all departments along with the number of people in there.

     select department ,count(last_name)from worker
      group by department;

************************************************************************************************
  
    
42)** Q-42. Write an SQL query to show the last record from a table.

      select *  from worker
      order by worker_id desc 
      fetch First 1 rows only;


************************************************************************************************

Q-43. Write an SQL query to fetch the first row of a table.

    select * from worker
     where rownum<2;

************************************************************************************************


Q-44. Write an SQL query to fetch the last five records from a table. 

    select * from worker
    where worker_id>(select count(worker_id)-5 FROM Worker);

************************************************************************************************


Q-45. Write an SQL query to print the name of employees having the highest salary in each department.

     select first_name from worker
     where salary in( select max(salary) from worker
     group by department);

************************************************************************************************


Q-46. Write an SQL query to fetch three max salaries from a table.

    select distinct salary FROM Worker
   ORDER BY salary desc
   FETCH FIRST 3 ROWS ONLY;

************************************************************************************************

   
Q-47. Write an SQL query to fetch three min salaries from a table.

    SELECT DISTINCT salary FROM Worker
     ORDER BY salary
    FETCH FIRST 3 ROWS ONLY;

************************************************************************************************


48) Q-48. Write an SQL query to fetch nth max salaries from a table.


************************************************************************************************

Q-49. Write an SQL query to fetch departments along with the total salaries paid for each of them.

 select department, sum(salary) FROM Worker
  group by department;
  

************************************************************************************************

Q-50. Write an SQL query to fetch the names of workers who earn the highest salary.

     select * from worker 
     where salary=(select max(salary) from worker);


************************************************************************************************

