UPDATE tasks
SET progress = $2
WHERE taskid = $1;