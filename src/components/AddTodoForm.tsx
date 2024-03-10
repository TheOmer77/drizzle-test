'use client';

import { useCallback, useState } from 'react';
import { PlusIcon } from 'lucide-react';

import { addTodo } from '@/actions/todo';

export const AddTodoForm = () => {
  const [value, setValue] = useState('');

  const handleSubmit = useCallback(async () => {
    await addTodo(value);
    setValue('');
  }, [value]);

  return (
    <form
      className='mt-4 flex w-full flex-row items-center'
      onSubmit={e => {
        e.preventDefault();
        if (value.length > 0) handleSubmit();
      }}
    >
      <input
        type='text'
        id='input-new-todo'
        name='text'
        placeholder='Add new todo...'
        value={value}
        onChange={e => setValue(e.target.value)}
        className='h-8 grow rounded-lg bg-transparent px-2 text-sm
placeholder:select-none focus:outline-none'
      />
      <button
        type='submit'
        className='inline-flex size-8 cursor-default items-center
justify-center rounded-lg bg-foreground/10 enabled:hover:bg-foreground/15
enabled:active:bg-foreground/25 disabled:opacity-50'
        disabled={value.length < 1}
      >
        <PlusIcon className='size-4' />
      </button>
    </form>
  );
};
