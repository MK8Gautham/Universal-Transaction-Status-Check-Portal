import React, { useState } from 'react';
import { Eye, EyeOff, Rocket } from 'lucide-react';

interface LoginPageProps {
  onLogin: (email: string, password: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;
    
    setIsLoading(true);
    // Simulate login delay
    setTimeout(() => {
      onLogin(email, password);
      setIsLoading(false);
    }, 1000);
  };

  const lenders = [
    'New Leaf Credit',
    'Red Valley Capital',
    'QKNB Credit',
    'OnTap Loans',
    'Young India Finance',
    'Ample Capital'
  ];

  return (
    <div className="min-h-screen bg-white flex">
      {/* Left Panel - Login Form */}
      <div className="flex-1 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-3xl font-semibold text-gray-900 mb-2">
              Login to Canara Bank BBPS Dashboard
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="text-red-500">*</span> Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <span className="text-red-500">*</span> Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              <div className="mt-2 text-right">
                <button
                  type="button"
                  className="text-sm text-blue-600 hover:text-blue-800"
                >
                  Show password
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="submit"
                disabled={isLoading || !email || !password}
                className="px-8 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 disabled:opacity-50 disabled:cursor-not-allowed font-medium"
              >
                {isLoading ? 'LOGGING IN...' : 'LOGIN'}
              </button>
              
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                Forgot password?
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right Panel - Promotional Content */}
      <div className="flex-1 bg-gradient-to-br from-blue-50 to-cyan-50 flex items-center justify-center px-8 py-12">
        <div className="w-full max-w-lg">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-purple-800 mb-4">
              Go live on BBPS and collect bill payments
            </h2>
            
            <div className="bg-white rounded-lg p-6 shadow-sm mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium text-gray-600">EXPLORE BBPS BOU</span>
                <span className="text-sm text-gray-500">Collect repeat payments</span>
              </div>
              
              <div className="bg-blue-500 text-white rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <span className="text-sm">← Loans</span>
                </div>
                <div className="mt-2 text-sm opacity-90">Select your lender</div>
              </div>
              
              <div className="space-y-2">
                {lenders.map((lender, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-md p-3 text-sm text-gray-700"
                  >
                    {lender}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <span className="text-lg text-cyan-600 font-medium">Set up your business</span>
              </div>
              
              <div className="flex items-center space-x-3 ml-8">
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                <span className="text-lg text-gray-600">Set up a product</span>
              </div>
              
              <div className="flex items-center space-x-3 ml-8">
                <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                <span className="text-lg text-gray-600">Go live</span>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="relative">
                <Rocket className="w-16 h-16 text-blue-500 transform rotate-45" />
                <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-500 rounded-full"></div>
              </div>
            </div>
            
            <div className="flex justify-center space-x-2 mt-8">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;