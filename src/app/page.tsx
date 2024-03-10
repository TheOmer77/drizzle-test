import { getTodos } from '@/actions/todo';
import { AddTodoForm } from '@/components/AddTodoForm';
import { Header } from '@/components/Header';
import { TodoList } from '@/components/TodoList';

const Home = async () => {
  const todos = await getTodos();

  return (
    <>
      <Header />
      <div className='w-full max-w-screen-sm rounded-lg bg-card p-4 shadow-lg'>
        <TodoList todos={todos} />
        <AddTodoForm />
      </div>
    </>
  );
};

export default Home;
