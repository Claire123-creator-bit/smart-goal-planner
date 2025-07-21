import React from "react";

function GoalList({ goals, onUpdateGoal, onDeleteGoal }) {
  return (
    <ul className="modern-list">
      {goals.map((goal) => (
        <li key={goal.id} className="modern-list-item">
          <span className="modern-list-title">
            {goal.name}
          </span>
          <span className="modern-list-progress">
            ${goal.savedAmount || 0} / ${goal.targetAmount}
          </span>
          <button className="modern-btn modern-btn-danger" onClick={() => onDeleteGoal(goal.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default GoalList;
