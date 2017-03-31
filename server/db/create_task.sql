INSERT INTO tasks(title, description, progress, userid)
VALUES($1, $2, $3, $4)
RETURNING *;