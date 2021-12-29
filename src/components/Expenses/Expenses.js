import { useState } from "react";
import ExpenseItem from "./Expenseltem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [filterYear, setfilterYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setfilterYear(selectedYear);
    console.log(selectedYear);
    console.log(props.items);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onSeletYear={filterChangeHandler} />
        {props.items.map(
          (expense) => (
            console.log(expense.title),
            (<ExpenseItem title={expense.title} amount={expense.amount} date={expense.date} />)
          )
        )}
      </Card>
    </div>
  );
}
export default Expenses;
