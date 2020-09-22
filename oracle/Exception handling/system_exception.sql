set serveroutput on 

declare 
l_ename varchar2(100);
l_empno Number := 999;


begin
/*SELECT statement to fetch the name and emp.no of the employee*/
  select ename,empno 
  into l_ename,l_empno
  from employee
  where empno = l_empno;
exception
 
 when no_data_found then
  /*Display an informative message*/
  
dbms_output.put_line('No Employee exists with the id '||l_empno);

end;

/