// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [currency, setCurrency] = useState("");
  const [countryA, setCountryA] = useState("");
  const [countryB, setCountryB] = useState("");
  const [output, setOutput] = useState(null);

  useEffect(() => {
    const fetchCurrency = async () => {
      if (currency && countryA && countryB) {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${currency}&from=${countryA}&to=${countryB}`
        );
        const data = await res.json();

        console.log(data);
        // console.log(data.rates);
        console.log(data.rates[countryB]);
        setOutput(data.rates[countryB]);
      }
    };

    fetchCurrency();
  }, [currency, countryA, countryB]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Enter currency"
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        />
        <select value={countryA} onChange={(e) => setCountryA(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <select value={countryB} onChange={(e) => setCountryB(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="CAD">CAD</option>
          <option value="INR">INR</option>
        </select>
        <p>
          {currency && countryA && countryB ? (
            <span> {output}</span>
          ) : (
            <span>OUTPUT</span>
          )}
        </p>
      </div>
    </>
  );
};

export default App;
