// AccountManagement.js
import React from 'react';

function Accountusers() {
    return (
        <div className="tab-section">
            <h2>Account Management</h2>
            <form>
                <label>Add User: <input type="text" placeholder="Enter user name" /></label><br />
                <label>Remove User: <input type="text" placeholder="Enter user name" /></label><br />
                <button type="submit">Update Account</button>
            </form>
        </div>
    );
}

export default Accountusers;
