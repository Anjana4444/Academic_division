import React, { useState } from 'react';


interface NoticeItem {
  id: string;
  title: string;
}

export default function NoticesTab(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  // Sample Notices Data
  const [notices, setNotices] = useState<NoticeItem[]>([
    {
      id: '1',
      title: 'Important Notice for Obtaining Approval for University Officials to Travel Abroad',
    },
    {
      id: '2',
      title: 'Important Notice for Obtaining Approval for University Officials to Travel Abroad',
    },
  ]);

  const handleEdit = (id: string) => {
    console.log('Edit notice:', id);
  };

  const handleDelete = (id: string) => {
    setNotices(notices.filter((notice) => notice.id !== id));
  };

  const handleAddNew = () => {
    console.log('Open add notice modal/form');
  };

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Title */}
      <h1 className="text-3xl font-extrabold text-[#3C0008] tracking-tight mb-4">
        Special Notices
      </h1>

      {/* Horizontal Divider Line */}
      <hr className="border-gray-200 mb-6" />

      {/* Action Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        
        {/* Left Side: Search & Filter */}
        <div className="flex items-center gap-3">
          {/* Search Input */}
          <div className="relative flex items-center">
            <span className="absolute left-3 text-white/70">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Search......"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#5B2228] text-white placeholder-white/60 text-sm font-medium rounded-xl pl-9 pr-4 py-2.5 w-60 focus:outline-none focus:ring-2 focus:ring-[#8F6A22] transition-all"
            />
          </div>

          {/* Filter Button */}
          <button
            type="button"
            className="flex items-center gap-2 bg-[#5B2228] hover:bg-[#4A1B20] text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors shadow-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
            </svg>
            <span>Filter</span>
          </button>
        </div>

        {/* Right Side: Add New Notice Button */}
        <button
          type="button"
          onClick={handleAddNew}
          className="flex items-center gap-2 text-[#3C0008] hover:text-[#5B2228] transition-colors font-bold text-sm"
        >
          <div className="w-6 h-6 border-2 border-[#3C0008] rounded flex items-center justify-center">
            <span className="text-base font-extrabold leading-none">+</span>
          </div>
          <span className="text-base tracking-tight">Add New Notices</span>
        </button>

      </div>

      {/* Notice List Container */}
      <div className="flex flex-col gap-4">
        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="bg-[#F3F3F7] rounded-2xl px-6 py-5 flex items-center justify-between gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Notice Title */}
              <p className="text-gray-900 font-extrabold text-sm sm:text-base leading-snug max-w-[80%]">
                {notice.title}
              </p>

              {/* Action Buttons (Edit & Delete) */}
              <div className="flex items-center gap-3 shrink-0">
                {/* Edit Button */}
                <button
                  type="button"
                  onClick={() => handleEdit(notice.id)}
                  className="w-10 h-10 rounded-full bg-[#916E73] hover:bg-[#7A5A5F] text-white flex items-center justify-center transition-colors shadow"
                  title="Edit Notice"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>

                {/* Delete Button */}
                <button
                  type="button"
                  onClick={() => handleDelete(notice.id)}
                  className="w-10 h-10 rounded-full bg-[#4A151B] hover:bg-[#340E13] text-white flex items-center justify-center transition-colors shadow"
                  title="Delete Notice"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="p-8 text-center text-gray-500 bg-gray-50 rounded-2xl border border-dashed border-gray-300">
            No notices found matching your criteria.
          </div>
        )}
      </div>
    </div>
  );
}