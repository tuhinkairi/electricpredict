import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link,  useNavigate } from 'react-router-dom';

export default function Otp() {
    const navigate = useNavigate()
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const handleOtpSubmit = () => {
    // Logic for OTP verification (e.g., API call)
    if (otp.length === 6) {
      setMessage('OTP verified successfully!');
        navigate('/dashboard')
      // Proceed with the next steps (e.g., redirect to another page)
    } else {
      setMessage('Please enter a valid 6-digit OTP.');
    }
  };

  return (
    <section id='otp' className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl border-orange-500 border"
        >
          <h1 className="text-4xl font-bold text-white mb-6 text-center">Enter OTP</h1>
          {message && <p className="text-green-500 text-center mb-4">{message}</p>}
          <input
            type="text"
            placeholder="Enter 6-digit OTP"
            required={true}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            className="w-full p-2 mb-4 rounded border border-gray-300 text-gray-900"
          />
          <button 
            onClick={handleOtpSubmit}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Verify OTP
          </button>
          <div className="mt-4 text-center">
            <Link to="/login" className="text-gray-300 hover:text-orange-400 transition-colors">
              Back to Login
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
