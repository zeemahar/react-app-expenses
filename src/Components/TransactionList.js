import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import Transactions from './Transactions';



export default (transaction) => {
  
  
const {transactions} = useContext(GlobalContext)

  return (
    <div>
        <h3> Transaction History</h3>
      <ul  className="list">
        {transactions.map(transaction=>(<Transactions key = {transaction.id} transaction = {transaction}/>))}
         
      </ul>
    </div>
  )
}