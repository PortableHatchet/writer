import React, { useState, useEffect } from 'react';
import './Dashboard.css'; // Import your CSS file
import { useMinimized } from './MinimizedContext';

function Dashboard() {
  // State for user information
  const { isMinimized } = useMinimized();
  const [name, setName] = useState(localStorage.getItem('user_name') || '');
  const [projectName, setProjectName] = useState(localStorage.getItem('project_name') || '');
  const [goal, setGoal] = useState(100); // Default goal
  const [progress, setProgress] = useState(parseInt(localStorage.getItem('progress') || 0, 10));


  useEffect(() => {
    if (!projectName) {
      const projectName = prompt('Enter the name of your project:');
      if (projectName) {
        setProjectName(projectName);
        localStorage.setItem('project_name', projectName);
      }
    }
  }, [projectName]);

  useEffect(() => {
    localStorage.setItem('user_name', name);
    localStorage.setItem('project_name', projectName);
  }, [name, projectName]);

  // Handle progress input change
  const handleProgressChange = (event) => {
    const value = parseInt(event.target.value, 10);
    setProgress(value);
    localStorage.setItem('progress', value);
  };

  // Calculate percentage progress
  const percentage = (progress / goal) * 100;

  return (
    
    <div className={`dashboard-container ${isMinimized ? 'minimized' : ''}`}>
      <h1>Dashboard</h1>
      {/* Basic Information */}
      <div className="section">
        <div className="info-item">
          <span>Project Name:</span>
          <p>{projectName}</p>
        </div>
      </div>

      {/* Goal and Progress Bars */}
      <div className="section">
        <h2>Progress Bars</h2>
        <div className="goal-input">
          <label>Words Typed Goal:</label>
          <input
            type="number"
            value={goal}
            onChange={(e) => setGoal(parseInt(e.target.value, 10))}
          />
        </div>
        <div className="progress-bar">
          <span>Words Typed:</span>
          <div className="progress">
            <div className="progress-inner" style={{ width: `${percentage}%` }}></div>
          </div>
          <div className="progress-info">
            <span>{progress} words typed</span>
            <input
              type="number"
              value={progress}
              onChange={handleProgressChange}
              max={goal}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
