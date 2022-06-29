INSERT INTO users (username, password, email)
VALUES ('mpaigeer', 'admin123', 'mpaigeer@test.com');


INSERT INTO tasks (user_id, category, description, status)
values (1, 'Home', 'do shopping', 'pending'),
 (1, 'Work', 'team meeting at 3 PM', 'pending'),
 (1, 'Home', 'clean the frontyard garden', 'pending'),
 (1, 'Personal', 'workout', 'on progress'),
 (1, 'Personal', 'Meet Amy', 'completed');