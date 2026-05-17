-- =========================================
-- COMPANY MANAGEMENT DATABASE PROJECT
-- Complete SQL Script
-- =========================================

-- =========================================
-- CREATE DATABASE
-- =========================================

CREATE DATABASE company_db;

USE company_db;

-- =========================================
-- CREATE TABLES
-- =========================================

-- Departments Table
CREATE TABLE departments(
    dept_id INT AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR(50) UNIQUE
);

-- Employees Table
CREATE TABLE employees(
    emp_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_name VARCHAR(50),
    salary DECIMAL(10,2),
    dept_id INT,
    hire_date DATE,
    FOREIGN KEY(dept_id)
    REFERENCES departments(dept_id)
);

-- Projects Table
CREATE TABLE projects(
    project_id INT AUTO_INCREMENT PRIMARY KEY,
    project_name VARCHAR(100),
    budget DECIMAL(12,2)
);

-- Employee Projects Mapping Table
CREATE TABLE employee_projects(
    emp_id INT,
    project_id INT,
    PRIMARY KEY(emp_id, project_id),
    FOREIGN KEY(emp_id)
    REFERENCES employees(emp_id),
    FOREIGN KEY(project_id)
    REFERENCES projects(project_id)
);

-- Attendance Table
CREATE TABLE attendance(
    attendance_id INT AUTO_INCREMENT PRIMARY KEY,
    emp_id INT,
    attendance_date DATE,
    status VARCHAR(20),
    FOREIGN KEY(emp_id)
    REFERENCES employees(emp_id)
);

-- Employee Logs Table
CREATE TABLE employee_logs(
    message VARCHAR(100)
);

-- =========================================
-- INSERT DATA
-- =========================================

-- Insert Departments
INSERT INTO departments(dept_name)
VALUES
('HR'),
('IT'),
('Finance');

-- Insert Employees
INSERT INTO employees
(emp_name, salary, dept_id, hire_date)
VALUES
('Ravi',50000,2,'2025-01-10'),
('Ajay',65000,2,'2024-08-15'),
('Priya',45000,1,'2025-03-20');

-- Insert Projects
INSERT INTO projects(project_name, budget)
VALUES
('Banking App',500000),
('E-Commerce Site',700000);

-- Insert Employee Projects
INSERT INTO employee_projects
VALUES
(1,1),
(2,1),
(2,2);

-- Insert Attendance
INSERT INTO attendance
(emp_id, attendance_date, status)
VALUES
(1,'2026-05-15','Present'),
(2,'2026-05-15','Absent'),
(3,'2026-05-15','Present');

-- =========================================
-- SELECT QUERIES
-- =========================================

-- View All Employees
SELECT * FROM employees;

-- View IT Employees
SELECT * FROM employees
WHERE dept_id = 2;

-- Salary Greater Than 50000
SELECT * FROM employees
WHERE salary > 50000;

-- Order By Salary Descending
SELECT * FROM employees
ORDER BY salary DESC;

-- =========================================
-- AGGREGATE FUNCTIONS
-- =========================================

-- Count Employees
SELECT COUNT(*) AS total_employees
FROM employees;

-- Total Salary
SELECT SUM(salary) AS total_salary
FROM employees;

-- Average Salary
SELECT AVG(salary) AS avg_salary
FROM employees;

-- Maximum Salary
SELECT MAX(salary) AS highest_salary
FROM employees;

-- Minimum Salary
SELECT MIN(salary) AS lowest_salary
FROM employees;

-- =========================================
-- GROUP BY
-- =========================================

-- Department Wise Salary
SELECT dept_id,
SUM(salary) AS total_salary
FROM employees
GROUP BY dept_id;

-- Count Employees Department Wise
SELECT dept_id,
COUNT(*) AS total_employees
FROM employees
GROUP BY dept_id;

-- =========================================
-- JOINS
-- =========================================

-- Employee with Department Name
SELECT e.emp_name,
d.dept_name
FROM employees e
INNER JOIN departments d
ON e.dept_id = d.dept_id;

-- Employee with Project Name
SELECT e.emp_name,
p.project_name
FROM employees e
JOIN employee_projects ep
ON e.emp_id = ep.emp_id
JOIN projects p
ON ep.project_id = p.project_id;

-- =========================================
-- UPDATE QUERIES
-- =========================================

