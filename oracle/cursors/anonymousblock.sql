/*Enable the Serveroutput to display block messages*/

SET SERVEROUTPUT ON
/*The SERVEROUTPUT parameter is a SQL*Plus variable that enables the printing of DBMS_OUTPUT messages from a PL/SQL block.*/


DECLARE
L_STR VARCHAR2(50) := 'PL/SQL';
BEGIN
DBMS_OUTPUT.PUT_LINE('Hello -' || L_STR);
END;
/