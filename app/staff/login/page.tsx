'use client';

export default function StaffLogin() {
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const { token } = await response.json();
      document.cookie = `staff-token=${token}; path=/`;
      window.location.href = '/staff/dashboard';
    } else {
      alert('Login failed');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input name="email" type="email" placeholder="Email" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}
