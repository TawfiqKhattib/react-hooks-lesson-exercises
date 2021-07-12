import React, { useEffect, useState } from 'react'
import { fetchExpenses } from '../data/utils'

export default function Exercise3() {
  // your code here
  let [expensesList, setexpenses] = useState([]);
  let [month, setmonth] = useState("");

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ]

  const expenses = async () => {
    let exp = await fetchExpenses(months.findIndex(monthSelected => monthSelected===month));
    setexpenses(exp);
  }

  useEffect(() => {
    expenses();
  }, [month])

  const changeInputtxt=function(e){
      setmonth(e.target.value)
      // expenses();
  }

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        {/* your code here... */}

        <div>
          <select value={month} onChange={changeInputtxt}>
          {months.map(month => <option>{month}</option>)}
          </select>
          </div>
          <table>
            {expensesList.map(expense => 
              <tr>
                <td>{expense.item}</td>
                <td>{expense.date}</td>
                <td>{expense.amount}</td>
              </tr>
            )}
          </table>
      </div>
    </div>
  )
}