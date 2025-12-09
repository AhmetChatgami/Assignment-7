import { UtensilsCrossed } from "lucide-react";

const TicketCard = ({ tickets }) => {
  // Static data (mock order)
  //   console.log(order);
// const tickets= {
//   "id": "#1001",
//   "title": "Login Issues - Can't Access Account",
//   "status": "Open",
//   "priority": "HIGH PRIORITY",
//   "description_snippet": "Customer is unable to log in to their account. They've tried resetting their password multiple times but still...",
//   "assigned_to": "John Smith",
//   "date_created": "1/15/2024"
// }
  return (
    <div
      
      className="p-5 bg-white rounded-xl shadow-xl relative space-y-3"
    >
      {/* Ticket Number */}
      <p className="text-xs bg-amber-400 p-2 inline-block rounded-xl">
        #{tickets.id}
      </p>

      {/* Title */}
      <h2 className="text-xl flex items-center gap-2">
        
        {tickets.title}
      </h2>

      {/* Description */}
      <div className="mt-3 text-xs">
        <h4 className="text-amber-400 font-bold text-sm">Instruction</h4>
        <p>{tickets.description_snippet}</p>
      </div>

      {/* Ticket Status */}
      <div className="absolute right-2 top-2 flex justify-center items-center bg-green-400 rounded-xl px-4 opacity-80 text-white">
        {tickets.status}
      </div>
    </div>
  );
};

export default TicketCard;
