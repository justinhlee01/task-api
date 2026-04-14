import * as taskService from '../services/taskService.js';

export async function getTasks(req, res, next) {
  const { completed } = req.query;

  let filter;
  if (completed === 'true') {
    filter = true;
  } else if (completed === 'false') {
    filter = false;
  } else {
    filter = undefined;
  }

  const tasks = await taskService.getAllTasks(filter);
  res.json(tasks);
}

export async function createTask(req, res, next) {
  const { title, completed } = req.body;
  const task = await taskService.createTask({ title, completed });
  res.status(201).json(task);
}