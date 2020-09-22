create or replace trigger checkbudget
before
update of budget on department
for each row
when new.name = 'Math'

begin
  if not (:new.budget between 1 and 7000) then
    raise_application_error(-20000, 'Budget of department' || :new.name||
                            'cannot be equal to' || :new.budget);
  end if;
end;