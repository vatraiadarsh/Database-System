/*Enable the SERVEROUTPUT parameter to print the results in the environment*/
SET SERVEROUTPUT ON

/*Start the PL/SQL block */
DECLARE

/*Declare the birth date */
   L_DOB_MON DATE := '01-DEC-1981';

/*Declare a cursor to filter employees who were hired on birthday month*/
   CURSOR C IS
    SELECT empno, ename, hiredate
    FROM employee;
BEGIN
   FOR I IN C
   LOOP

   /*Raise exception, if birthdate is later than the hiredate */
      IF i.hiredate > l_dob_mon THEN
        RAISE_APPLICATION_ERROR (-20005,'Hiredate earlier than the given date!! Check for another employee');
      ELSE 
	DBMS_OUTPUT.PUT_LINE(i.ename||'was hired on'||i.hiredate);
      END IF;
   END LOOP;
END;
/
