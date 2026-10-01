// ✅ KUNCI JAWABAN (SOLUTION) — LoginPage.jsx

import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom"; // 1. Import useNavigate

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // 🎯 useRef: pointer ke input username
  const usernameRef = useRef(null);
  const navigate = useNavigate(); // 2. Inisialisasi navigate

  // 🎯 useEffect: begitu halaman login muncul, langsung fokus ke input username
  useEffect(() => {
    usernameRef.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const err = onLogin(username, password);
    if (err) setError(err);
    else navigate("/home"); // 3. Navigasi ke halaman home setelah login berhasil
  }

  return (
    <main className="login-page">
      <div className="login-card">
        <h1 className="logo">threadly</h1>
        <p>Share your thoughts.</p>

        <form onSubmit={handleSubmit}>
          <input
            ref={usernameRef}
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="login-error">{error}</p>}
          <button className="primary-button" type="submit">
            Login
          </button>
        </form>

        <p className="login-hint">Try: calista / 123456</p>
      </div>
    </main>
  );
}

export default LoginPage;

