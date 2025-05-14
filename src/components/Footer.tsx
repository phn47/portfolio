import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-light dark:bg-dark-800 py-10 border-t border-gray-200 dark:border-gray-800">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <Link to="/" className="text-2xl font-bold text-primary mb-4 inline-block">
                            PHN
                        </Link>
                        <p className="mb-4 text-gray-600 dark:text-gray-400">
                            Kỹ sư phần mềm với niềm đam mê về phát triển phần mềm và công nghệ.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href="https://github.com/phamhoainam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon hover:bg-gray-200 dark:hover:bg-gray-700"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </a>
                            <a
                                href="https://linkedin.com/in/phamhoainam"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon hover:bg-gray-200 dark:hover:bg-gray-700"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </a>
                            <a
                                href="mailto:phamnam1449@gmail.com"
                                className="social-icon hover:bg-gray-200 dark:hover:bg-gray-700"
                                aria-label="Email"
                            >
                                <FaEnvelope />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Liên kết nhanh</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                    Trang chủ
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                    Giới thiệu
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                    Dự án
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-gray-600 dark:text-gray-400 hover:text-primary transition-colors">
                                    Liên hệ
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4">Liên hệ</h3>
                        <p className="mb-2 text-gray-600 dark:text-gray-400">
                            <FaEnvelope className="inline mr-2" /> phamnam1449@gmail.com
                        </p>
                        <p className="mb-2 text-gray-600 dark:text-gray-400">
                            <span className="inline-block mr-2">📱</span> 0327898427
                        </p>
                        <a
                            href="/assets/cv.pdf"
                            download
                            className="btn btn-outline mt-4 inline-flex items-center"
                        >
                            <span className="mr-2">📄</span> Tải CV
                        </a>
                    </div>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
                    <p className="flex items-center justify-center gap-1">
                        Bản quyền © {currentYear} Phạm Hoài Nam. Được tạo với
                        <FaHeart className="text-red-500" />
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 