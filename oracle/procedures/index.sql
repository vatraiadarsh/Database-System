/*

The key features of stored procedures are:

A procedure must be invoked from the executable section of a PL/SQL block as a procedural statement. 
You can also execute it directly from SQLPLUS using the EXECUTE statement. 
Note that a procedure can not be called from a SELECT statement.

A procedure can optionally accept parameters in IN, OUT, or IN OUT mode.

A procedure cannot return a value. 
The only way for a procedure to return a value is through OUT parameters, but not through the RETURN [value] statement. 
The RETURN statement in a procedure is used to skip the further execution of the program and exit control.



SYNTAX

CREATE [OR REPLACE] PROCEDURE [Procedure Name] [Parameter List]
[AUTHID DEFINER | CURRENT_USER]
IS
  [Declaration Statements]
BEGIN
 [Executable Statements]
EXCEPTION
 [Exception handlers]
END [Procedure Name];

*/