import React from 'react';


const Resolved = ({ tickets }) => {
  return (
    <div className="shadow p-5 border-2 rounded-xl border-green-400 hover:bg-green-100">
      <h2 className="text-xl font-bold ">{tickets.title}</h2>
      <p>Ticket No. {tickets.id}</p>
      <p>Name: {tickets.assigned_to}</p>
      <p>Date: {tickets.date_created}</p>
      <p className='bg-green-600 text-white p-2 rounded'>✓Resolved</p>
    </div>
  );
};

// Resolved Task Working

export default Resolved;