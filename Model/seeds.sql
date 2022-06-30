INSERT INTO users (username, password, email)
VALUES ('mpaigeer', 'admin123', 'mpaigeer@test.com'),
      ('mike', 'admin', 'mike@test.com');


INSERT INTO tasks (user_id, category, description, status)
values (1, 'Home', 'do shopping', 'pending'),
 (1, 'Work', 'team meeting at 3 PM', 'pending'),
 (1, 'Home', 'clean the frontyard garden', 'pending'),
 (1, 'Personal', 'workout', 'on progress'),
 (1, 'Personal', 'Meet Amy', 'completed'),
 (2, 'work', 'meeting with Boss', 'on progress'),
 (2, 'Work', 'complete the operation report', 'pending'),
 (2, 'Home', 'buy milk', 'pending'),
 (2, 'Personal', 'hangout with ketty', 'pending'),
 (2, 'Home', 'Meet Amy', 'completed');