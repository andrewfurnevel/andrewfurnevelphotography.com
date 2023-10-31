-- CREATE USERS TABLE

-- CREATE JWT_TOKENS TABLE

-- CREATE JWT_BLACKLIST TABLE

-- CHECK LAST VALUE OF CREATED SEQUENCE -- Change 'my_sequence to sequence name'.
SELECT schemaname, sequencename, last_value
FROM pg_sequences
WHERE schemaname = 'public' AND sequencename = 'my_sequence'; 

-- CREATE ADMINS TABLES
CREATE TABLE admins (admin_id SERIAL PRIMARY KEY, admin_first_name VARCHAR(50) NOT NULL, admin_last_name VARCHAR(50) NOT NULL, admin_role VARCHAR(50) NOT NULL, admin_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP, admin_last_active TIMESTAMP DEFAULT CURRENT_TIMESTAMP);




