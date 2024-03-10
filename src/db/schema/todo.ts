import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core';

export const todo = pgTable('todo', {
  id: uuid('id').unique().primaryKey().defaultRandom(),
  text: text('text').notNull(),
  checked: boolean('checked').notNull().default(false),
});
