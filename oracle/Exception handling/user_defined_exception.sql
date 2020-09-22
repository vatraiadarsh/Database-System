set serveroutput on

/*Declare a bind variable M_DIVISOR*/
VARIABLE M_DIVISOR NUMBER;

/*Declare a bind variable M_DIVIDEND*/
VARIABLE M_DIVIDEND NUMBER;

/*Assign value to M_DIVISOR as zero*/
EXEC :M_DIVISOR := 0;

/*Assign value to M_DIVIDEND as 10*/
EXEC :M_DIVIDEND := 10;

declare
/*Declare the local variables and initialize with the bind variables*/

L_DIVISOR NUMBER := :M_DIVISOR;
L_DIVIDENT NUMBER := :M_DIVIDEND;
L_QUOT  NUMBER;
/*Declare an exception variable*/
    NOCASE EXCEPTION;

BEGIN
    /*Raise the exception if Divisor is equal to zero*/
    IF L_DIVISOR = 0 THEN
        RAISE NOCASE;
    END IF;

    L_QUOT := L_DIVIDENT/L_DIVISOR;
    DBMS_OUTPUT.PUT_LINE('The result : '||L_QUOT);

EXCEPTION
/*Exception handler for NOCASE exception*/   
    WHEN NOCASE THEN
        DBMS_OUTPUT.PUT_LINE('Divisor cannot be equal to zero');

END;

/