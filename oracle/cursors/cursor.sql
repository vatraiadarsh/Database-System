/*
    Writting Sql in pl/sql -> critical part of database programming as 
    all sql statements embedded within a PL/SQL block are executed as a cursor

    cursor => private memory area, temporarily allocated in the session's User Global Area(UGA),
    that is used for processing SQL statements

    The private memory stores the result set retrieved from the SQL execution and cursor attributes. 
    They can be classified as implicit and explicit cursors

        Oracle creates an implicit cursor for all the SQL statements included in the executable section of a PL/SQL block.
        In this case, the cursor lifecycle is maintained by the Oracle Database.

        For explicit cursors, the execution cycle can be controlled by the user. 
        We can explicitly declare an implicit cursor under the DECLARE section along with a SELECT query.

    
    CURSORS ATTRIBUTE

    %ROWCOUNT: Number of rows fetched until the last fetch or impacted by the last DML operation.
        Applicable for SELECT as well as DML statements.
     
    %ISOPEN: Boolean TRUE if the cursor is still open, if not FALSE. 
        For an implicit cursor, this attribute is always FALSE
        ( %ISOPEN is the only cursor attribute that is accessible outside the cursor execution cycle.)

    %FOUND: Boolean TRUE, if the fetch operation switches and points to a record; if not, FALSE

    %NOTFOUND: Boolean FALSE when the cursor pointer switches but does not point to a record in the result set.
 */


/*Enable the SERVEROUTPUT to display block messages*/
set serveroutput on

/*Start the PL/SQL Block*/
declare

/*Declare a cursor to select employees data*/
cursor c_emp is
    select empno,ename from employee;
    l_empno employee.empno%type;
    l_empname employee.ename%type;

begin
  /*Check if the cursor is already open*/

  if not c_emp%isopen then
    dbms_output.put_line('**Displaying Employee info**');
  end if;

  /*Open the cursor and iterate in a loop*/

  open c_emp;

  loop
    /*Fetch the cursor data into local variables*/

    fetch c_emp into l_empno,l_empname;
    exit when c_emp%notfound;

    /*Display the employee information*/

    dbms_output.put_line(chr(10)||'Displaying information for employee:'|| c_emp%rowcount);
    dbms_output.put_line('Employee Id:'|| l_empno);
    dbms_output.put_line('Employee Name:' || l_empname);
  end loop;


end;
/

-- The usage of the CURSOR FOR loop reduces the overhead of manually specifying the OPEN, FETCH, and CLOSE stages of a cursor.


