CREATE TABLE users (
    user_id VARCHAR2(50) PRIMARY KEY,
    passwd VARCHAR2(50) NOT NULL,
    nickname VARCHAR2(50) UNIQUE NOT NULL
);

CREATE SEQUENCE goal_seq
START WITH 1
INCREMENT BY 1
NOCYCLE;

CREATE SEQUENCE chat_seq
START WITH 1
INCREMENT BY 1
NOCYCLE;

CREATE TABLE challenge(
    c_id VARCHAR2(50) PRIMARY KEY,
    leader VARCHAR2(50) REFERENCES users(user_id),
    title VARCHAR2(50) NOT NULL,
    endtime TIMESTAMP,
    comments VARCHAR2(1000),
    tags VARCHAR2(500),
    limits NUMBER CHECK (limits BETWEEN 1 AND 100)
);

CREATE TABLE member(
    user_id VARCHAR2(50) REFERENCES users(user_id),
    c_id VARCHAR2(50) REFERENCES challenge(c_id),
    PRIMARY KEY (user_id, c_id)
);

DROP TABLE chat;

CREATE TABLE chat(
    chat_id VARCHAR(50) PRIMARY KEY,
    c_id VARCHAR2(50) REFERENCES challenge(c_id),
    user_id VARCHAR(50) REFERENCES users(user_id),
    chat VARCHAR(3000),
    upper_id VARCHAR(50) REFERENCES chat(chat_id)
);