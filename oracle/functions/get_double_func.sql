create or replace function f_get_double(p_num Number)
return number  -- specify the return datatype
is
l_num Number;

begin
    /*Calculate the double of the given number*/
    l_num := p_num *2;

    /*Return the calculated value*/
    return l_num;
end;
/



-- functions execution

set serveroutput on

variable m_num Number;
/*Function is executed and output is assigned to the session variable*/
execute :m_num := f_get_double(10);
/*Print the session variable m_num*/
print m_num
/

-- function execution (anonymous block)

set serveroutput on

declare
m_num Number

begin
  m_num := f_get_double(10);
  dbms_output.put_line('Doubled the input value as : ' || m_num);
end;
/

-- function execution (from dual)
select f_get_double(10) from dual;
-- 