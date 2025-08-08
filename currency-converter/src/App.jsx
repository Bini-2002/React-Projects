import './App.css';
import { useState , useEffect } from 'react';

export default function App() {

  const [ammount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [exchangeRate, setExchangeRate] = useState(0);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isLoading, setisLoading] = useState(false);



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
      setisLoading(true);
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${ammount}&from=${fromCurrency}&to=${toCurrency}`);
      const data = await res.json();
      setExchangeRate(data.rates[toCurrency]);
      setisLoading(false);
    }
    if(fromCurrency === toCurrency) {
      setConvertedAmount(ammount);
      return;
    }

    convert();
  }, [ammount, fromCurrency, toCurrency]);


  return(
    <div>
      <input 
      type="text" 
      value={ammount} 
      onChange={handleAmountChange} />
      disabled={isLoading}

      <select 
      value={fromCurrency} 
      onChange={handleFromCurrencyChange}
      disabled={isLoading}
      >
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