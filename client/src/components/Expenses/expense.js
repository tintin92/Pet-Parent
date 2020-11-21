import React, { useState } from 'react'
import { Card, Container } from 'reactstrap'

const ALL_EXPENSES = [
  { id: 1, name: 'Buy a book', amount: 20 },
  { id: 2, name: 'Buy a milk', amount: 5 },
  { id: 3, name: 'Book a flight ticket', amount: 225 }
]

function Expenses() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES)

  return (
    <Container className="text-center">
        <Card>
      {/* <Jumbotron fluid> */}
        {/* <h3 className="display-6">
          Expense Tracker React App
          <img src={Logo} style={{ width: 50, height: 50 }} alt="react-logo" />
        </h3> */}
        <div>
          <p>
            Total Expense:{' '}
            <span className="text-success">
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
        </Card>
      {/* </Jumbotron> */}
    </Container>
  )
}

export default Expenses