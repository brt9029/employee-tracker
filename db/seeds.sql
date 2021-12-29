INSERT INTO departments (name)
VALUES
  ('CEO'),
  ('Management'),
  ('Sales'),
  ('Human Resources'),
  ('Internal IT'),
  ('Customer Support');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('CEO', 100000, 1),
  ('Manager', 80000, 2),
  ('Sales Representative', 50000, 3),
  ('Technician', 56000, 5),
  ('Employee Advisor', 47000, 4);

INSERT INTO employees (first_name, last_name, roles_id, manager_id)
VALUES
  ('James', 'Fraser', 1, NULL),
  ('Jack', 'London', 2, 1),
  ('Robert', 'Bruce', 2, 1),
  ('Derek', 'Jarman', 3, 3),
  ('Heathcote', 'Williams', 2, 2);