import React, { use, useState } from "react";

import TicketCard from "./Tickets/TicketCard";
import Banner from "./Banner";
import TicketStatus from "./Tickets/TicketStatus";
import Resolved from "./Tickets/Resolved";
import { toast } from "react-toastify";
import Footer from "./Footer";

const TicketContainer = ({ promise }) => {
  
  const tickets = use(promise);

  const [cards, setCards]=useState(tickets);

  const [ticketCards, setTicketCards] = useState([]);

  const [taskStatus, setTasktStatus] = useState([]);

  const handleTicket = (tickets) => {
   
    const isExist = ticketCards.find((item) => item.id == tickets.id);
    
    if (isExist) {
      toast.error("Already Added.");
      return;
    }

    const newTicketCards = [...ticketCards, tickets];
    setTicketCards(newTicketCards);
    const remainingCards= cards.filter((card)=> card.id!== tickets.id);
    setCards(remainingCards);
  };

  const handleTaskStatus = (ticket) => {
    toast.success("Resolved Task")
    const newTaskStatus = [...taskStatus, ticket];
    setTasktStatus(newTaskStatus);
    console.log(tickets)
    const remaining = ticketCards.filter((item) => item.id !== ticket.id);
    setTicketCards(remaining);

    const remainingCards= cards.filter((card)=> card.id!== ticket.id);
    setCards(remainingCards);
  };

  return (
    <div className="bg-gray-100">
      <Banner
        totalTicket={ticketCards.length}
        ticket={tickets.length}
        totalTask={taskStatus.length}
      ></Banner>
      <section className="w-11/12 mx-auto p-4 py-10 grid-cols-3 lg:grid-cols-12 gap-5">
        <div className=" lg:cols-span-9">
          <h2 className="font-semibold text-3xl">Customer Tickets</h2>

          <div className="grid lg:grid-cols-2 gap-5 space-y-5">
            {cards.map((item) => (
              <TicketCard
                handleTicket={handleTicket}
                key={item.id}
                tickets={item}
              ></TicketCard>
            ))}
          </div>
        </div>
        <div className="lg:col-span-3 mt-10">
          <h2 className="font-semibold text-3xl">Task Status</h2>
          <div className="p-10 px-2 text-sm  space-y-5">
            {ticketCards.map((ticket) => (
              <TicketStatus
                handleTaskStatus={handleTaskStatus}
                key={ticket.id}
                ticket={ticket}
              ></TicketStatus>
            ))}
          </div>
          <h2 className="font-semibold text-2xl">Resolved Task</h2>
          <div className="shadow-xl bg-white p-10 px-2 space-y-5 text-sm rounded ">
            {taskStatus.map(tickets=> <Resolved key={tickets.id} tickets={tickets}></Resolved>)}
          </div>
        </div>
      </section>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default TicketContainer;
