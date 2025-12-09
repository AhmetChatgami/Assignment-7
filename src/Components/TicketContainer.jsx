import React, { use } from "react";

import TicketCard from "./Tickets/TicketCard";
import Banner from "./Banner";

const TicketContainer = ({ promise }) => {
  const tickets = use(promise);
  console.log(tickets);
  return (
    <div className="bg-gray-100">
      <Banner ticket={tickets.length}></Banner>
      <section className="w-11/12 mx-auto p-4 py-10 grid grid-cols-1 lg:grid-cols-12 gap-5">
        <div className=" lg:cols-span-7">
          <h2 className="font-semibold text-3xl">Customer Tickets</h2>

          <div className="space-y-5">
            {tickets.map((item) => (
              <TicketCard key={item.id} tickets={item}></TicketCard>
            ))}
          </div>
        </div>
        <div className="lg:col-span-5 space-y-5">
          <h2 className="font-semibold text-3xl">Task Status</h2>
          <div className="shadow-xl p-10 rounded bg-white"></div>
        </div>
      </section>
    </div>
  );
};

export default TicketContainer;
