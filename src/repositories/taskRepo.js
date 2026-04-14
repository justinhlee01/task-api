import prisma from '../config/db.js';

export async function findAll(completed) {
  const where = completed !== undefined ? { completed } : {};
  return prisma.task.findMany({ where });
}

export async function create(data) {
  return prisma.task.create({
    data,
  });
}