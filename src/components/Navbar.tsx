import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const { t, i18n } = useTranslation();

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsMenuOpen(false);
    }, [location]);

    const handleLanguageChange = (lng: string) => {
        i18n.changeLanguage(lng);
        localStorage.setItem('lang', lng);
    };

    useEffect(() => {
        const savedLang = localStorage.getItem('lang');
        if (savedLang && savedLang !== i18n.language) {
            i18n.changeLanguage(savedLang);
        }
    }, [i18n]);

    return (
        <header
            className={`fixed w-full z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/90 dark:bg-dark/90 backdrop-blur-sm shadow-lg py-3'
                : 'bg-transparent py-5'
                }`}
        >
            <div className="container flex items-center justify-between">
                <Link to="/" className="text-2xl font-bold text-primary">
                    PHN
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    <Link to="/" className="hover:text-primary transition-colors">
                        {t('home')}
                    </Link>
                    <Link to="/about" className="hover:text-primary transition-colors">
                        {t('about')}
                    </Link>
                    <Link to="/projects" className="hover:text-primary transition-colors">
                        {t('projects')}
                    </Link>
                    <Link to="/contact" className="hover:text-primary transition-colors">
                        {t('contact')}
                    </Link>
                </nav>

                <div className="flex items-center gap-4">
                    {/* Theme toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                        {theme === 'dark' ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-700" />}
                    </button>

                    {/* Language toggle */}
                    <select
                        value={i18n.language}
                        onChange={e => handleLanguageChange(e.target.value)}
                        className="p-2 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-dark-800 text-sm focus:outline-none"
                        aria-label="Select language"
                    >
                        <option value="vi">VI</option>
                        <option value="en">EN</option>
                    </select>

                    {/* Social Icons - Desktop only */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="https://github.com/phamhoainam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon hover:bg-gray-200 dark:hover:bg-gray-800"
                        >
                            <FaGithub />
                        </a>
                        <a
                            href="https://linkedin.com/in/phamhoainam"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon hover:bg-gray-200 dark:hover:bg-gray-800"
                        >
                            <FaLinkedin />
                        </a>
                        <a
                            href="mailto:phamnam1449@gmail.com"
                            className="social-icon hover:bg-gray-200 dark:hover:bg-gray-800"
                        >
                            <FaEnvelope />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <button
                        className="md:hidden p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                    >
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="md:hidden bg-white dark:bg-dark absolute top-full left-0 w-full shadow-lg"
                >
                    <nav className="flex flex-col gap-4 p-6">
                        <Link to="/" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                            {t('home')}
                        </Link>
                        <Link to="/about" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                            {t('about')}
                        </Link>
                        <Link to="/projects" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                            {t('projects')}
                        </Link>
                        <Link to="/contact" className="hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                            {t('contact')}
                        </Link>
                        <div className="flex items-center gap-2 mt-4">
                            <span className="text-xs">VI</span>
                            <label className="switch">
                                <input
                                    type="checkbox"
                                    checked={i18n.language === 'en'}
                                    onChange={e => handleLanguageChange(e.target.checked ? 'en' : 'vi')}
                                />
                                <span className="slider"></span>
                            </label>
                            <span className="text-xs">EN</span>
                        </div>
                    </nav>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar; 