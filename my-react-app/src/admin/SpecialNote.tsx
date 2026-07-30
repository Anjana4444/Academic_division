import React, { useState, useEffect } from 'react';
import { notices as defaultNotices } from '../data/notices';

interface NoticeItem {
  id: string | number;
  title: string;
  date: string;
  downloadLabel?: string;
  downloadUrl?: string;
}

export default function NoticesTab(): React.JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  
  // Modal & Form States
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [editingNotice, setEditingNotice] = useState<NoticeItem | null>(null);
  
  // Form fields
  const [titleInput, setTitleInput] = useState<string>('');
  const [dateInput, setDateInput] = useState<string>('');
  const [downloadLabelInput, setDownloadLabelInput] = useState<string>('');
  const [downloadUrlInput, setDownloadUrlInput] = useState<string>('');
  
  // File Upload State
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState<boolean>(false);

  // Load from localStorage on mount, fallback to notices.ts import
  useEffect(() => {
    const savedNotices = localStorage.getItem('admin_notices');
    if (savedNotices) {
      setNotices(JSON.parse(savedNotices));
    } else {
      setNotices(defaultNotices);
      localStorage.setItem('admin_notices', JSON.stringify(defaultNotices));
    }
  }, []);

  // Save changes to localStorage helper
  const saveToLocalStorage = (updatedNotices: NoticeItem[]) => {
    setNotices(updatedNotices);
    localStorage.setItem('admin_notices', JSON.stringify(updatedNotices));
  };

  const handleOpenAddModal = () => {
    setEditingNotice(null);
    setTitleInput('');
    setDateInput(new Date().toISOString().split('T')[0]);
    setDownloadLabelInput('');
    setDownloadUrlInput('');
    setSelectedFile(null);
    setIsModalOpen(true);
  };

  const handleOpenEditModal = (notice: NoticeItem) => {
    setEditingNotice(notice);
    setTitleInput(notice.title);
    setDateInput(String(notice.date) || '');
    setDownloadLabelInput(notice.downloadLabel || '');
    setDownloadUrlInput(notice.downloadUrl || '');
    setSelectedFile(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingNotice(null);
    setTitleInput('');
    setDateInput('');
    setDownloadLabelInput('');
    setDownloadUrlInput('');
    setSelectedFile(null);
  };

  // Handle file selection and auto-populate label if empty
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setSelectedFile(file);
      if (!downloadLabelInput.trim()) {
        setDownloadLabelInput(file.name);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleInput.trim()) return;

    setIsUploading(true);

    // Helper to process the final save action once any file conversion is finished
    const finalizeSave = (finalUrl: string) => {
      const finalLabel = downloadLabelInput.trim() || (selectedFile ? selectedFile.name : '');

      if (editingNotice) {
        // Edit existing notice
        const updated = notices.map((notice) =>
          notice.id === editingNotice.id
            ? {
                ...notice,
                title: titleInput,
                date: dateInput || String(notice.date),
                downloadLabel: finalLabel || notice.downloadLabel,
                downloadUrl: finalUrl || notice.downloadUrl,
              }
            : notice
        );
        saveToLocalStorage(updated);
      } else {
        // Add new notice
        const newNotice: NoticeItem = {
          id: Date.now(),
          title: titleInput,
          date: dateInput || new Date().toISOString().split('T')[0],
          downloadLabel: finalLabel,
          downloadUrl: finalUrl,
        };
        saveToLocalStorage([newNotice, ...notices]);
      }

      setIsUploading(false);
      handleCloseModal();
    };

    // If a new file was selected, convert it to Base64 string via FileReader
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result as string;
        finalizeSave(base64String);
      };
      reader.onerror = () => {
        alert('Failed to read file. Please try again.');
        setIsUploading(false);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      // Keep existing URL/path if no new file was uploaded
      finalizeSave(editingNotice ? (editingNotice.downloadUrl || '') : '');
    }
  };

  const handleDelete = (id: string | number) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      const updated = notices.filter((notice) => notice.id !== id);
      saveToLocalStorage(updated);
    }
  };

  const filteredNotices = notices.filter((notice) =>
    notice.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (notice.downloadLabel && notice.downloadLabel.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="w-full">
      <h1 className="text-3xl font-extrabold text-[#3C0008] tracking-tight mb-4">
        Special Notices
      </h1>
      <hr className="border-gray-200 mb-6" />

      {/* Action Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <div className="relative flex items-center">
            <span className="absolute left-3 text-white/70">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
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
        </div>

        <button
          type="button"
          onClick={handleOpenAddModal}
          className="flex items-center gap-2 text-[#3C0008] hover:text-[#5B2228] transition-colors font-bold text-sm cursor-pointer"
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
              <div className="max-w-[80%] flex flex-col gap-1">
                <p className="text-gray-900 font-extrabold text-sm sm:text-base leading-snug">
                  {notice.title}
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  {notice.date && <span>📅 {String(notice.date)}</span>}
                  {notice.downloadLabel && (
                    <span className="truncate max-w-xs text-blue-700 font-medium">
                      📎 {notice.downloadLabel}
                    </span>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={() => handleOpenEditModal(notice)}
                  className="w-10 h-10 rounded-full bg-[#916E73] hover:bg-[#7A5A5F] text-white flex items-center justify-center transition-colors shadow cursor-pointer"
                  title="Edit Notice"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(notice.id)}
                  className="w-10 h-10 rounded-full bg-[#4A151B] hover:bg-[#340E13] text-white flex items-center justify-center transition-colors shadow cursor-pointer"
                  title="Delete Notice"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
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

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto">
            <h2 className="text-xl font-extrabold text-[#3C0008] mb-4">
              {editingNotice ? 'Edit Notice' : 'Add New Notice'}
            </h2>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Notice Title</label>
                <textarea
                  required
                  rows={3}
                  value={titleInput}
                  onChange={(e) => setTitleInput(e.target.value)}
                  placeholder="Enter notice title..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2228] text-gray-800 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Date</label>
                <input
                  type="date"
                  value={dateInput}
                  onChange={(e) => setDateInput(e.target.value)}
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2228] text-gray-800 text-sm"
                />
              </div>

              {/* Upload Media Section */}
              <div className="p-4 bg-stone-50 border border-gray-200 rounded-xl flex flex-col gap-3">
                <label className="block text-sm font-bold text-[#3C0008]">
                  Upload Media / Document 📎
                </label>
                <input
                  type="file"
                  onChange={handleFileChange}
                  className="w-full text-xs text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#5B2228] file:text-white hover:file:bg-[#4A1B20] file:cursor-pointer cursor-pointer"
                />
                {selectedFile && (
                  <p className="text-xs text-emerald-700 font-medium truncate">
                    Selected file: {selectedFile.name}
                  </p>
                )}
                {editingNotice && !selectedFile && editingNotice.downloadUrl && (
                  <p className="text-xs text-blue-700 truncate font-medium">
                    Current file: {editingNotice.downloadLabel || 'Existing File Attached'}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Download Label (Optional)</label>
                <input
                  type="text"
                  value={downloadLabelInput}
                  onChange={(e) => setDownloadLabelInput(e.target.value)}
                  placeholder="e.g. Online System Guidelines PDF"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2228] text-gray-800 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-gray-700 mb-1">Or Direct URL / Path (Optional)</label>
                <input
                  type="text"
                  value={downloadUrlInput}
                  onChange={(e) => setDownloadUrlInput(e.target.value)}
                  placeholder="e.g. https://example.com/file.pdf"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5B2228] text-gray-800 text-sm"
                />
              </div>

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  disabled={isUploading}
                  className="px-5 py-2.5 rounded-xl border border-gray-300 text-gray-700 font-bold text-sm hover:bg-gray-50 transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUploading}
                  className="px-5 py-2.5 rounded-xl bg-[#5B2228] hover:bg-[#4A1B20] text-white font-bold text-sm transition-colors shadow-sm cursor-pointer disabled:opacity-50"
                >
                  {isUploading ? 'Uploading...' : editingNotice ? 'Save Changes' : 'Publish Notice'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}