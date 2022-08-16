import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);

  function formDataHandler(expenseData) {
    const expense = {
      ...expenseData,
      id: Math.random().toString(),
    };
    props.onProperExpenseData(expense);
    setIsEditing(false);
  }

  function cancelHandler() {
    setIsEditing(false);
  }

  function showFormHandler() {
    setIsEditing(true);
  }

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={showFormHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onExpenseFormSubmit={formDataHandler}
          onCancel={cancelHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
