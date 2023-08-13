import React, { useState } from 'react';
import './LoanForm.scss';
import { useNavigate } from 'react-router-dom'; 

const LoanForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    aadharNo: '',
    monthlyIncome: '',
    walletAddress: '',
    tokenAddress: '',
    tokenUid: '',
    timePeriod: '',
    loanAmount: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission, e.g., send data to a server
    console.log('Form submitted:', formData);
  };

  const navigate = useNavigate();

  return (
    <div className="form">
    <form className="loan-application-form" onSubmit={handleSubmit}>
      <div className="name">
        <div className="form-field">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="First Name"
            required
          />
        </div>
        <div className="form-field">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            placeholder="Last Name"
            required
          />
        </div>
      </div>

      <div className="adhar">
        <div className="enteradhar">Enter</div>
        <div className="form-field">
          <input
            type="text"
            id="aadharNo"
            name="aadharNo"
            value={formData.aadharNo}
            onChange={handleInputChange}
            placeholder="Aadhar No"
            required
          />
        </div>
      </div>

      <div className="form-field">
        <input
          type="text"
          id="walletAddress"
          name="walletAddress"
          value={formData.walletAddress}
          onChange={handleInputChange}
          placeholder="Wallet Address"
          required
        />
      </div>
      <div className="form-field">
        <input
          type="text"
          id="tokenAddress"
          name="tokenAddress"
          value={formData.tokenAddress}
          onChange={handleInputChange}
          placeholder="Token Address"
          required
        />
      </div>
      <div className="form-field">
        <input
          type="text"
          id="tokenUid"
          name="tokenUid"
          value={formData.tokenUid}
          onChange={handleInputChange}
          placeholder="Token UID"
          required
        />
      </div>
      <div className="loan">
        <div className="form-field">
          <input
            type="number"
            id="monthlyIncome"
            name="monthlyIncome"
            value={formData.monthlyIncome}
            onChange={handleInputChange}
            placeholder="Monthly Income"
            required
          />
        </div>
        <div className="form-field">
          <input
            type="number"
            id="timePeriod"
            name="timePeriod"
            value={formData.timePeriod}
            onChange={handleInputChange}
            placeholder="Time Period (months)"
            required
          />
        </div>
        <div className="form-field">
          <input
            type="number"
            id="loanAmount"
            name="loanAmount"
            value={formData.loanAmount}
            onChange={handleInputChange}
            placeholder="Loan Amount"
            required
          />
        </div>
      </div>
      <div className="form-button">
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
};

export default LoanForm;
