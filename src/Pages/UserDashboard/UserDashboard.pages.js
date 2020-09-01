import React from 'react';
import Header from 'UI/Header';
import ProgressBar from 'Components/ProgressBar/ProgressBar.component';
import Counter from 'Components/AutoCounter/AutoCounter.component';
import { TodoApp } from 'Components/TodoList/TodoListCreator.component';

import 'Pages/UserDashboard/UserDashboard.styles.css';

const UserDashboard = () => {
  return (
    <>
      <div className="user-dashboard-container">
        <Header />
        <TodoApp />
        <ProgressBar />
        <Counter />
      </div>
    </>
  );
};

export default UserDashboard;
