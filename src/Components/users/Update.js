import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosinstance from '../axiosInstance';

function UpdateUserProfile() {
    const navigate = useNavigate();
    
    const [userData, setUserData] = useState({
        id: '',
        username: '',
        name: '',
        email: '',
        balance: '',
        salary: '',
        rent: ''
    });
    
    const { id, username, name, email, balance, salary, rent } = userData;
    
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosinstance.put(`/updateuser/${id}`, userData);
            setMessage(`User updated successfully: ${response.data.name}`);
            navigate('/'); // Redirect to the main page or user list after updating
        } catch (error) {
            console.error("Error updating user profile", error);
            setMessage("Failed to update user profile. Please check the data and try again.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Update User Profile</h2>
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
                            <label htmlFor="username" className="form-label">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                name="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                placeholder="Enter your name"
                                value={name}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="balance" className="form-label">Balance</label>
                            <input
                                type="number"
                                className="form-control"
                                name="balance"
                                placeholder="Enter your balance"
                                value={balance}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="salary" className="form-label">Salary</label>
                            <input
                                type="number"
                                className="form-control"
                                name="salary"
                                placeholder="Enter your salary"
                                value={salary}
                                onChange={handleInputChange}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rent" className="form-label">Rent</label>
                            <input
                                type="number"
                                className="form-control"
                                name="rent"
                                placeholder="Enter your rent"
                                value={rent}
                                onChange={handleInputChange}
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-outline-primary">
                            Update User
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

export default UpdateUserProfile;
