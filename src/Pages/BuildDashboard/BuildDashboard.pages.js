import React from 'react';
import Onboarding from 'Components/Onboarding/Onboarding.component';
import 'Pages/BuildDashboard/BuildDashboard.styles.css';

const BuildDashboard = () => {
  return (
    <div className="BuildDashboard__container">
      <div className="buildDashboard__title">
        <strong>Build Your Dashboard</strong>
      </div>
      <Onboarding />
      <section>
        <ul>
          <li>Reading List</li>
          <li>Watch List</li>
          <div>HBO Free content</div>
          <div>PornHub Free Premium Account</div>
          <li>Baking List</li>
          <li>Quarantine Blog</li>
          <li>Quarantine Cleanings</li>
          <li>Things I will do when this is all over</li>
          <li>Best Part of Quarantine</li>
          <li>Quarantine Sales. Online Shoping!</li>
          <li>Learn a skill</li>
          <div>Languages</div>
          <div>Learn to Code</div>
          <li>Calendar</li>
          <li>DYI Projects</li>
          <li>Work From Home Tips</li>
          {/* Wallstreent Joournal Tech news podcast */}
          <li>Exercise</li>
          <li>Mental Health</li>
          {/* Headspace */}
          <li>Social Ideas</li>
          {/* DJ streaming, skype dinners, apps house party, zoom */}
          <li>masks</li>
          <li>shoping lists</li>
          <li>kids activities</li>
          <li>News</li>
          <li>Hair Diary</li>
          {/* photo upload */}

          {/* president updates, governor updates, feel good stories, animals */}
        </ul>
      </section>
    </div>
  );
};

export default BuildDashboard;
