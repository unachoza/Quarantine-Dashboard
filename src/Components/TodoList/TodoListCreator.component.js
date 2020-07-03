import React, { memo } from 'react';

import { useInputValue, useTodos } from 'Components/TodoList/UseTodos.hooks';
import Button from '@material-ui/core/Button';
import Layout from 'Components/TodoList/Layout.component';

import { AddTodo } from 'Components/TodoList/AddTodo.component';
import TodoList from 'Components/TodoList/TodoListMaterial.component';
import { makeStyles } from '@material-ui/core/styles';

export const TodoApp = memo((props) => {
  const { inputValue, changeInput, clearInput, keyInput } = useInputValue();
  const { todos, addTodo, checkTodo, removeTodo } = useTodos();
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3),
      },
    },
  }));
  const classes = useStyles();
  const clearInputAndAddTodo = (_) => {
    clearInput();
    addTodo(inputValue);
  };

  return (
    <Layout style={{ width: 'fit-content' }}>
      <AddTodo
        inputValue={inputValue}
        onInputChange={changeInput}
        onButtonClick={clearInputAndAddTodo}
        onInputKeyPress={(event) => keyInput(event, clearInputAndAddTodo)}
      />
      <TodoList items={todos} onItemCheck={(idx) => checkTodo(idx)} onItemRemove={(idx) => removeTodo(idx)} />
      <div className={classes.root}>
        <Button size="large" variant="contained" color="primary">
          Save
        </Button>
      </div>
    </Layout>
  );
});
