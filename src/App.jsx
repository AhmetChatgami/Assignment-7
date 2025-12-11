import { Suspense, useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";

import TicketContainer from "./Components/TicketContainer";
import { ToastContainer } from "react-toastify";

const loadTickets = () =>
  fetch("/public/tickets.json").then((res) => res.json());
function App() {
  const [count, setCount] = useState(0);

  const ticketPromise = loadTickets();

  return (
    <>
      <Navbar></Navbar>

      <Suspense fallback={"Tickets coming..."}>
        <TicketContainer promise={ticketPromise}></TicketContainer>
      </Suspense>
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        
      />
    </>
  );
}

export default App;
