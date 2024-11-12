import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axiosinstance from '../axiosInstance';

function DeleteUserProfile() {
    const navigate = useNavigate();
    
    const [userData, setUserData] = useState({
        id: '',
        name: '',
        age: ''
    });
    
    const { id, name, age } = userData;
    
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        try {
            await axiosinstance.delete(`/deleteuser/${id}`);
            setMessage(`User deleted successfully.`);
            navigate('/'); // Redirect to the main page or user list after deletion
        } catch (error) {
            console.error("Error deleting user profile", error);
            setMessage("Failed to delete user profile. Please check the ID and try again.");
        }
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
                    <h2 className="text-center m-4">Delete User Profile</h2>
                    {message && <p className="text-center">{message}</p>}
                    
                    <form onSubmit={handleDelete}>
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
                            <label htmlFor="age" className="form-label">Age</label>
                            <input
                                type="number"
                                className="form-control"
                                name="age"
                                placeholder="Enter your age"
                                value={age}
                                onChange={handleInputChange}
                            />
                        </div>
                        
                        <button type="submit" className="btn btn-outline-danger">
                            Delete User
                        </button>
                        <Link className="btn btn-outline-secondary mx-2" to="/">
                            Cancel
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default DeleteUserProfile;
