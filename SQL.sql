-- CREATE USERS TABLE

-- CREATE JWT_TOKENS TABLE

-- CREATE JWT_BLACKLIST TABLE

-- CREATE A SEQUENCE TO BE USED WITH A SERIAL (AUTO INRCREMENT) FIELD.
CREATE SEQUENCE admin_id_seq; -- Use the field name followed by _seq.

-- CHECK LAST VALUE OF CREATED SEQUENCE -- Change 'my_sequence to sequence name'.
SELECT schemaname, sequencename, last_value
FROM pg_sequences
WHERE schemaname = 'public' AND sequencename = 'my_sequence'; 

-- CREATE ADMINS TABLES
CREATE TABLE admins (admin_id SERIAL PRIMARY KEY, admin_first_name VARCHAR(50) NOT NULL, admin_last_name VARCHAR(50) NOT NULL, admin_role VARCHAR(50) NOT NULL, admin_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP, admin_last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP);

-- ADDING FOREIGN KEYS
-- There are two ways to add a foreign ky to a table, you can add it at the time of the table creation, or you can add it after the table was created as an construct. There are Pros and Cons to each method. Adding at time of creation is simpler and insures immediate data integrity but is not as flexible and harder to maintain consistancy. An example might be a cirular refence between to tables where table A is the foreign key of table B and visa versa. You could create one table with a foreign key at time of creation but the other table would have to have the foreign key added as a constraint, as the linked table needs to exist before you can add a foreign key, and one table has to exist before the other is created. You might not always know where foreign keys will be needed and the time the table is created as table relationships may change over time. In this case I'm going to use the second method and add them after the table has been created as a constraint, for the sake of consistancy.


-- TABLE JOINS


