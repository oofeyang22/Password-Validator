import React, { useState } from 'react';
import './PasswordValidator.css';

const PasswordValidator = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const requirements = [
    { regex: /.{8,}/, desc: 'At least 8 characters length' },
    { regex: /[0-9]/, desc: 'At least 1 number (0...9)' },
    { regex: /[a-z]/, desc: 'At least 1 lowercase letter (a...z)' },
    { regex: /[^A-Za-z0-9]/, desc: 'At least 1 special symbol (!...$)' },
    { regex: /[A-Z]/, desc: 'At least 1 uppercase letter (A...Z)' },
  ];

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
  
    <div className="wrapper">
      <div className="float"><p>Password Validator</p></div>
      <div className="pass-field">
        <input
          type={showPassword ? 'text' : 'password'}
          placeholder="Create password"
          value={password}
          onChange={handlePasswordChange}
        />
        <i className={`fa-solid fa-eye${showPassword ? '-slash' : ''}`} onClick={togglePasswordVisibility}></i>
      </div>
      <div className="content">
        <p>Password must contains</p>
        <ul className="requirement-list">
          {requirements.map((requirement, index) => (
            <li key={index} className={password.match(requirement.regex) ? 'valid' : ''}>
              <i className={password.match(requirement.regex) ? 'fa-solid fa-check' : 'fa-solid fa-circle'}></i>
              <span>{requirement.desc}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PasswordValidator;
