CREATE TABLE users(
    email Varchar(255) PRIMARY KEY,
    created_at TIMESTAMP DEFAULT NOW()
);


INSERT INTO users (email) VALUES 
('Katie34@yahoo.com'),('Tunde@gmail.com');