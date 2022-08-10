export const todoReducer = (initialState, action) => {

  switch (action.type) {

    // Add todo
    case '[TODO] Add Todo':
      return [
        ...initialState,
        action.payload
      ];
    
    // Delete todo
    case '[TODO] Delete Todo':
      return initialState.filter((todo) => todo.id !== action.payload);
  
    default :
      return initialState;

  };

};