import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      navigate('/PortDashBoard');
    }
  };

  return (
    <div className="h-screen bg-[#02274F] w-screen overflow-hidden relative flex">  
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute transform -rotate-45 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute h-px bg-blue-400"
              style={{
                width: '200%',
                top: `${i * 4}rem`,
                left: '-50%',
                opacity: 0.3,
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex-1 flex items-center justify-between p-8 relative z-10">
        <div className="w-1/2 flex items-center justify-center">
          <div className="text-white text-6xl font-light flex items-baseline">
            <div className="flex items-center justify-end ">
              <img
                src="/src/assets/por.png"
                alt="Vollee Port Patrol"
                className="h-[20vh]"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <div className="bg-white rounded-3xl p-8 w-96 shadow-xl relative z-20">
            <h2 className="text-2xl font-semibold mb-6">Login</h2>

            <div className="text-sm text-gray-600 mb-6">
              New User?{' '}
              <a href="#" className="text-[#4BB8F3] ml-1 hover:underline">
                Create an account
              </a>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm text-gray-600 mb-2">Username</label>
                <input
                  type="email"
                  className="w-full p-2 border-b border-gray-300 focus:border-[#4BB8F3] outline-none"
                  placeholder="Enter your username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-600 mb-2">Password</label>
                <input
                  type="password"
                  className="w-full p-2 border-b border-gray-300 focus:border-[#4BB8F3] outline-none"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="flex justify-between items-center mb-6">
                <a href="#" className="text-sm text-[#4BB8F3] hover:underline">
                  Forgot Password?
                </a>
                <button
                  type="submit"
                  className="bg-[#4BB8F3] text-white px-8 py-2 rounded-md hover:bg-blue-500 transition-colors"
                >
                  Login
                </button>
              </div>
            </form>

            <div className="text-center text-sm text-gray-600 mt-8">
              Can't sign in?{' '}
              <a href="#" className="text-[#4BB8F3] ml-1 hover:underline">
                Contact us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;