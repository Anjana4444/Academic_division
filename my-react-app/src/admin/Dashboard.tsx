import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NoticesTab from './SpecialNote';

interface NavItem {
  id: string;
  label: string;
  path: string;
  icon: React.ReactNode;
}

export default function AdminDashboard(): React.JSX.Element {

  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<string>('dashboard');

  const navItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      path: '/admin/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
      ),
    },
    {
      id: 'notices',
      label: 'Special Notices',
      path: '/admin/notices',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
    },
    {
      id: 'applications',
      label: 'Applications',
      path: '/admin/applications',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      id: 'staff',
      label: 'Staff',
      path: '/admin/staff',
      icon: (
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  const handleLogout = (): void => {
    // Perform authentication reset/cleanup here
    navigate('/login');
  };

  return (
    <div className="flex h-screen bg-white p-3 font-sans overflow-hidden">
      {/* SIDEBAR CONTAINER */}
      <aside className="w-72 bg-gradient-to-b from-[#4A151B] to-[#240306] rounded-2xl flex flex-col justify-between p-4 shadow-xl border border-blue-400">
        
        {/* Top Header Section: Logo & Division Title */}
        <div>
          <div className="flex items-center gap-3 px-2 py-4 mb-6">
            <img
              src="/logo-2.webp"
              alt="University Logo"
              className="w-12 h-12 object-contain rounded-full bg-yellow-500/20 p-1"
            />
            <div className="text-white">
              <h2 className="text-sm font-bold leading-snug">
                Academic<br />
                Establishments<br />
                Division
              </h2>
            </div>
          </div>

          {/* Navigation Items */}
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200 ${
                    isActive
                      ? 'bg-[#8F6A22] text-white shadow-md'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="text-xl">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Section: Log Out Button */}
        <div className="pt-4 border-t border-white/10">
          <button
            type="button"
            onClick={handleLogout}
            className="w-full flex items-center gap-3 px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 rounded-xl transition-colors duration-200 font-semibold text-sm"
          >
            <svg className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Log Out</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 flex flex-col ml-4 overflow-hidden">
        
        {/* Top Header Bar */}
        <header className="bg-[#EADCA6] rounded-2xl h-20 px-6 flex items-center justify-end shadow-sm">
          <div className="flex items-center gap-3">
            <div className="text-right">
              <h3 className="text-xs font-black text-gray-900 tracking-tight">
                Mrs. W.M.D. Karunaratne
              </h3>
              <p className="text-[11px] font-semibold text-gray-600">
                Senior Assistant Registrar
              </p>
            </div>
            
            {/* User Avatar */}
            <div className="w-10 h-10 rounded-full border-2 border-amber-900/40 bg-white flex items-center justify-center text-amber-900">
              <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
          </div>
        </header>

        {/* Dynamic Page Content Section */}
        <div className="flex-1 p-6 overflow-y-auto">
          {activeTab === 'dashboard' && (
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              <h1 className="text-xl font-bold text-gray-800">Dashboard Overview</h1>
              <p className="text-sm text-gray-500 mt-1">Welcome back to the Academic Establishments Division admin dashboard.</p>
            </div>
          )}
          {activeTab === 'notices' && <NoticesTab />}
{activeTab === 'applications' && <div className="p-4 text-gray-500">Applications panel coming soon.</div>}
{activeTab === 'staff' && <div className="p-4 text-gray-500">Staff panel coming soon.</div>}
        </div>

      </main>
    </div>
  );
}