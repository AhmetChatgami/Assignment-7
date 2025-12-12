import { Calendar, UtensilsCrossed } from "lucide-react";

const TicketCard = ({ tickets , handleTicket }) => {
  
 
  return (
    
    <div
    
      onClick={() => handleTicket(tickets)} 
      className="p-5 mt-8 bg-white rounded shadow-xl relative space-y-3 cursor-pointer"
    >
      {/* Title */}
      <h2 className="text-xl flex items-center gap-2">{tickets.title}</h2>

      {/* Description */}
      <div className="mt-3 text-xs justify-center items-center">
        <h4 className=""></h4>
        <p>{tickets.description_snippet}</p>
      </div>

      {/* Ticket Status */}
      <div className="absolute right-2 top-2 flex justify-center items-center bg-green-400 rounded-xl px-4 opacity-80 text-white">
        {tickets.status}
      </div>

      <div className="flex justify-between">
        <div>
          {/* Ticket Number */}
          <p className="text-xs text-gray-400 p-2 inline-block rounded-xl">
            #{tickets.id}
          </p>
          <p className="text-xs p-2 text-amber-400 inline-block">
            {tickets.priority}
          </p>
        </div>

        <div className="flex">
          <p className="text-xs p-2 text-gray-500 inline-block">
            {tickets.assigned_to}
          </p>
          <Calendar />
          <p className="text-xs p-2 text-gray-500 inline-block">
            {tickets.date_created}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
