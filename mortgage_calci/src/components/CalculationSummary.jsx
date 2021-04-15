import React from 'react'

export default function CalculationSummary({ noOfPayment, payment, mortgageAmount, totalInterest}) {
    return (
        <div>
            <table>
          <caption>Mortgage Calculation Summary</caption>
          <thead>
            <tr>
              <th>Category</th>
              <th>Amortization Period</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Number of Payments</td>
              <td>{noOfPayment}</td>
            </tr>
            <tr>
              <td>Mortgage Payment</td>
                <td>{'$'+payment}</td>
            </tr>
            <tr>
              <td>Principal Payments</td>
              <td>{"$" + mortgageAmount}</td>
            </tr>
            <tr>
              <td>Interest Payments</td>
              <td>{"$" + totalInterest}</td>
            </tr>
            <tr>
              <td>Total Cost</td>
            <td>{`$ ${parseFloat(totalInterest)+ parseFloat(mortgageAmount)}`}</td>
            </tr>
          </tbody>
        </table>
        </div>
    )
}
