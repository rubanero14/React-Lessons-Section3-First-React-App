import React from "react";
import "./ExpensesFilter.css";

const ExpensesFilter = (props) => {
  const dateFilterHandler = (e) => {
    const year = e.target.value || props.setInitialYearValues();
    props.onFilterDateChange(year);
  };

  const setYearValues = (n) => {
    return (new Date().getFullYear() - n).toString();
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dateFilterHandler} value={props.selectedYear}>
          <option value={setYearValues(-1)}>{setYearValues(-1)}</option>
          <option value={setYearValues(0)}>{setYearValues(0)}</option>
          <option value={setYearValues(1)}>{setYearValues(1)}</option>
          <option value={setYearValues(2)}>{setYearValues(2)}</option>
          <option value={setYearValues(3)}>{setYearValues(3)}</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
