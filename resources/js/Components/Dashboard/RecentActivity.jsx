import React, {useState} from 'react';
import './recentactivity.css';
import CardFilter from './CardFilter';
import RecentActivityItem from '../NavItems/RecentActivityItem';

function RecentActivity({ items }) {
    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    }
    
    return (
        <div className="card top-selling overflow-auto">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body">
                <h5 className="card-title">
                    Recent Activity <span>| {filter}</span>
                </h5>
                <div className="activity">
                    {items &&
                        items.length > 0 &&
                        items.map(item => (
                            <RecentActivityItem key={ item.id } item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default RecentActivity