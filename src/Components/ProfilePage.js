import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProfilePage.css';

const ProfilePage = () => {
    const [greeting, setGreeting] = useState('');
    const [selectedCard, setSelectedCard] = useState('');
    const [cardBalance, setCardBalance] = useState('');
    const [activeTab, setActiveTab] = useState('Tab 1');

    useEffect(() => {
        const now = new Date();
        const hours = now.getHours();

        if (hours < 12) {
            setGreeting("Good Morning");
        } else if (hours < 18) {
            setGreeting("Good Afternoon");
        } else {
            setGreeting("Good Evening");
        }

        // Fetch card balances (simulated API call)
        axios.get('/api/cardBalances')
            .then((response) => {
                setCardBalances(response.data);
            })
            .catch((error) => {
                console.error("Error fetching card balances:", error);
            });
    }, []);

    const cardBalances = {
        card1: 1200.50,
        card2: 3450.75
    };

    const handleCardChange = (event) => {
        const selectedCard = event.target.value;
        setSelectedCard(selectedCard);
        setCardBalance(cardBalances[selectedCard]);
    };

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="container">
            <h1>{greeting}</h1>

            <div className="balance-section">
                <h2>Your Available Balance:</h2>
                <p>$5,000.00</p>
            </div>

            <div className="credit-card-section">
                <h2>Select Credit Card:</h2>
                <select id="credit-card-dropdown" value={selectedCard} onChange={handleCardChange}>
                    <option value="" disabled>Select a card</option>
                    <option value="card1">Visa - ****1234</option>
                    <option value="card2">MasterCard - ****5678</option>
                </select>
                {cardBalance && <p>Card Balance: ${cardBalance.toFixed(2)}</p>}
            </div>

            <div className="tabs-section">
                <ul>
                    {['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4', 'Tab 5', 'Tab 6'].map((tab) => (
                        <li key={tab}>
                            <a 
                                href="#"
                                className={activeTab === tab ? 'active' : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleTabClick(tab);
                                }}
                            >
                                {tab}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProfilePage;
