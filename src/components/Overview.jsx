import React from "react";

function Overview({ goals, deposits }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, goal) => sum + (goal.savedAmount || 0), 0);
  const totalDeposits = deposits.length;

  return (
    <div>
      <h2>Overview</h2>
      <p>Total Goals: {totalGoals}</p>
      <p>Total Deposits: {totalDeposits}</p>
      <p>Total Saved: {totalSaved}</p>
    </div>
  );
}

export default Overview;
