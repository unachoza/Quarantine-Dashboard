import React, { memo } from 'react';
import { List, Paper } from '@material-ui/core';
import TodoListItem from 'Components/TodoList/TodoListItem.component';

const TodoList = memo((props) => (
  <>
    {props.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        <List style={{ overflow: 'scroll', border: 'none', width: '100%' }}>
          {props.items.map((todo, idx) => (
            <TodoListItem
              {...todo}
              key={`TodoItem.${idx}`}
              divider={idx !== props.items.length - 1}
              onButtonClick={() => props.onItemRemove(idx)}
              onCheckBoxToggle={() => props.onItemCheck(idx)}
            />
          ))}
        </List>
      </Paper>
    )}
  </>
));
export default TodoList;
