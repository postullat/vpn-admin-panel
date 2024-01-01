CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    is_email_verified int NOT NULL DEFAULT 0,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    signup_method VARCHAR(100),
    subscription VARCHAR(100),
    password VARCHAR(255) NOT NULL,
    role VARCHAR(100),
    status VARCHAR(100),
    createdAt DATETIME,
    updatedAt DATETIME
);
