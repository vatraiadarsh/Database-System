set serveroutput on

declare
/*Declare an explicit cursor to select employee information*/

cursor cur_emp is 
select empno,ename from employee;

begin
  /*FOR Loop uses the cursor CUR_EMP directly*/
    for emp in cur_emp
    loop
      /*Display message*/
       DBMS_OUTPUT.PUT_LINE(chr(10)||emp.ename||' employee number is '||emp.empno);
    end loop;

end;
/
