import React, { useState } from "react";
import { BI_WEEKLY, MONTHLY, WEEKLY } from "../constants";
import CalculationSummary from "./CalculationSummary";
import InputCurrency from "./InputCurrency";
import InputPercentage from "./InputPercentage";
import InputSelect from "./InputSelect";
import "./MortgageCalculator.css";

export default function MortgageCalculator() {
  const [mortgageAmount, setMortgageAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [amortizationYears, setAmortizationYears] = useState(0);
  const [paymentFrequency, setPaymentFrequency] = useState(MONTHLY);
  const [payment, setPayment] = useState(0);
  const [noOfPayment, setNoOfPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  const calculateMortgage = (e) => {
    e.preventDefault(); // prevent form redirect behaviour
    if (!amortizationYears || !mortgageAmount || !interestRate) {
      return false;
    }

    // payment(EMI) = principal * r(1+r)^n/(1+r)^n-1

    //p = borrowed amount
    // r = rate of interest => interestRate/100/12
    // n = numberOfPayment => frequency of payment

    const p = mortgageAmount ;
    let n = 0;
    if (paymentFrequency === WEEKLY) {
        n = parseInt(52 * amortizationYears);
    } else if (paymentFrequency === BI_WEEKLY) {
        n = parseInt(26 * amortizationYears);
    } else {
      n = 12 * amortizationYears;
    }

    const r = interestRate/100/12;

    const payment = Number(p * ( r * Math.pow(1+r, n) / (Math.pow(1+r, n) - 1) )).toFixed(2)

    setPayment(payment)
    setNoOfPayment(n)
    setTotalInterest(Number(n*payment - p).toFixed(2))

  };

  return (
    <div className="mortgage-calculator">
      <form
        className="mortgage-calculator__form"
        action=""
        onSubmit={calculateMortgage}
      >
        <header className="mortgage-calculator__form-header">
          <h3>Payment Plan</h3>
        </header>
        <section className="mortgage-calculator__form-body">
          <InputCurrency
            label="Mortgage Amount:"
            id="mortgage-amount"
            value={mortgageAmount}
            onChange={setMortgageAmount}
          />
          <InputPercentage
            label="Interest Rate:"
            id="Interest Rate"
            value={interestRate}
            onChange={(value) => setInterestRate(value)}
          />
          <InputSelect
            label="Amortization Period: "
            id="Amortization years"
            options={[
              {
                value: "1",
                displayValue: "1 Years",
              },
              {
                value: "2",
                displayValue: "2 Years",
              },
              {
                value: "3",
                displayValue: "3 Years",
              },
              {
                value: "4",
                displayValue: "4 Years",
              },
              {
                value: "5",
                displayValue: "5 Years",
              },
              {
                value: "10",
                displayValue: "10 Years",
              },
              {
                value: "15",
                displayValue: "15 Years",
              },
              {
                value: "20",
                displayValue: "20 Years",
              },
              {
                value: "25",
                displayValue: "25 Years",
              },
            ]}
            value={amortizationYears}
            onChange={setAmortizationYears}
          />
          <InputSelect
            label="Payment Frequency:"
            id="payment-frequency"
            options={[
              {
                value: "W",
                displayValue: "Weekly",
              },
              {
                value: "BiW",
                displayValue: "Bi-weekly",
              },
              {
                value: "M",
                displayValue: "Monthly",
              },
            ]}
            value={paymentFrequency}
            onChange={setPaymentFrequency}
          />
        </section>
        <button type="submit">Calculate</button>
      </form>
      <section className="mortgage-calculator__summary">
        { payment > 0 && <CalculationSummary noOfPayment={noOfPayment}
        payment={payment} mortgageAmount={mortgageAmount} totalInterest={totalInterest} /> }
      </section>
    </div>
  );
}
