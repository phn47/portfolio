import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface NavbarProps {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

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
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'text-primary' : ''}`}>
                        Trang chủ
                    </Link>
                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'text-primary' : ''}`}>
                        Giới thiệu
                    </Link>
                    <Link to="/projects" className={`nav-link ${location.pathname === '/projects' ? 'text-primary' : ''}`}>
                        Dự án
                    </Link>
                    <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'text-primary' : ''}`}>
                        Liên hệ
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
                    <div className="container py-4 flex flex-col gap-4">
                        <Link to="/" className="py-2 hover:text-primary transition-colors">
                            Trang chủ
                        </Link>
                        <Link to="/about" className="py-2 hover:text-primary transition-colors">
                            Giới thiệu
                        </Link>
                        <Link to="/projects" className="py-2 hover:text-primary transition-colors">
                            Dự án
                        </Link>
                        <Link to="/contact" className="py-2 hover:text-primary transition-colors">
                            Liên hệ
                        </Link>

                        {/* Social Icons - Mobile */}
                        <div className="flex items-center gap-3 py-2">
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
                    </div>
                </motion.div>
            )}
        </header>
    );
};

export default Navbar; 