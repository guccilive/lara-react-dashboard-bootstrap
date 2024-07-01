import React, { useState } from 'react';
import './news.css';
import NewsPostItem from '../NavItems/NewsPostItem';
import CardFilter from './CardFilter';

function News({items}) {
    const [filter, setFilter] = useState('Today')
    const handleFilterChange = filter => {
        setFilter(filter);
    }

    return (
        <div className="card">
            <CardFilter filterChange={handleFilterChange} />

            <div className="card-body pb-0">
                <h5 className="card-title">
                    News &amp; Updates<span>| {filter}</span>
                </h5>
                <div className="news">
                    {items &&
                        items.length > 0 &&
                        items.map(item => (
                            <NewsPostItem key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default News