import React, { useState } from 'react';
import { Search, Download, Mail, Filter, ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight, Home, BarChart3, Users, Menu, User, LogOut, ChevronDown } from 'lucide-react';

interface TransactionResult {
  id: string;
  billerName: string;
  customParams: string;
  amount: number;
  dateTime: string;
  customerMobile: string;
  bConnectTransactionId: string;
  paymentReferenceId: string;
  status: string;
  paymentChannel: string;
  modeOfPayment: string;
}

interface DashboardProps {
  userEmail: string;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userEmail, onLogout }) => {
  const [selectedOrg, setSelectedOrg] = useState('Canara Cyber Police Department');
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchType, setSearchType] = useState('all');
  const [showResults, setShowResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage] = useState(50);

  const organizations = [
    { name: 'Canara Credit Card', id: '09471e98-bbfa-4716-b2b3-07aca633e317', access: 'Superadmin access' },
    { name: 'South Bihar Power Distribution Company Ltd', id: '06ddad02-9c06-47fa-a655-33c8355991d4', access: 'Superadmin access' },
    { name: 'Setu Internal', id: '00000000-0000-0000-0000-000000000000', access: 'Superadmin access' },
    { name: 'Canara Cyber Police Department', id: 'cyber-police-001', access: 'Limited COU access' },
  ];

  const mockResults: TransactionResult[] = [
    {
      id: '1',
      billerName: 'Electricity Board Karnataka',
      customParams: 'Consumer ID: 1234567890',
      amount: 2450.00,
      dateTime: '2025-01-15 14:30:25',
      customerMobile: '+91-9876543210',
      bConnectTransactionId: 'BCT202501151430001',
      paymentReferenceId: 'PRF2025011514300001',
      status: 'Success',
      paymentChannel: 'Mobile Banking',
      modeOfPayment: 'UPI'
    },
    {
      id: '2',
      billerName: 'Postpaid Mobile - Airtel',
      customParams: 'Mobile: 9876543210',
      amount: 599.00,
      dateTime: '2025-01-15 12:15:18',
      customerMobile: '+91-9876543210',
      bConnectTransactionId: 'BCT202501151215002',
      paymentReferenceId: 'PRF2025011512150002',
      status: 'Failed',
      paymentChannel: 'Internet Banking',
      modeOfPayment: 'Net Banking'
    },
    {
      id: '3',
      billerName: 'Gas Connection - Indane',
      customParams: 'Consumer ID: GAS987654321',
      amount: 850.00,
      dateTime: '2025-01-15 10:45:32',
      customerMobile: '+91-9123456789',
      bConnectTransactionId: 'BCT202501151045003',
      paymentReferenceId: 'PRF2025011510450003',
      status: 'Success',
      paymentChannel: 'Web URL',
      modeOfPayment: 'Debit Card'
    }
  ];

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setShowResults(true);
      setCurrentPage(1);
    }
  };

  const handleExport = (format: 'xlsx' | 'email') => {
    // Export functionality would be implemented here
    console.log(`Exporting as ${format}`);
  };

  const totalPages = Math.ceil(mockResults.length / resultsPerPage);
  const startIndex = (currentPage - 1) * resultsPerPage;
  const endIndex = startIndex + resultsPerPage;
  const currentResults = mockResults.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">C</span>
              </div>
              <span className="text-xl font-semibold text-gray-800">Canara Bank</span>
            </div>
            <span className="text-gray-400">|</span>
            <h1 className="text-lg font-medium text-gray-700">Welcome to the Bridge</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <button
                onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors"
              >
                <User className="w-4 h-4" />
                <span className="text-sm font-medium">{userEmail}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isOrgDropdownOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white rounded-md shadow-lg border border-gray-200 z-50">
                  <div className="p-4">
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Search org name or ID to login with"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="text-sm text-gray-600 mb-2">Select an organisation to login with—</div>
                    <div className="max-h-64 overflow-y-auto">
                      {organizations.map((org) => (
                        <div
                          key={org.id}
                          className={`p-3 rounded-md cursor-pointer transition-colors ${
                            selectedOrg === org.name ? 'bg-blue-50 border-l-4 border-blue-500' : 'hover:bg-gray-50'
                          }`}
                          onClick={() => {
                            setSelectedOrg(org.name);
                            setIsOrgDropdownOpen(false);
                          }}
                        >
                          <div className="font-medium text-gray-800">{org.name}</div>
                          <div className="text-xs text-gray-500">{org.id}</div>
                          <div className="text-xs text-gray-500">{org.access}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
                Profile
              </button>
              <button 
                onClick={onLogout}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            <div className="flex items-center space-x-2 px-3 py-2 text-gray-700">
              <Home className="w-5 h-5" />
              <span>Home</span>
            </div>
            <div className="flex items-center space-x-2 px-3 py-2 text-gray-700">
              <ChevronLeft className="w-4 h-4" />
              <span>Back to previous page</span>
            </div>
            
            <div className="pt-4">
              <div className="px-3 py-2 bg-blue-50 rounded-md">
                <div className="flex items-center space-x-2 text-blue-600">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <span className="font-medium">CYBER POLICE COU</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="px-3 py-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
                CYBER INVESTIGATIONS
              </div>
              <div className="mt-1 space-y-1">
                <div className="flex items-center space-x-2 px-3 py-2 bg-blue-50 text-blue-600 rounded-md">
                  <BarChart3 className="w-5 h-5" />
                  <span>Transaction Search</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <div className="px-3 py-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
                INTEGRATIONS
              </div>
              <div className="mt-1 space-y-1">
                <div className="flex items-center space-x-2 px-3 py-2 text-gray-700">
                  <Users className="w-5 h-5" />
                  <span>System Access</span>
                </div>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {selectedOrg === 'Canara Cyber Police Department' ? (
            <div className="bg-white rounded-lg shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Cyber Police Transaction Search</h2>
                <p className="text-gray-600">Search for BBPS transactions using unique identifiers for cyber-crime investigations</p>
              </div>
              
              <div className="p-6">
                {/* Search Section */}
                <div className="mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Search Type
                      </label>
                      <select
                        value={searchType}
                        onChange={(e) => setSearchType(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="all">All Parameters</option>
                        <option value="transaction_ref">Transaction Reference ID</option>
                        <option value="order_id">Order ID</option>
                        <option value="mobile">Customer Mobile</option>
                        <option value="bconnect_id">B-Connect Transaction ID</option>
                        <option value="payment_ref">Payment Reference ID</option>
                      </select>
                    </div>
                    
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Search Term
                      </label>
                      <div className="flex">
                        <input
                          type="text"
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          placeholder="Enter transaction reference ID, order ID, or other unique identifiers..."
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        <button
                          onClick={handleSearch}
                          className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
                        >
                          <Search className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Results Section */}
                {showResults && (
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">
                          1 – {currentResults.length} of {mockResults.length}
                        </span>
                        <div className="flex items-center space-x-2">
                          <span className="text-sm text-gray-600">Get report as</span>
                          <select className="px-2 py-1 border border-gray-300 rounded text-sm">
                            <option>XLSX</option>
                            <option>PDF</option>
                            <option>CSV</option>
                          </select>
                          <button
                            onClick={() => handleExport('email')}
                            className="px-3 py-1 bg-cyan-500 text-white rounded text-sm hover:bg-cyan-600 transition-colors"
                          >
                            <Mail className="w-4 h-4 inline mr-1" />
                            Email
                          </button>
                          <button
                            onClick={() => handleExport('xlsx')}
                            className="px-3 py-1 bg-cyan-500 text-white rounded text-sm hover:bg-cyan-600 transition-colors"
                          >
                            <Download className="w-4 h-4 inline mr-1" />
                            Download
                          </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">
                          Show/hide columns
                        </button>
                      </div>
                    </div>

                    {/* Results Table */}
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse bg-white">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Biller Name
                            </th>
                            <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Custom Params : Value/s
                            </th>
                            <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Amount (Rs.)
                            </th>
                            <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Date and Time Stamp
                            </th>
                            <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Customer Mobile Number
                            </th>
                            <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              B-Connect Transaction ID
                            </th>
                            <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Payment Reference ID
                            </th>
                            <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Status
                            </th>
                            <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Payment Channel
                            </th>
                            <th className="border border-gray-200 px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Mode of Payment
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          {currentResults.map((result) => (
                            <tr key={result.id} className="hover:bg-gray-50">
                              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                                {result.billerName}
                              </td>
                              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                                {result.customParams}
                              </td>
                              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                                ₹{result.amount.toFixed(2)}
                              </td>
                              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                                {result.dateTime}
                              </td>
                              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                                {result.customerMobile}
                              </td>
                              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                                {result.bConnectTransactionId}
                              </td>
                              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                                {result.paymentReferenceId}
                              </td>
                              <td className="border border-gray-200 px-4 py-3 text-sm">
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                  result.status === 'Success' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                                }`}>
                                  {result.status}
                                </span>
                              </td>
                              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                                {result.paymentChannel}
                              </td>
                              <td className="border border-gray-200 px-4 py-3 text-sm text-gray-900">
                                {result.modeOfPayment}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setCurrentPage(1)}
                          disabled={currentPage === 1}
                          className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                        >
                          <ChevronsLeft className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                          disabled={currentPage === 1}
                          className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        
                        <span className="px-3 py-1 text-sm text-gray-700">
                          {currentPage}
                        </span>
                        
                        <button
                          onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                          disabled={currentPage === totalPages}
                          className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setCurrentPage(totalPages)}
                          disabled={currentPage === totalPages}
                          className="p-2 text-gray-400 hover:text-gray-600 disabled:opacity-50"
                        >
                          <ChevronsRight className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <div className="text-sm text-gray-600">
                        Page {currentPage} of {totalPages}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="text-center">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Selected Organization: {selectedOrg}
                </h2>
                <p className="text-gray-600">
                  Please select "Canara Cyber Police Department" from the organization dropdown to access the transaction search dashboard.
                </p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;