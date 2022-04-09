-- Meta Data Table
columns
Meta Dat role_id
title
author
keywords
description


copyright_nfo

CREATE TABLE IF NOT EXISTS users (
    user_id SERIAL PRIMARY KEY,
    user_name VARCHAR(50) UNIQUE NOT NULL,
    user_password VARCHAR(50) NOT NULL,
    user_last_login TIMESTAMP   
);

CREATE TABLE IF NOT EXISTS user_profiles (
    user_profile_id SERIAL PRIMARY KEY,
    user_profile_first_name VARCHAR(100) NOT NULL,
    user_profile_last_name VARCHAR(100) NOT NULL,
    user_profile_email VARCHAR(255),
    user_profile_verified BOOLEAN DEFAULT FALSE,
    user_created TIMESTAMP NOT NULL,
    user_profile_last_upate TIMESTAMP,
    CONSTRAINT fk_user
        FOREIGN KEY(user_id )
            REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS pages (
    page_id SERIAL PRIMARY KEY,
    page_title VARCHAR(100),
    page_heading VARCHAR(255),
    page_copy TEXT,
    page_last_update TIMESTAMP,
    user_id INTEGER FOREIGN KEY  
);

CREATE TABLE IF NOT EXISTS page_meta_data (
    meta_data_id SERIAL PRIMARY KEY,
    meta_data_title VARCHAR(100) UNIQUE,
    meta_data_author VARCHAR(100),
    meta_data_description TEXT,
    meta_data_keywords TEXT,
    meta_data_favicon VARCHAR(100),
    meta_data_last_update TIMESTAMP,
    user_id INTEGER FOREIGN KEY,
    page_id INTEGER FOREIGN KEY

);
    
CREATE TABLE IF NOT EXISTS images (
    image_id SERIAL PRIMARY KEY,
    image_title VARCHAR(100),
    image_caption VARCHAR (100),
    image_description VARCHAR (255),
    image_last_update TIMESTAMP,
    user_id INTEGER FOREIGN KEY,
    image_portfolio INTEGER FOREIGN KEY
);

CREATE TABLE IF NOT EXISTS portfolios (
    portfolio_id SERIAL PRIMARY KEY,
    portfolio_title VARCHAR(100),
    portfolio_category VARCHAR(100),
    portfolio_last_update TIMESTAMP,
    user_id INTEGER FOREIGN KEY,
    porftolio_location INTEGER
);

CREATE TABLE IF NOT EXISTS images_portfolios (
    images_portfolio_id SERIAL PRIMARY KEY,
    image_id INTEGER,
    portfolio_id INTEGER
);


CREATE TABLE IF NOT EXISTS contact_info (
    contact_info_id SERIAL PRIMARY KEY,
    contact_info_email VARCHAR(255),
    conact_info_tel VARCHAR (20),
    contact_info_cell VARCHAR(20),
    user_id INTEGER FOREIGN KEY
);



