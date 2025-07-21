import React from "react";

function Overview({ goals, deposits }) {
  const totalGoals = goals.length;
  const totalSaved = goals.reduce((sum, g) => sum + (g.savedAmount || 0), 0);
  const totalTarget = goals.reduce((sum, g) => sum + (g.targetAmount || 0), 0);
  const totalDeposits = deposits.reduce((sum, d) => sum + (d.amount || 0), 0);

  return (
    <div className="modern-overview">
      <div className="modern-overview-item">
        <span className="modern-overview-label">Total Saved</span>
        <span className="modern-overview-value">${totalSaved}</span>
      </div>
      <div className="modern-overview-item">
        <span className="modern-overview-label">Total Target</span>
        <span className="modern-overview-value">${totalTarget}</span>
      </div>
      <div className="modern-overview-item">
        <span className="modern-overview-label">Total Deposits</span>
        <span className="modern-overview-value">${totalDeposits}</span>
      </div>
    </div>
  );
}

export default Overview;
