CREATE DATABASE quiz_db;

USE quiz_db;

CREATE TABLE questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question VARCHAR(255),
    optionA VARCHAR(100),
    optionB VARCHAR(100),
    optionC VARCHAR(100),
    optionD VARCHAR(100),
    correctAnswer VARCHAR(1)
);

INSERT INTO questions (question, optionA, optionB, optionC, optionD, correctAnswer) VALUES
('What is Java?', 'Language', 'Animal', 'Car', 'Fruit', 'A'),
('What is HTML?', 'Programming', 'Markup', 'Database', 'OS', 'B'),
('What is CSS?', 'Styling', 'Database', 'Language', 'None', 'A');