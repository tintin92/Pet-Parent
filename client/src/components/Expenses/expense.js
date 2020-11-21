import React, { useState } from 'react'
import { Card, Container } from 'reactstrap'
import Form from "../Form/form";
import ListExp from "../ListExp/list";

const ALL_EXPENSES = [
    { id: 1, name: 'Buy a book', amount: 20 },
    { id: 2, name: 'Buy a milk', amount: 5 },
    { id: 3, name: 'Book a flight ticket', amount: 225 }
]

function Expenses() {
    const [expenses, setExpenses] = useState(ALL_EXPENSES);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState('');

    const handleName = event => {
        console.log('Name ', event.target.value)
        setName(event.target.value)
    }

    const handleAmount = event => {
        console.log('Amount ', event.target.value)
        setAmount(event.target.value)
    }

    const handleSubmitForm = event => {
        event.preventDefault()
        // do something when submitting the form
    }

    return (
        <Container className="text-center">
            <Card>
                <h3 className="display-6">
                    Expense Tracker React App
        </h3>
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
                <Form
                    name={name}
                    amount={amount}
                    handleName={handleName}
                    handleAmount={handleAmount}
                    handleSubmitForm={handleSubmitForm}
                />
      <ListExp expenses={expenses} />
            </Card>
        </Container>
    )
}

export default Expenses