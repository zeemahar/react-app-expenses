import React ,{useContext}from 'react'
import { GlobalContext } from '../context/GlobalState';


export default ({transaction}) => {   
const {deleteTransaction} = useContext(GlobalContext)

   
    let value = transaction.amount< 0 ? '-': '+';

  return (
    <li className={transaction.amount< 0 ? 'minus' : 'plus'}>
          {transaction.text} <span>{value}${Math.abs(transaction.amount)}</span>
          <button  onClick ={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
  )
}