import React, { useState } from "react";

function DepositForm({ goals, onAddDeposit }) {
  const [goalId, setGoalId] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddDeposit({
      goalId: parseInt(goalId),
      amount: parseFloat(amount),
    });
    setAmount("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Make a Deposit</h2>
      <select
        value={goalId}
        onChange={(e) => setGoalId(e.target.value)}
        required
      >
        <option value="">Select a goal</option>
        {goals.map((goal) => (
          <option key={goal.id} value={goal.id}>
            {goal.name}
          </option>
        ))}
      </select>
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Deposit</button>
    </form>
  );
}

export default DepositForm;
