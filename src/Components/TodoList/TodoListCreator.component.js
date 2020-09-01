import React, { memo } from 'react';
import { useInputValue, useTodos } from 'Hooks/UseTodos.hooks';
import Button from '@material-ui/core/Button';
import Layout from 'Components/TodoList/Layout.component';
import { AddTodo } from 'Components/TodoList/AddTodo.component';
import TodoList from 'Components/TodoList/TodoListMaterial.component';
import { makeStyles } from '@material-ui/core/styles';
import uuid from 'uuid';

export const TodoApp = memo((props) => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(2),
      },
    },
  }));
  const classes = useStyles();
  const clearInputAndAddTodo = (_) => {
    clearInput();
    addTodo(inputValue);
  };
  const saveTodoListToDashboard = () => {
    console.log('this was clicked and these are todos', todos);
    todos.forEach((todo) => window.localStorage.setItem(JSON.stringify(uuid()), JSON.stringify(todo)));
    console.log(window.localStorage, 'is this thing on');
  };

  return (
    <Layout style={{ width: '300px' }}>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList items={todos} onItemCheck={(idx) => checkTodo(idx)} onItemRemove={(idx) => removeTodo(idx)} />

      <div className={classes.root}>
        <Button variant="contained" color="primary" onClick={saveTodoListToDashboard}>
          Save
        </Button>
      </div>
    </Layout>
  );
});
