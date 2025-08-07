import React, { use } from 'react';
import './App.css';
import { useState , useEffect } from 'react';

export default function App() {

  const [ammount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);



  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const handleFromCurrencyChange = (e) => {
    setFromCurrency(Number(e.target.value));
  };

  const handleToCurrencyChange = (e) => {
    setConvertedAmount(Number(e.target.value));
  };

  useEffect(() => {
    async function convert() {
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${ammount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await res.json();
      setExchangeRate(data.rates[toCurrency]);
    }
    convert();
  }, [ammount, fromCurrency, toCurrency]);


  return(
    <div>
      <input type="text" value={ammount} onChange={handleAmountChange} />
      <select value={fromCurrency} onChange={handleFromCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={toCurrency} onChange={handleToCurrencyChange}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>OUTPUT: {convertedAmount} {toCurrency}</p>
    </div>
  )
}