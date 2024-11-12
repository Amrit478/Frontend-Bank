import React, { useState } from 'react';
import './Homepage.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing


const HomePage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize navigate for routing

    const handleSubmit = (event) => {
        event.preventDefault();

        // Reset error message
        setErrorMessage('');

        // Validation
        if (username.length < 5) {
            setErrorMessage('Username must be at least 5 characters long.');
            return;
        } if (password.length < 8 || !/\d/.test(password)) {
            setErrorMessage('Password must be at least 8 characters long and include a number.');
            return;
        } 
        else {
            // Navigate to the profile page
            navigate('/profilePage'); // Redirect to the profile page on successful validation
        }
    };

    return (
        <div className="container">
            <div className="logo-space">
                {/* Logo can be added here */}
           </div>
            <div className="form-container">
                <h1>Welcome Back</h1>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username">Username</label>
                        <input 
                            type="text" 
                            id="username" 
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required 
                        />
                    </div>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    <button type="submit" className="continue-button">Continue</button>
                </form>
            </div>
        </div>
    );
};

export default HomePage;
