import React from "react";

function GoalList({ goals, onUpdateGoal, onDeleteGoal }) {
  return (
    <div>
      <h2>Goals</h2>
      {goals.map((goal) => (
        <div key={goal.id} style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "1rem" }}>
          <h3>{goal.name}</h3>
          <p>Target: {goal.targetAmount}</p>
          <p>Saved: {goal.savedAmount}</p>
          <button onClick={() => onDeleteGoal(goal.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default GoalList;
