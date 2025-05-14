import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaSearch } from 'react-icons/fa';

const NotFound: React.FC = () => {
    return (
        <section className="py-32 md:py-40">
            <div className="container max-w-3xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-8xl font-bold text-primary mb-6">404</h1>

                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Oops! Trang không tìm thấy
                    </h2>

                    <p className="text-xl text-gray-600 dark:text-gray-400 mb-10">
                        Trang bạn đang tìm kiếm có thể đã bị xóa, tên đã thay đổi hoặc tạm thời không khả dụng.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <Link
                            to="/"
                            className="btn btn-primary inline-flex items-center justify-center"
                        >
                            <FaHome className="mr-2" /> Trang chủ
                        </Link>

                        <Link
                            to="/contact"
                            className="btn btn-outline inline-flex items-center justify-center"
                        >
                            <FaSearch className="mr-2" /> Hỗ trợ tìm kiếm
                        </Link>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300 dark:border-gray-700"></div>
                        </div>
                        <div className="relative flex justify-center">
                            <span className="bg-light dark:bg-dark px-4 text-sm text-gray-500 dark:text-gray-400">
                                Hoặc chuyển đến các trang phổ biến
                            </span>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mt-10">
                        <Link
                            to="/about"
                            className="p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            Giới thiệu
                        </Link>

                        <Link
                            to="/projects"
                            className="p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            Dự án
                        </Link>

                        <Link
                            to="/blog"
                            className="p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            Blog
                        </Link>

                        <Link
                            to="/contact"
                            className="p-4 bg-white dark:bg-dark-800 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            Liên hệ
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default NotFound; 