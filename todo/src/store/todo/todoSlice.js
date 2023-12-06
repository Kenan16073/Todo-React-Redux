import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    todos: [],
};


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducer: {
        setTodo(state, action) {
            const todo = {
                id: Math.random() ,
                text: action.payload,
            }
            state.todos.push(todo)
            state.count += 1;
        },
        setDelete(state, action) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
            state.count -= 1;
        }
    }
})

export const { setTodo, setDelete } = todoSlice.actions

export default todoSlice.reducer