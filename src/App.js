import React, { useState, useEffect } from "react";

// Loader component
const Loader = () => {
  return <p>Loading...</p>;
};

// ErrorMessage component
const ErrorMessage = ({ message }) => {
  return (
    <p style={{ color: "red" }}>
      <span>{message}</span>
    </p>
  );
};

// Main App component
const App = () => {
  const [currency, setCurrency] = useState(""); // Amount to convert
  const [countryA, setCountryA] = useState("USD"); // From currency
  const [countryB, setCountryB] = useState("EUR"); // To currency
  const [output, setOutput] = useState(null); // Converted amount or message
  const [error, setError] = useState(null); // Error message
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    const fetchCurrency = async () => {
      if (currency && countryA && countryB) {
        try {
          setLoading(true); // Set loading to true before fetch
          setError(null); // Reset any previous errors

          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${currency}&from=${countryA}&to=${countryB}`
          );
          if (!res.ok) throw new Error("Error fetching currency data");

          const data = await res.json();

          if (data.rates && data.rates[countryB]) {
            setOutput(data.rates[countryB]); // Calculate the converted amount
          } else {
            setOutput("Conversion rate not available.");
          }
        } catch (err) {
          setError(err.message); // Set error message
        } finally {
          setLoading(false); // Set loading to false after fetch
        }
      }
    };

    fetchCurrency();

    return () => {
      setOutput(null);
      setLoading(false);
      setError(null);
    };
  }, [currency, countryA, countryB]); // Dependencies: re-fetch on change

  return (
    <div className="px-20 lg:pt-[150px] lg:pb-[400px] pt-20 pb-[300px] sm:px-[20px] md:px-[240px] lg:px-[400px]">
      <h1 className="sm:text-3xl text-2xl font-bold text-blue-700 flex justify-center mb-6">
        Currency Calculator
      </h1>
      <div className="flex justify-center gap-10">
        <div className="">
          <h3 className="font-bold mb-3 text-2xl">AMOUNT</h3>
          <input
            type="number" // Use number input for currency amount
            placeholder="Amount"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            className=" w-[80px] bg-blue-700 text-white rounded-md p-2"
          />
        </div>

        <div className="">
          <h3 className="font-bold mb-3 text-2xl">FROM</h3>
          <select
            value={countryA}
            onChange={(e) => setCountryA(e.target.value)}
            className=" w-[80px] bg-blue-700 text-white rounded-md p-2"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </select>
        </div>

        <div className="">
          <h3 className="font-bold mb-3 text-2xl">TO</h3>
          <select
            value={countryB}
            onChange={(e) => setCountryB(e.target.value)}
            className=" w-[80px] bg-blue-700 text-white rounded-md p-2"
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="CAD">CAD</option>
            <option value="INR">INR</option>
          </select>
        </div>
      </div>

      <div className="flex justify-center font-bold text-4xl text-blue-700 mt-6">
        {loading ? (
          <Loader /> // Display loader when fetching data
        ) : error ? (
          <ErrorMessage message={error} /> // Display error message if there's an error
        ) : output !== null ? (
          typeof output === "number" ? (
            <p>{output.toFixed(2)}</p> // Display the converted amount
          ) : (
            <p>{output}</p> // Display any other message
          )
        ) : (
          <p>OUTPUT</p> // Prompt for input
        )}
      </div>
    </div>
  );
};

export default App;
