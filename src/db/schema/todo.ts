import type { InferSelectModel } from 'drizzle-orm';
import { boolean, pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';

export const todo = pgTable('todo', {
  id: uuid('id').primaryKey().defaultRandom(),
  text: text('text').notNull(),
  checked: boolean('checked').notNull().default(false),
  createdAt: timestamp('createdAt').notNull().defaultNow(),
  updatedAt: timestamp('updatedAt').notNull().defaultNow(),
});

export type Todo = InferSelectModel<typeof todo>;
