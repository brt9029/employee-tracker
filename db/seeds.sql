INSERT INTO departments (name)
VALUES
  ('Human Resources'),
  ('Accounting'),
  ('Sales'),
  ('Talent Aquisition'),
  ('Internal IT'),
  ('Customer Support');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('Manager', 80000, 1),
  ('Technician', 56000, 2),
  ('Sales Representative', 50000, 3),
  ('Employee Advisor', 47000, 4);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES
  ('James', 'Fraser', 1, NULL),
  ('Jack', 'London', 1, 2),
  ('Robert', 'Bruce', 2, 1),
  ('Derek', 'Jarman', 3, 3),
  ('Heathcote', 'Williams', 1, 2);