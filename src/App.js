import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Addbalance from './Components/Balance/Addbalance';
import Checkbalance from './Components/Balance/Checkbalance';
import DeductBalance from './Components/Balance/DeductBalance';
import Creditcardincrease from './Components/Creditcard/Creditcardincrease';
import ApprovalCheck from './Components/Creditcard/Creditcardapproval';
import LoanApproval from './Components/Loan/LoanApproval';
import ProductExploration from './Components/Productexplore/ProductExploration'
import Accountusers from './Components/users/Accountusers';
import AddUserProfile from './Components/users/adduserprofile';
import DeleteUserProfile from './Components/users/deleteuserprofile';
import UpdateUserProfile from './Components/users/Update';
function App() {
    return (
        <Routes>
            <Route path="/AddBalance" element={<Addbalance />} />    
            <Route path="/Checkbalance" element={<Checkbalance />} />
            <Route path="/DeductBalance" element={<DeductBalance />} />
            <Route path="/approval-check" element={<ApprovalCheck />} />
            <Route path="/Credit-increase" element={<Creditcardincrease />} />
            <Route path="/Loan-approval" element={<LoanApproval />} />
            <Route path="/ProductExploration" element={<ProductExploration />} />
            <Route path="/Accountusers" element={<Accountusers />} />
            <Route path="/add-user" element={<AddUserProfile />} />
            <Route path="/Delete-user" element={<DeleteUserProfile />} />
            <Route path="/Update-user" element={<UpdateUserProfile />} />
          </Routes>
    );
}

export default App;
