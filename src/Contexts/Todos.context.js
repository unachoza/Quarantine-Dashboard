import React, { createContext } from 'react';
import useLocalStorageReducer from 'Hooks/useLocalStorage.hook';
import todosReducer from 'Reducers/todos.reducer';

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer('todos', todosReducer);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>{props.children}</DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
