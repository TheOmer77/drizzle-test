'use client';

import { useEffect, useState } from 'react';
import { TrashIcon } from 'lucide-react';

import { deleteTodo, updateTodoChecked, updateTodoText } from '@/actions/todo';
import type { Todo } from '@/db/schema/todo';

export type TodoListItemProps = {
  value: Todo;
};

export const TodoListItem = ({
  value: { id, text, checked },
}: TodoListItemProps) => {
  const [debouncedText, setDebouncedText] = useState(text);

  useEffect(() => {
    if (text === debouncedText) return;
    const timeout = setTimeout(
      async () => await updateTodoText(id, debouncedText),
      500
    );
    return () => clearTimeout(timeout);
  }, [debouncedText, id, text]);

  return (
    <li className='flex flex-row items-center'>
      <input
        type='checkbox'
        id={`checkbox-todo-${id}`}
        checked={checked}
        onChange={e => updateTodoChecked(id, e.target.checked)}
        className='size-5 shrink-0 accent-foreground'
      />
      <input
        id={`input-todo-${id}-text`}
        type='text'
        value={debouncedText}
        onChange={e => setDebouncedText(e.target.value)}
        className='h-8 grow rounded-lg bg-transparent px-2 text-sm focus:outline-none'
      />
      <button
        id={`button-todo-${id}-delete`}
        onClick={() => deleteTodo(id)}
        className='inline-flex size-8 shrink-0 cursor-default items-center
justify-center rounded-lg bg-foreground/10 hover:bg-foreground/15
active:bg-foreground/25'
      >
        <TrashIcon className='size-4' />
      </button>
    </li>
  );
};
