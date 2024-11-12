import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosinstance from '../axiosInstance';

function DeductBalance() {
    const navigate = useNavigate();
    
    const [deductData, setDeductData] = useState({
        id: '',
        amount: ''
    });
    
    const { id, amount } = deductData;
    
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDeductData({ ...deductData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosinstance.post('/deductBalance', { id, amount });
            setMessage(`Balance deducted successfully. Remaining balance: ${response.data.balance}`);
            navigate('/'); // Redirect to the main page or user list after deduction
        } catch (error) {
            console.error("Error deducting balance", error);
            setMessage("Failed to deduct balance. Please check the data and try again.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Deduct Balance</h2>
                    {message && <p className="text-center">{message}</p>}
                    
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="id" className="form-label">User ID</label>
                            <input
                                type="number"
                                className="form-control"
                                name="id"
                                placeholder="Enter user ID"
                                value={id}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="amount" className="form-label">Amount to Deduct</label>
                            <input
                                type="number"
                                className="form-control"
                                name="amount"
                                placeholder="Enter amount to deduct"
                                value={amount}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-outline-primary">
                            Deduct Balance
                        </button>
                        <Link className="btn btn-outline-danger mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DeductBalance;
