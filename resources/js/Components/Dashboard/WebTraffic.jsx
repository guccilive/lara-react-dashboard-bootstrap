import React, { useState } from 'react';
import './webtraffic.css';
import WebTrafficChart from './WebTrafficChart';
import CardFilter from './CardFilter';

function WebTraffic() {
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
                <WebTrafficChart />
            </div>
        </div>
    )
}

export default WebTraffic