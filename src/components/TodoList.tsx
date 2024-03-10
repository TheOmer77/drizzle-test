import { TodoListItem } from './TodoListItem';

import type { Todo } from '@/db/schema/todo';

export type TodoListProps = {
  todos: Todo[];
};

export const TodoList = ({ todos }: TodoListProps) =>
  todos.length > 0 ? (
    <ul className='flex w-full flex-col gap-2'>
      {todos.map(todo => (
        <TodoListItem key={todo.id} value={todo} />
      ))}
    </ul>
  ) : (
    <span className='select-none text-sm'>
      No TODOs added. You can add a TODO using the field below.
    </span>
  );
