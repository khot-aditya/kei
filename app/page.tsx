"use client";

import useController from "./controllers/home/useSetupController";

export default function Home() {

  const { todos } = useController();

  return (
    <div className='w-screen h-screen flex items-center justify-center flex-col bg-white text-black'>
      <h1 className='text-2xl mb-4'>Todo List</h1>
      <ul>
        {todos?.map((todo) => (
          <li key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}