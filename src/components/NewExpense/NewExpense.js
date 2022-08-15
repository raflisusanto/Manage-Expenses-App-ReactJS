import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {
    function formDataHandler(expenseData) {
        const expense = {
            ...expenseData,
            id: Math.random().toString()
        };
        props.onProperExpenseData(expense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onExpenseFormSubmit={formDataHandler} />
        </div>
    );
}

export default NewExpense;