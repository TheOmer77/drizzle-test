'use server';

import { revalidatePath } from 'next/cache';
import { asc, eq } from 'drizzle-orm';

import { db } from '@/db';
import { todo } from '@/db/schema/todo';

export const getTodos = async () =>
  await db.select().from(todo).orderBy(asc(todo.createdAt));

export const addTodo = async (text: string) => {
  await db.insert(todo).values({ text });
  revalidatePath('/');
};

export const updateTodoText = async (id: string, text: string) => {
  await db
    .update(todo)
    .set({ text, updatedAt: new Date() })
    .where(eq(todo.id, id));
  revalidatePath('/');
};

export const updateTodoChecked = async (id: string, checked: boolean) => {
  await db
    .update(todo)
    .set({ checked, updatedAt: new Date() })
    .where(eq(todo.id, id));
  revalidatePath('/');
};

export const deleteTodo = async (id: string) => {
  await db.delete(todo).where(eq(todo.id, id));
  revalidatePath('/');
};
