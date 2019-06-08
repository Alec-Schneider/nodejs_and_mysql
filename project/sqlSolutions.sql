-- 1 Find earliest created_at
SELECT
    DATE_FORMAT(MIN(created_at),'%M %D %Y') as earliest_date
FROM users;

-- 2  find the email and and date
SELECT 
    *
FROM users WHERE created_at = (SELECT MIN(created_at) FROM users);

-- 3 users by month they joined
SELECT
    MONTHNAME(created_at) AS month,
    COUNT(*) AS count
FROM users 
GROUP BY month
ORDER BY count DESC;


-- 4 # of users with yahoo emails
SELECT
    COUNT(*) AS yahoo_users
FROM users
WHERE email LIKE '%@yahoo.com%';

-- calc total # of users for each email host
SELECT
    CASE
        WHEN email LIKE '%@yahoo.com%' THEN 'yahoo'
        WHEN email LIKE '%@gmail.com%' THEN 'gmail'
        WHEN email LIKE '%@hotmail.com%' THEN 'hotmail'
        ELSE 'other'
    END AS provider,
    COUNT(*) AS total_users
FROM users
GROUP BY provider
ORDER BY total_users DESC;

-- ANother way of doing it
SELECT 
substring_index(email, "@", -1) as provider, 
COUNT(*) AS total_users 
FROM users 
GROUP BY provider 
ORDER BY total_users DESC;
