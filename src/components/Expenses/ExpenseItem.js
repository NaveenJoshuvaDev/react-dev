import './ExpenseItem.css';
import Card  from '../UI/Card';
import ExpenseDate from "./ExpenseDate";
const ExpenseItem = (props) => {
    // const expenseDate = new Date(2022, 2, 28);
    // const expenseTitle='Car Insurance';
    // const expenseAmount= 295.5;
   
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price '>${props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
