import React from "react";


const Banner = ({ticket, totalTicket, totalTask}) => {
  
  return (
    <div className="bg-gray-100">
      {/* <div className='max-w-11/12 mx-auto p-4 grid grid-cols-2 items-center space-x-4 justify-center mt-10'>
                <div className='h-50 border flex flex-col justify-center items-center bg-radial-[at_25%_15%] from-[#632EE3] to-[#9F62F2] rounded'>
                    
                    <span className=''>In-Progress</span>
                    
                    <span className=''>Card 1</span>

                </div>
                <div className='h-50 border flex justify-center items-center bg-radial-[at_25%_15%] from-[#632EE3] to-[#9F62F2] rounded'>
                    <span>Card 2</span>
                </div>
            </div> */}

      <div className="max-w-11/12 mx-auto p-4 flex gap-4 grid grid-cols-1 md:grid-cols-2 gap-6 py-12">
        <div class="card">
          <span>In-Progress</span>
          <span className="text-4xl">{totalTicket}</span>
        </div>
        <div class="card2">
          <span>Resolved</span>
          <span className="text-4xl">{totalTask}</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
