-- update items set price=price-50;
--  Only this one will decrease the amount of all the items in the database

-- Just wanted to update the price of the sampoo that has category id 1
-- update items set price=price+((10/price)*100) where category_id=1;

-- I don't want to sell okhati soap in market now.
-- update items set status=0 where id =5;

-- Just wanted to update the price where the price of an item is less than 250
-- update items set price=price+((10/price)*100) where price < 250;

-- Just wanted to update the price where the price of an item is less than 250 
-- or the products that starts it's name with 'L'

-- like 'L%' that starts with letter L
-- like '%L' that ends with letter L
-- like 'L%L' that starts with letter L ends with letter L
-- like '%L%' that contains letter L

-- update items set price=price+((10/price)*100) where price < 250 or name like 'L%';




-- Before Moving To JOINS


-- select * from items i ,categories c 
-- where i.category_id = c.id;



-- Just wanted the items

-- select i.* from items i ,categories c
-- where i.category_id = c.id;



-- Now I also want all the tables of items and the category name from category table

-- select i.*, c.name from items i, categories c 
-- where i.category_id = c.id;

-- Now we have both the tables rows name name so make alias to each other

-- select i.*,c.name as category_name from items i, categories c 
-- where i.category_id = c.id;






-- NOW APPLYING THE SAME THING AS JOIN
-- only the thing is replaced is "," by join and where by on



-- select i.*, c.name as category_name from items i join categories c 
-- on i.category_id = c.id;


-- Remember we have the others categories too like biscuits, and detergent 
-- if we want others categories too we need to use left or right joins

-- select i.*, c.name as category_name from items i join categories c 
-- on i.category_id = c.id;

-- here items is in L.H.S and categories is in R.H.S
-- we need allthe categories so use right join


-- select i.*, c.name as category_name from items i right join categories c 
-- on i.category_id = c.id;



-- IF THE POSITION IS INTERCHANGED eg:
-- just the left or right will be changed


-- select i.*,c.name as category_name from categories c left join items i 
-- on c.id = i.category_id;







-- WHY WE NEED THIS

-- eg: we need to count how many items are there in each categories

-- these are the aggrigate functions
-- count() min() max() sum() avg()



-- select count(*) from categories;


-- the title doesn't seems nice so using alias

-- select count(*) as total_categories from categories;

-- select category_id,count(category_id) as total from items
-- group by category_id;


-- IF THE CATEGORY_ID TASTO SAGAI AGGRIGATE FUNCTIONS HARU AAYAMA GROUP BY THAPNUPARCHA

-- select * from categories;

-- select category_id,count(1) as total from items 
-- group by category_id;

-- HERE COUNT(1) IS MORE FASTER THEN COUNT(*) 
-- [ COUNT(1) IS LIKE WHILE TRUE IT OPTIMIZES THE QUERY]


-- Now we are joining the above 2 queries

-- select category_id,count(1) as total from items group by category_id;

-- select * from categories c

-- left join(
--     select category_id,count(1) as total from items group by category_id
--     )i

-- on c.id =i.category_id;







-- select category_id,count(1) as total from items group by category_id;

-- select c.*,i.total from categories c

-- left join(
--     select category_id,count(1) as total from items group by category_id
--     )i

-- on c.id =i.category_id;




-- select category_id,count(1) as total from items group by category_id;

-- select c.*,if(i.total is null,0,i.total ) from categories c

-- left join(
--     select category_id,count(1) as total from items group by category_id
--     )i

-- on c.id =i.category_id;





select category_id,count(1) as total from items group by category_id;

select c.*,if(i.total is null,0,i.total ) as total from categories c

left join(
    select category_id,count(1) as total from items group by category_id
    )i

on c.id =i.category_id;
