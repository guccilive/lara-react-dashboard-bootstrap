import React, { useState } from 'react';
import './budgetreport.css';
import CardFilter from './CardFilter';
import BudgetChart from './BudgetChart';

function BudgetReport({items}) {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    }

    return (
        <div className="card top-selling overflow-auto">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className="card-title">
                    Budget Report <span>| {filter}</span>
                </h5>
                <BudgetChart />
            </div>
        </div>
    )
}

export default BudgetReport