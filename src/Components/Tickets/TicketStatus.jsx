const TicketStatus = ({ ticket, handleTaskStatus }) => {
 
  return (
    <div
      className="rounded p-5 bg-white shadow hover:shadow-lg"
      style={{
        // background: "linear-gradient(#ffffff70, #FCB700), url('/cook-bg.gif')",
      }}
    >
      {/* Title */}
      <h3 className="text-xl font-bold mb-2">
        {ticket.title}
      </h3>

      {/* Quantity */}
      <p className="text-sm font-semibold">
        Order No. <span className="text-gray-700">{ticket.id}</span>
      </p>

      {/* Special Instruction */}
      <p className="text-xs text-gray-600 mt-2 italic">
        {ticket.description_snippet}
      </p>

      {/* Static Button */}
      <button
        onClick={()=> handleTaskStatus(ticket)}
        className="px-6 mt-3 py-1 shadow text-sm w-full hover:bg-green-800 items-center hover:text-white bg-green-600 cursor-pointer rounded"
      >
        Completed
      </button>
    </div>
  );
};

export default TicketStatus;