import { useReducer, useEffect } from 'react';
import { useFetch } from './';


// Init reducer
const init = () => {
  return JSON.parse(localStorage.getItem('productCart')) || [];
}

export const useTodos = (todoReducer) => {

  // Product data
  const {
    data: productData,
    isLoading
  } = useFetch("https://corebiz-test.herokuapp.com/api/v1/products");

  // Todo reducer
  const [todos, dispatch] = useReducer(todoReducer, [], init);


  // Reducer push local storage
  useEffect(() => {

    localStorage.setItem('productCart', JSON.stringify(todos));

  }, [todos]);


  // Add new todo
  const handleNewTodo = (todo) => {

    const action = {
      type: '[TODO] Add Todo',
      payload: todo
    };

    dispatch (action);

  };

  // Delete todo
  const handleDeleteTodo = (todo) => {

    const action = {
      type: '[TODO] Delete Todo',
      payload: todo
    };

    dispatch (action);
  };

  return {
    productData,
    isLoading,
    todos,
    handleNewTodo,
    handleDeleteTodo,
    totalCart: todos.length
  }
}