import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Card from './Dashboard/Card';
import Report from './Dashboard/Report';
import RecentSales from './Dashboard/RecentSales';
import TopSelling from './Dashboard/TopSelling';
import RecentActivity from './Dashboard/RecentActivity';
import BudgetReport from './Dashboard/BudgetReport';
import WebTraffic from './Dashboard/WebTraffic';
import News from './Dashboard/News';

function Dashboard() {
    const [cards, setCards] = useState([]);
    const [recentSales, setRecentSales] = useState([]);
    const [topSelling, setTopSelling] = useState([]);
    const [recentActivity, setRecentActivity] = useState([]);
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = () => {
        fetch('http://lara-react-dashboard-bootstrap.test/api/dashboard')
            .then(res => res.json())
            .then(value => {
                setCards(value.data.cards);
                setRecentSales(value.data.recentsales);
                setTopSelling(value.data.topselling);
                setRecentActivity(value.data.recentactivity);
                setNews(value.data.news)
                setLoading(false); // Set loading to false once data is fetched
            })
            .catch(e => {
                console.log(e.message);
                setLoading(false); // Set loading to false even if there is an error
            });
    };

    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    console.log('Dash Top Selling', topSelling)
    console.log('Dash Activity', recentActivity)
    return (
        <section className="dashboard section">
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        {
                            cards && cards.length > 0 &&
                            cards.map(card => <Card key={card.id} card={card} />)
                        }
                        <div className="col-12">
                            <Report />
                        </div>
                        <div className="col-12">
                            <RecentSales items={recentSales} />
                        </div>
                        <div className="col-12">
                            <TopSelling items={topSelling} />
                        </div>
                    </div>
                </div>

                <div className="col-lg-4">
                    <RecentActivity items={recentActivity} />
                    <BudgetReport />
                    <WebTraffic />
                    <News items={ news} />
                </div>
            </div>
        </section>
    )
}

export default Dashboard