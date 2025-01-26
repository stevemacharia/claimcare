'use client';

import React, { useState } from 'react';

export default function ClientRegister() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage('Registration successful! Please log in.');
      } else {
        const errorData = await response.json();
        setMessage(errorData.error || 'Registration failed.');
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Client Registration</h1>
      <form onSubmit={handleRegister}>
        <input name="name" type="text" placeholder="Full Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit" disabled={loading}>
          {loading ? 'Registering...' : 'Register'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
