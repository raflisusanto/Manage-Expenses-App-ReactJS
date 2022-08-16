import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [enteredYear, setYear] = useState("2020");

  function yearFilterHandler(year) {
    setYear(year);
  }

  // Filter Array Based on Year Selected
  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === enteredYear;
  })

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={enteredYear}
          onChangedYear={yearFilterHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList expenses={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
