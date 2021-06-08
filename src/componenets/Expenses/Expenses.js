import { useState } from "react";
import "./Expenses.css";
import ExpenseItem from "./ExpenseItim";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2021");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      ></ExpensesFilter>

      {
        props.items.map(expense =>
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date} />)
      }
    </Card>
  );
};

export default Expenses;