-- Increase Salary
UPDATE employees
SET salary = salary + 5000
WHERE dept_id = 2;

-- Change Department
UPDATE employees
SET dept_id = 1
WHERE emp_name = 'Ravi';

-- =========================================
-- DELETE QUERIES
-- =========================================

-- Delete Attendance Record
DELETE FROM attendance
WHERE attendance_id = 2;

-- Delete Project
DELETE FROM projects
WHERE project_id = 2;

-- =========================================
-- LIKE, BETWEEN, IN
-- =========================================

-- Names Starting with P
SELECT * FROM employees
WHERE emp_name LIKE 'P%';

-- Salary Between
SELECT * FROM employees
WHERE salary BETWEEN 40000 AND 70000;

-- IN Operator
SELECT * FROM departments
WHERE dept_name IN ('HR','IT');

-- =========================================
-- DATE FUNCTIONS
-- =========================================

-- Current Date
SELECT CURDATE();

-- Current Date and Time
SELECT NOW();

-- Employees Joined in 2025
SELECT * FROM employees
WHERE YEAR(hire_date) = 2025;

-- Days Worked
SELECT emp_name,
DATEDIFF(CURDATE(), hire_date) AS days_worked
FROM employees;

-- =========================================
-- VIEW
-- =========================================

-- Create View
CREATE VIEW employee_view AS
SELECT emp_name, salary
FROM employees;

-- Use View
SELECT * FROM employee_view;

-- =========================================
-- INDEX
-- =========================================

-- Create Index
CREATE INDEX idx_emp_name
ON employees(emp_name);

-- =========================================
-- TRIGGER
-- =========================================

DELIMITER //

CREATE TRIGGER employee_insert_trigger
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employee_logs
    VALUES('New Employee Added');
END //

DELIMITER ;

-- Test Trigger
INSERT INTO employees
(emp_name, salary, dept_id, hire_date)
VALUES
('Kumar',55000,2,'2026-05-16');

-- View Logs
SELECT * FROM employee_logs;

-- =========================================
-- STORED PROCEDURE
-- =========================================

DELIMITER //

CREATE PROCEDURE GetEmployeesByDept(
    IN dept INT
)
BEGIN
    SELECT * FROM employees
    WHERE dept_id = dept;
END //

DELIMITER ;

-- Call Procedure
CALL GetEmployeesByDept(2);

-- =========================================
-- USER DEFINED FUNCTION
-- =========================================

DELIMITER //

CREATE FUNCTION bonus_calc(salary DECIMAL(10,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN salary * 0.10;
END //

DELIMITER ;

-- Use Function
SELECT emp_name,
bonus_calc(salary) AS bonus
FROM employees;

-- =========================================
-- TRANSACTIONS
-- =========================================

START TRANSACTION;

UPDATE employees
SET salary = salary - 1000
WHERE emp_id = 1;

UPDATE employees
SET salary = salary + 1000
WHERE emp_id = 2;

COMMIT;

-- Rollback Example
ROLLBACK;

-- =========================================
-- SUBQUERY EXAMPLES
-- =========================================

-- Highest Salary Employee
SELECT *
FROM employees
WHERE salary =
(
    SELECT MAX(salary)
    FROM employees
);

-- Employees Working on Banking App
SELECT e.emp_name
FROM employees e
JOIN employee_projects ep
ON e.emp_id = ep.emp_id
JOIN projects p
ON p.project_id = ep.project_id
WHERE p.project_name = 'Banking App';

-- =========================================
-- ALTER TABLE
-- =========================================

-- Add Column
ALTER TABLE employees
ADD email VARCHAR(100);

-- Modify Column
ALTER TABLE employees
MODIFY email VARCHAR(150);

-- Rename Column
ALTER TABLE employees
RENAME COLUMN email TO emp_email;

-- =========================================
-- DROP OPERATIONS
-- =========================================

-- Drop View
DROP VIEW employee_view;

-- Drop Index
DROP INDEX idx_emp_name ON employees;

-- =========================================
-- SHOW TABLES
-- =========================================

SHOW TABLES;

-- =========================================
-- VIEW FINAL DATA
-- =========================================

SELECT * FROM departments;

SELECT * FROM employees;

SELECT * FROM projects;

SELECT * FROM employee_projects;

SELECT * FROM attendance;

SELECT * FROM employee_logs;

-- =========================================
-- END OF PROJECT
-- =========================================