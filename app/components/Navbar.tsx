'use client';

import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // 导航栏高度加一些padding
      const targetPosition = section.offsetTop - offset;
      
      // 关闭移动端菜单
      setIsMobileMenuOpen(false);
      
      // 添加一个小延迟，确保菜单关闭动画完成后再滚动
      setTimeout(() => {
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-md' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo with flip effect */}
          <div className="flex-shrink-0">
            <div className="flip-box" onClick={() => scrollToSection('top')}>
              <div className="flip-box-inner">
                <div className="flip-box-front">
                  <span className="text-black text-xl font-bold">{t('companyNameEn')}</span>
                </div>
                <div className="flip-box-back">
                  <span className="text-black text-xl font-bold">{t('companyName')}</span>
                </div>
              </div>
            </div>
            <style jsx>{`
              .flip-box {
                display: inline-block;
                perspective: 1000px;
                min-width: 320px;
                white-space: nowrap;
                height: 40px;
                cursor: pointer;
              }
              .flip-box-inner {
                position: relative;
                width: 100%;
                height: 100%;
                text-align: center;
                transition: transform 0.8s;
                transform-style: preserve-3d;
              }
              .flip-box:hover .flip-box-inner {
                transform: rotateY(180deg);
              }
              .flip-box-front, .flip-box-back {
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                display: flex;
                align-items: center;
                justify-content: center;
                white-space: nowrap;
                padding: 0.5rem 1rem;
              }
              .flip-box-front {
                background-color: white;
                color: black;
              }
              .flip-box-back {
                background-color: white;
                color: black;
                transform: rotateY(180deg);
              }
            `}</style>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="font-bold text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
            >
              {t('navServices')}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="font-bold text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
            >
              {t('navTeam')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="font-bold text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
            >
              {t('navContact')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              {t('navConsultation')}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t"
          >
            <div className="px-4 pt-2 pb-3 space-y-1 flex flex-col">
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left font-bold text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
              >
                {t('navServices')}
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left font-bold text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
              >
                {t('navTeam')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left font-bold text-gray-600 hover:text-gray-900 px-3 py-2 text-sm"
              >
                {t('navContact')}
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors mt-2"
              >
                {t('navConsultation')}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 