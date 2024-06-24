import React, { useState, useEffect } from 'react';
import './dashboard.css';
import Card from './Dashboard/Card';

function Dashboard() {
    const [cards, setCards] = useState([])
    const fectData = () => {
        fetch('http://lara-react-dashboard-bootstrap.test/api/dashboard')
            .then(res => res.json())
            .then(value => {
                setCards(value.data.cards);
            })
            .catch(e => console.log(e.message));
    }

    useEffect(() => {
        fectData();
    }, []);

  return (
      <section className="dashboard section">
          <div className="row">
              <div className="col-lg-8">
                  <div className="row">
                      {
                          cards && cards.length > 0 && 
                          cards.map(card => <Card key={card.id} card={card} />)
                      }
                  </div>
              </div>
              <div className="col-lg-4"></div>
          </div>
    </section>
  )
}

export default Dashboard