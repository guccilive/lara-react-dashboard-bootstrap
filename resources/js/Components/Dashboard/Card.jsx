import React, {useState} from 'react'
import './card.css'
import CardFilter from './CardFilter';

function Card({ card }) {
    const metadata = JSON.parse(card.metadata);

    const [filter, setFilter] = useState('Today');
    const handleFilterChange = filter => {
        setFilter(filter);
    }
    return (
        <div className="col-xxl-4 col-md-6">
            <div className="card info-card sales-card">
                <CardFilter filterChange={handleFilterChange} />
                <div className='card-body'>
                    <h5 className="card-title">
                        {metadata.name} <span>| {filter}</span>
                    </h5>
                    <div className="d-flex align-items-center">
                        <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                            <i className={metadata.icon}></i>
                        </div>
                        <div className="ps-3">
                            <h6>
                                {metadata.name === 'Revenue'
                                    ? '$' + metadata.amount.toLocaleString('en-US')
                                    : metadata.amount.toLocaleString('en-US')}
                            </h6>
                            <span
                                className={`${metadata.percentage > 0
                                ? 'text-success' : 'text-danger'
                                } small pt-1 fw-bold`}>
                                {metadata.percentage > 0
                                    ? metadata.percentage * 100
                                    : -metadata.percentage * 100}
                                %
                            </span>
                            <span className="text-muted small pt-2 ps-1">
                                {metadata.percentage > 0 ? 'increase' : 'decrease'}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card