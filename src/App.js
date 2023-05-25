import React from "react";
import './App.css'
import Header from "./Components/Header";
import Balance from "./Components/Balance";
import IncomExpenses from "./Components/IncomExpenses";
import TransactionList from "./Components/TransactionList";
import Addtransaction from "./Components/Addtransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider >
    <Header />
    <div className="container">
       <Balance />
       <IncomExpenses/>
       <TransactionList />
       <Addtransaction />
    </div>
  </GlobalProvider>
  );
}

export default App;
