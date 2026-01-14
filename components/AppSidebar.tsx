"use client";

import { useState } from "react";

interface AppSidebarProps {
  isOpen: boolean;
  isPinned: boolean;
  onClose: () => void;
  onPin?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const AppSidebar = ({
  isOpen,
  isPinned,
  onClose,
  onPin,
  onMouseEnter,
  onMouseLeave,
}: AppSidebarProps) => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleSidebarClick = () => {
    // 사이드바가 열려있고 고정되지 않았을 때 클릭하면 고정
    if (isOpen && !isPinned && onPin) {
      onPin();
    }
  };

  return (
    <>
      {/* Backdrop - 모바일에서만 표시, 웹에서는 투명 */}
      {isOpen && isPinned && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none z-40 transition-opacity opacity-100"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={handleSidebarClick}
        className={`fixed top-0 left-0 h-full w-64 backdrop-blur-md z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } shadow-xl ${!isPinned ? "cursor-pointer" : ""}`}
        style={{
          backgroundColor: 'rgba(12, 0, 32, 0.65)', // 블루에 보라색 톤 가미, 30% 더 투명
          borderRight: '1px solid rgba(18, 0, 48, 0.6)' // 보라색 톤의 테두리, 투명도 조정
        }}
      >
        <div className="flex flex-col h-full p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-white">메뉴</h2>
            {isOpen && (
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // 사이드바 클릭 이벤트 전파 방지
                    onClose();
                  }}
                  className="p-2 rounded-lg transition-colors"
                  style={{
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    setShowTooltip(true);
                    e.currentTarget.style.backgroundColor = 'rgba(15, 0, 45, 0.8)'; // 보라색 톤의 호버
                  }}
                  onMouseLeave={(e) => {
                    setShowTooltip(false);
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  aria-label="사이드바 닫기"
                >
                  <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                {showTooltip && (
                  <div 
                    className="absolute top-full right-0 mt-2 px-3 py-1.5 text-white text-xs rounded-lg whitespace-nowrap z-50"
                    style={{ backgroundColor: 'rgba(10, 0, 38, 0.95)' }} // 보라색 톤의 툴팁
                  >
                    사이드바 닫기
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1" onClick={(e) => e.stopPropagation()}>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-white transition-colors"
                  style={{
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(15, 0, 45, 0.8)'; // 보라색 톤의 호버
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-white transition-colors"
                  style={{
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(15, 0, 45, 0.8)'; // 보라색 톤의 호버
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Product
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-white transition-colors"
                  style={{
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(15, 0, 45, 0.8)'; // 보라색 톤의 호버
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-white transition-colors"
                  style={{
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(15, 0, 45, 0.8)'; // 보라색 톤의 호버
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-white transition-colors"
                  style={{
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(15, 0, 45, 0.8)'; // 보라색 톤의 호버
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-white transition-colors"
                  style={{
                    backgroundColor: 'transparent'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(15, 0, 45, 0.8)'; // 보라색 톤의 호버
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </>
  );
};

export default AppSidebar;

