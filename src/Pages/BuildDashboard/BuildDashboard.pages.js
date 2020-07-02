import React from 'react';
import Onboarding from 'Components/Onboarding/Onboarding.component';
import { TodoApp } from 'Components/TodoList/TodoListCreator.component';
import 'Pages/BuildDashboard/BuildDashboard.styles.css';

const BuildDashboard = () => {
  return (
    <div className="BuildDashboard__container">
      <div className="buildDashboard__title">
        <strong>Build Your Dashboard</strong>
      </div>
      <Onboarding />
      {/* <TodoApp /> */}
    </div>
  );
};

export default BuildDashboard;
