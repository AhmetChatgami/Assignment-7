import React from 'react';


const Resolved = ({ tickets }) => {
  return (
    <div className="shadow p-5 border-2 rounded-xl border-red-700">
      <h2 className="text-xl font-bold">{tickets.title}</h2>
      <p>Ticket No. {tickets.id}</p>
      <p>Name: {tickets.assigned_to}</p>
      <p>Date: {tickets.date_created}</p>
    </div>
  );
};


export default Resolved;