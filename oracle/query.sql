create table employee(
    empno Number(12) not null,
    ename varchar(50) not null,
    salary Number(12) not null,
    hiredate Date not null
);

insert into employee(empno,ename,salary,hiredate)values(567,'adarsh',45000,TO_DATE('2020-01-21','YYYY-MM-DD'));
insert into employee(empno,ename,salary,hiredate)values(345,'john',35000,TO_DATE('2019-02-12','YYYY-MM-DD'));
insert into employee(empno,ename,salary,hiredate)values(453,'rahul',56000,TO_DATE('2018-03-09','YYYY-MM-DD'));

