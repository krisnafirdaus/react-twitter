import React from "react";

const Dashboard = ({ user, followed, onFollow }) => {
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {user.name}</h2>
      {followed ? (
        <p>Followed</p>
      ) : (
        <div>
          <p>Not followed</p>
          <button onClick={onFollow}>Follow</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
