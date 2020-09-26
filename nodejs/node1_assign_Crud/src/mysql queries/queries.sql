/* database creation********/

create database liviano;
use liviano;

/* Student table creation************/
create table Student(SRoll_no integer, SName varchar(10), SMark integer);
select * from student;
 commit;
 insert into Student(SRoll_no,SName,SMark)values(1,"Shubhangi",96);
 insert into Student(SRoll_no,SName,SMark)values(2,"Aishwarya",96);
 insert into Student(SRoll_no,SName,SMark)values(3,"Mahesh",96);

/****Employee table creation**********/
create table Employee(ENO integer, EName varchar(10),ESalary integer);

insert into Employee(ENO ,EName,ESalary)values(10,"Mahesh",70000);
insert into Employee(ENO ,EName,ESalary)values(20,"Aishwarya",80000);
insert into Employee(ENO ,EName,ESalary)values(30,"Shubhangi",70000);

select * from Employee;


ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'pass';

flush privileges;

/*    leave info table        */

drop table leaveinfo;
create table leaveinfo(Leave_No integer , Employee_Name varchar(10),Leave_Reason varchar(30) , Leave_startDate date ,Leave_endDate date );
delete from leaveinfo where leave_no=2;

insert into leaveinfo(Leave_No, Employee_Name, Leave_Reason, Leave_startDate, Leave_endDate) values(1,"Anisha","Sick leave","2020-02-10","2020-02-12");
insert into leaveinfo(Leave_No, Employee_Name, Leave_Reason, Leave_startDate, Leave_endDate) values(2,"Priyanka","Sis marriage","2020-03-11","2020-03-14");
insert into leaveinfo(Leave_No, Employee_Name, Leave_Reason, Leave_startDate, Leave_endDate) values(3,"Sakshi","Sick leave","2020-12-21","2020-12-25");
insert into leaveinfo(Leave_No, Employee_Name, Leave_Reason, Leave_startDate, Leave_endDate) values(4,"Rutuja","family function","2020-02-11","2020-02-19");
insert into leaveinfo(Leave_No, Employee_Name, Leave_Reason, Leave_startDate, Leave_endDate) values(5,"Sonali","Sick leave","2020-02-21","2020-02-24");

select * from leaveinfo;


