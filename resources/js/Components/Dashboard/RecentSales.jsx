import React, { useState } from 'react';
import './recentsales.css';
import CardFilter from './CardFilter';
import RecentSalesTable from '../Tables/RecentSalesTable';

function RecentSales({ items }) {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    }
  return (
      <div className="card recent-sales overflow-auto">
          <CardFilter filterChange={handleFilterChange} />

          <div className="card-body">
              <h5 className="card-title">
                  Recent Sales <span>| {filter}</span>
              </h5>
              <RecentSalesTable items={items} />
          </div>
      </div>
  )
}

export default RecentSales