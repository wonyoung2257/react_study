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
  };

  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  let expensesContent = <p>지출 내역이 없음</p>;

  if (filteredExpense.length > 0) {
    expensesContent = filteredExpense.map((expense) => (
      <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
    ));
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filterYear} onSeletYear={filterChangeHandler} />
        {expensesContent}
      </Card>
    </div>
  );
}
export default Expenses;
