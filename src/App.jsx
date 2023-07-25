import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import IncomeForm from './components/Header/IncomeForm';
import IncomeList from './components/IncomeList';
function App() {
  const [income, setIncome] = useState([]);
	const [totalIncome, setTotalIncome] = useState(0);

	useEffect(() => {
		let temp = 0;
		for(let i = 0; i < income.length; i++) {
			temp += parseInt(income[i].price);
		}

		setTotalIncome(temp);
	}, [income]);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Header totalIncome={totalIncome} />
			<IncomeForm income={income} setIncome={setIncome} />
			<IncomeList income={income} setIncome={setIncome} />
    </div>
  );
}

export default App;
