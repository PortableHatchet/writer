import React from 'react';

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>

      {/* Basic Information */}
      <div>
        <h2>Basic Information</h2>
        <p>Name: John Doe</p>
        <p>Email: john@example.com</p>
        <p>Role: User</p>
      </div>

      {/* Progress Bars */}
      <div>
        <h2>Progress Bars</h2>
        <div className="progress-bar">
          <span>Task 1</span>
          <div className="progress">
            <div className="progress-inner" style={{ width: '60%' }}></div>
          </div>
        </div>
        <div className="progress-bar">
          <span>Task 2</span>
          <div className="progress">
            <div className="progress-inner" style={{ width: '80%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;