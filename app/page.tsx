import { cookies } from 'next/headers'
import { createClient } from './utils/supabase/server'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('notes').select()

  return (
    <ul className='w-screen h-screen flex items-center justify-center flex-col bg-white text-black'>
      {todos?.map((todo, index) => (
        <li key={index}>
          {todo.title}
        </li>
      ))}
    </ul>
  )
}
