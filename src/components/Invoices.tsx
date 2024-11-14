import React from 'react';

interface Invoice {
    id: number;
    customer: string;
    amount: number;
    dueDate: string;
}

const invoices: Invoice[] = [
    { id: 1, customer: 'John Doe', amount: 250.0, dueDate: '2023-10-01' },
    { id: 2, customer: 'Jane Smith', amount: 450.0, dueDate: '2023-10-15' },
    { id: 3, customer: 'Mike Johnson', amount: 300.0, dueDate: '2023-11-01' },
];

const Invoices: React.FC = () => {
    return (
        <div>
            <h1>Invoices</h1>
            <ul>
                {invoices.map((invoice) => (
                    <li key={invoice.id}>
                        <p>Customer: {invoice.customer}</p>
                        <p>Amount: ${invoice.amount.toFixed(2)}</p>
                        <p>Due Date: {invoice.dueDate}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Invoices;