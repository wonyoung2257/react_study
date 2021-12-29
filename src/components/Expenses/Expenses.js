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

  return (
    <div>
      <ExpensesFilter selected={filterYear} onSeletYear={filterChangeHandler} />
      <Card className="expenses">
        <ExpenseItem
          title={props.items[0].title}
          amount={props.items[0].amount}
          date={props.items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[1].title}
          amount={props.items[1].amount}
          date={props.items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[2].title}
          amount={props.items[2].amount}
          date={props.items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.items[3].title}
          amount={props.items[3].amount}
          date={props.items[3].date}
        ></ExpenseItem>
      </Card>
    </div>
  );
}
export default Expenses;
