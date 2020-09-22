/*Create a procedure to change case of a string */
CREATE OR REPLACE PROCEDURE P_TO_UPPER (P_STR VARCHAR2)
IS
/*Declare the local variables*/
   L_STR VARCHAR2(50);
BEGIN
/*Convert the case using UPPER function*/
   L_STR := UPPER(P_STR);
/*Display the output with appropriate message*/
   DBMS_OUTPUT.PUT_LINE('Input string in Upper case : '||L_STR);
END;
/



-- Executing a procedure


/*Enable the SERVEROUTPUT parameter to print the results in the environment*/
SQL> SET SERVEROUTPUT ON

/*Declare a session variable for the input*/
SQL> VARIABLE M_STR VARCHAR2(50);

/*Assign a test value to the session variable*/
SQL> EXECUTE :M_STR := 'My first PLSQL procedure';


/*Call the procedure P_TO_UPPER*/
SQL> EXECUTE P_TO_UPPER(:M_STR);




-- can also be executed in anonymous block

/*Enable the SERVEROUTPUT parameter to print the results in the environment*/
SQL> SET SERVEROUTPUT ON

/*Start a PL/SQL block*/
SQL> BEGIN
      /*Call the P_TO_UPPER procedure*/
        P_TO_UPPER ('My first PLSQL procedure');
     END;
     /



-- note:: before executing the pl/sql the procedure should be run so that it can be compiled