import React from 'react';
import './topsellingtable.css';
import TopSellingItem from './TopSellingItem';

function TopSellingTable({ items }) {

    return (
        <table className="table table-borderless datatable">
            <thead className="table-light">
                <tr>
                    <th scope="col">Preview</th>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Sold</th>
                    <th scope="col">Revenue</th>
                </tr>
            </thead>
            <tbody>
                {items &&
                    items.length > 0 &&
                    items.map(item => <TopSellingItem key={item.id} item={item} /> )

                }
            </tbody>
        </table>
    )
}

export default TopSellingTable
