SELECT tasks.title, tasks.description, tasks.progress
FROM tasks
JOIN users on tasks.userid = users.userid
WHERE tasks.userid = $1;