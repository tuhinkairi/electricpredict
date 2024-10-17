import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser } from 'react-icons/fa';

export default function ProfileSetting() {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);
  const [message, setMessage] = useState('');

  const handleProfileUpdate = () => {
    // Logic for updating profile (e.g., API call)
    setMessage('Profile updated successfully!');
  };

  return (
    <section id='profile' className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-gray-800 bg-opacity-50 p-8 rounded-lg shadow-xl border-orange-500 border"
        >
          <h1 className="text-4xl font-bold text-white mb-6 text-center">Profile Settings</h1>
          {message && <p className="text-green-500 text-center mb-4">{message}</p>}
          <div className="flex items-center space-x-4 mb-4">
            <FaUser className="text-orange-500 text-2xl" />
            <h2 className="text-xl font-semibold text-orange-300">Edit Your Profile</h2>
          </div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 mb-4 rounded border border-gray-300"
          />
          <textarea
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            className="w-full p-2 mb-4 rounded border border-gray-300"
          />
          <input
            type="file"
            onChange={(e) => setProfilePicture(e.target.files[0])}
            className="mb-4"
          />
          <button
            onClick={handleProfileUpdate}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Update Profile
          </button>
        </motion.div>
      </div>
    </section>
  );
}
