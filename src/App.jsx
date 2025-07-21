import React, { useEffect, useState } from "react";
import "./App.css";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import DepositForm from "./components/DepositForm";
import Overview from "./components/Overview";



function App() {
  const [goals, setGoals] = useState([]);
  const [deposits, setDeposits] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/goals")
      .then((res) => res.json())
      .then(setGoals);

    fetch("http://localhost:3000/deposits")
      .then((res) => res.json())
      .then(setDeposits);
  }, []);

  const addGoal = (goal) => {
    fetch("http://localhost:3000/goals", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(goal),
    })
      .then((res) => res.json())
      .then((newGoal) => setGoals([...goals, newGoal]));
  };

  const updateGoal = (id, updatedFields) => {
    fetch(`http://localhost:3000/goals/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals(goals.map((goal) => (goal.id === id ? updatedGoal : goal)));
      });
  };

  const deleteGoal = (id) => {
    fetch(`http://localhost:3000/goals/${id}`, { method: "DELETE" })
      .then(() => setGoals(goals.filter((goal) => goal.id !== id)));
  };

  const addDeposit = (deposit) => {
    fetch("http://localhost:3000/deposits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(deposit),
    })
      .then((res) => res.json())
      .then((newDeposit) => {
        setDeposits([...deposits, newDeposit]);
        const goal = goals.find((g) => g.id === deposit.goalId);
        if (goal) {
          updateGoal(goal.id, {
            savedAmount: (goal.savedAmount || 0) + deposit.amount,
          });
        }
      });
  };

  return (
    <div className="app-modern-bg">
      <div className="app-modern-container">
        <header className="app-modern-header">
          <h1>🚀 Smart Goal Planner</h1>
          <p className="app-modern-subtitle">Plan, track, and achieve your goals in style!</p>
        </header>
        <main>
          <section className="app-modern-card">
            <h2 className="app-modern-section-title">Add a New Goal</h2>
            <GoalForm onAddGoal={addGoal} />
          </section>
          <section className="app-modern-card">
            <h2 className="app-modern-section-title">Make a Deposit</h2>
            <DepositForm goals={goals} onAddDeposit={addDeposit} />
          </section>
          <section className="app-modern-card">
            <h2 className="app-modern-section-title">Overview</h2>
            <Overview goals={goals} deposits={deposits} />
          </section>
          <section className="app-modern-card">
            <h2 className="app-modern-section-title">Your Goals</h2>
            <GoalList
              goals={goals}
              onUpdateGoal={updateGoal}
              onDeleteGoal={deleteGoal}
            />
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
