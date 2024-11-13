import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosinstance from '../axiosInstance';

function AddBalance() {
    const [addData, setAddData] = useState({
        id: '',
        amount: ''
    });

    const { id, amount } = addData;
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setAddData({ ...addData, [name]: value });
    };

    const handleAddBalance = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosinstance.post('/add', { id, amount });
            setMessage(`Balance added successfully. New balance: ${response.data.balance}`);
        } catch (error) {
            console.error("Error adding balance", error);
            setMessage("Failed to add balance. Please check the data and try again.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Add Balance</h2>
                    {message && <p className="text-center">{message}</p>}
                    
                    <form onSubmit={handleAddBalance}>
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
                            <label htmlFor="amount" className="form-label">Amount to Add</label>
                            <input
                                type="number"
                                className="form-control"
                                name="amount"
                                placeholder="Enter amount to add"
                                value={amount}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-outline-primary">
                            Add Balance
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

export default AddBalance;
