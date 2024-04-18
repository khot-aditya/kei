import { useEffect, useState } from "react";

interface Todo {
    id: number;
    title: string;
}

const useController = () => {
    const [todos, setTodos] = useState<Todo[]>([]);

    useEffect(() => {
        // Register service worker
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker
                .register('/service-worker.js')
                .then((registration) => console.log('Service worker registered with scope: ', registration.scope))
                .catch((error) => console.error('Service worker registration failed: ', error));
        }

        // Fetch todos
        async function fetchTodos() {
            try {
                const response = await fetch('/api/list');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data: Todo[] = await response.json();
                setTodos(data);
            } catch (error) {
                console.error('Fetching todos failed: ', error);
            }
        }

        // fetchTodos();
    }, []);


    return { todos };
}

export default useController