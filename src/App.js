import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const MonthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
  ];
  const WeekNames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
  ];
  const [date, setDate] = useState(new Date().getDate());
  const year = new Date().getFullYear(); 
  const [month, setMonth ] = useState(new Date().getMonth());
  const [week, setWeek] = useState(new Date().getDay());
  const [step, setStep] = useState(1);
  const [count, setCount]  = useState(0); 
  const Increase_Step = () => {
      setStep(st => st + 1);
  }
  const Decrease_Step = () => {
      setStep(st => st  - 1);
}
const Increase_Count = () =>{
    setCount(c => c + step);
    setDate(date + step);
    setWeek(week => week === 6 ? 0 : week + 1);
    // get max number of days 
    const maxDayOfMonth = new Date(year, month, 0).getDate();
    if(date + step > maxDayOfMonth){
      setMonth(month => month + 1);
      setDate(1);
    }
}
const Decrease_Count = () => {
  setCount(c => c - step);
 setDate(date - step);
}

  return (
    <div className='App'>
      <div className='step'>
        <button onClick={Decrease_Step}>-</button>
        <span>Step: {step}</span>
        <button onClick={Increase_Step}>+</button>
      </div>
      <div className='count'>
        <button onClick={Decrease_Count}>-</button>
        <span>Count: {count}</span>
        <button onClick={Increase_Count}>+</button>
      </div>
      <div className='date'>
       {
  
        count < 0 ? ` ${Math.abs(count)} days ago from Today is ${WeekNames[week]} ${MonthNames[month]} ${date} ${year}`: 
        count > 0 ?  `${count} days from Today is ${WeekNames[week]} ${MonthNames[month]} ${date} ${year}` :
        `Today is ${WeekNames[week]} ${MonthNames[month]} ${date} ${year}`
       
      }
      </div>
    </div>
  );
}

export default App;
