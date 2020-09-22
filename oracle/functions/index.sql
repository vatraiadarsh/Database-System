/*

Key features

A function can accept parameters in all three modes (IN, OUT, and IN OUT) and mandatorily returns a value.

Functions can be called in SQL statements (SELECT and DMLs). Such functions must accept only IN parameters of valid SQL types.
Alternatively, a function can also be invoked from SELECT statements if the function body obeys the database purity rules.

If the function is called from an SQL statement, its return type should be a valid SQL data type. 
If the function is invoked from PL/SQL, the return type should be a valid PL/SQL type.

Starting from Oracle Database 12c, PL/SQL—only data types can cross the PL/SQL to SQL interface. 
A PL/SQL anonymous block can invoke a PL/SQL subprogram with parameters of BOOLEAN or a packaged collection type.

SYNTAX

CREATE [OR REPLACE] FUNCTION [Function Name] [Parameter List]
RETURN [Data type]
[AUTHID DEFINER | CURRENT_USER]
[DETERMINISTIC | PARALLEL_ENABLED | PIPELINED]
[RESULT_CACHE [RELIES_ON (table name)]]
IS
  [Declaration Statements]
BEGIN
 [Executable Statements]
  RETURN [Value]
EXCEPTION
 [Exception handlers]
END [Function Name];


Unlike procedures, a stored function can be called from a SELECT statement,
provided it does not violate the database purity levels. The rules are as follows:

-> A function called from a SELECT statement cannot contain DML statements
-> A function called from an UPDATE or DELETE statement on a table cannot query (SELECT)
     or perform transactions (DMLs) on the same table
-> A function called from an SQL expression cannot contain TCL (COMMIT or ROLLBACK) commands 
    or DDL (CREATE or ALTER) commands



The F_GET_DOUBLE function can easily be embedded within a SELECT statement as it respects all the preceding rules:

/*Invoke the function F_GET_DOUBLE from SELECT statement*/
SQL> SELECT F_GET_DOUBLE(10) FROM DUAL;

F_GET_DOUBLE(10)
----------------
              20


--DUAL is a table owned by the SYS user,
-- which has a single row and a single column, DUMMY, of VARCHAR2 (1) type. 
--It was first designed by Charles Weiss while working with internal views to duplicate a row. 
--The DUAL table is created by default during the creation of the data dictionary with a single row whose value is X.
-- All database users, other than SYS, use its public synonym to select the value of pseudo columns such as USER, SYSDATE, NEXTVAL, or CURRVAL. 
--Oracle 10g considerably improved the performance implications of the DUAL table through a fast dual-access mechanism.