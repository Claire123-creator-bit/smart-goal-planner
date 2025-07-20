import React, { useState } from "react";

function GoalForm({ onAddGoal }) {
  const [name, setName] = useState("");
  const [targetAmount, setTargetAmount] = useState("");
  const [category, setCategory] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newGoal = {
      name,
      targetAmount: parseFloat(targetAmount),
      savedAmount: 0,
      category,
      deadline,
      createdAt: new Date().toISOString().split("T")[0] // "YYYY-MM-DD"
    };

    onAddGoal(newGoal);

    // Reset form
    setName("");
    setTargetAmount("");
    setCategory("");
    setDeadline("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Goal</h2>

      <input
        type="text"
        placeholder="Goal name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Target amount"
        value={targetAmount}
        onChange={(e) => setTargetAmount(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        required
      />

      <button type="submit">Add Goal</button>
    </form>
  );
}

export default GoalForm;
