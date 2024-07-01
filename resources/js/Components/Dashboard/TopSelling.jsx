import React, { useState } from 'react';
import './topselling.css'
import CardFilter from './CardFilter';
import TopSellingTable from '../Tables/TopSellingTable';

function TopSelling({items}) {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    }
  return (
      <div className="card top-selling overflow-auto">
          <CardFilter filterChange={handleFilterChange} />

          <div className="card-body">
              <h5 className="card-title">
                  Top Selling <span>| {filter}</span>
              </h5>
              <TopSellingTable items={items} />
          </div>
      </div>
  )
}

export default TopSelling