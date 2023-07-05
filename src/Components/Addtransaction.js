import React, { useState ,useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';


export default() => {
  const[text,setText] = useState("");
  const[amount,setAmount] = useState(0) 

const {addTransaction} = useContext(GlobalContext) 
 const onSubmit = e =>{
  e.preventDefault(); 
//   if(Number(amount) === 0){
//     alert('Please Enter the Amount')
//     return false
// }
// if(Number(amount) < 0) {
//     alert('Please Enter the Valid Amount')
//   return false
// }
  const newTransaction  = {
    id:Math.floor(Math.random() * 100000000),
    text,
    amount: +amount,
  } 
  addTransaction(newTransaction)
 }

  return (
    <div>
    <h3>Add New Transaction</h3>
    <form  onSubmit={onSubmit}>
          <div className="form-control">
              <label htmlFor="text"><h5>Transaction </h5></label>
              <input type="text" value = {text} onChange={(e)=>setText(e.target.value)} placeholder="Transaction Details"/>
          </div>
          <div className="form-control">
              <label htmlFor="amount"><strong>Amount</strong> <br/> </label>
              <input type="number" value = {amount} onChange={(e)=>setAmount(e.target.value)}  placeholder="Transaction amount in dollars"/> 
          </div>
          <button className="btn">Submit</button>
      </form>
    </div>
  )
}
