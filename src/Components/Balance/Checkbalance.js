import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosinstance from '../axiosInstance';

function CheckBalance() {
    const [userId, setUserId] = useState('');
    const [balance, setBalance] = useState(null);
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setUserId(e.target.value);
    };

    const handleCheckBalance = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosinstance.get('/checkbalance', {
                data: { id: userId },
            });
            setBalance(response.data);
            setMessage(`The balance for User ID ${userId} is: ${response.data}`);
        } catch (error) {
            console.error("Error fetching balance", error);
            setMessage("Failed to fetch balance. Please check the user ID and try again.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Check Account Balance</h2>
                    {message && <p className="text-center">{message}</p>}
                    
                    <form onSubmit={handleCheckBalance}>
                        <div className="mb-3">
                            <label htmlFor="userId" className="form-label">User ID</label>
                            <input
                                type="number"
                                className="form-control"
                                name="userId"
                                placeholder="Enter user ID"
                                value={userId}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-outline-primary">
                            Check Balance
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>

                    {balance !== null && (
                        <div className="alert alert-success mt-3">
                            <strong>Balance:</strong> ${balance}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CheckBalance;
