import React from 'react';
import 'Components/Onboarding/Onboarding.styles.css';

const typesOfStats = [
  'Build Your Todo List',
  'Create Your Goals List',
  'Add Countdowns',
  'Create a Calendars',
  'Add News Widget',
];
const Onboarding = () => {
  const handleClick = (e) => {
    console.log(e.target, 'was clicked');
  };
  return (
    <div className="Onboarding__container">
      <strong>Keep track of your time, keep track for your sanity, keep track of your mondays</strong>
      <section>
        Add Components that are meaningful to your dashboard
        <div className="onboarding__title">Add Components </div>
        {typesOfStats.map((stat, i) => (
          <button key={i} onClick={(e) => handleClick(e)}>
            {stat}
          </button>
        ))}
      </section>
    </div>
  );
};

export default Onboarding;
