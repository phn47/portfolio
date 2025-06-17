import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typed from 'typed.js';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Home: React.FC = () => {
    const { t } = useTranslation();
    const typedRef = useRef<HTMLSpanElement>(null);
    const typedInstanceRef = useRef<Typed | null>(null);

    useEffect(() => {
        if (typedRef.current) {
            typedInstanceRef.current = new Typed(typedRef.current, {
                strings: [
                    'Frontend Developer',
                    'Backend Developer',
                    'Full Stack Developer',
                    'UI/UX Designer'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 1500,
                loop: true,
                showCursor: true,
            });
        }

        return () => {
            if (typedInstanceRef.current) {
                typedInstanceRef.current.destroy();
            }
        };
    }, []);

    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 md:py-40 bg-gradient-to-b from-light to-white dark:from-dark dark:to-dark-800">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-400 mb-3">
                                {t('home.hello', 'Xin chào, tôi là')}
                            </h2>
                            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                                Phạm Hoài Nam
                            </h1>
                            <div className="text-xl md:text-2xl font-medium mb-6 text-primary flex items-center">
                                <span>{t('home.im', 'Tôi là')}&nbsp;</span>
                                <span ref={typedRef}></span>
                            </div>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-lg">
                                {t('home.intro', 'Kỹ sư phần mềm với niềm đam mê về phát triển phần mềm và công nghệ. Tôi tạo ra các ứng dụng web hiện đại với trải nghiệm người dùng tuyệt vời.')}
                            </p>
                            <div className="flex flex-wrap gap-4 mb-8">
                                <Link to="/contact" className="btn btn-primary">
                                    Liên hệ với tôi
                                </Link>
                                <Link to="/projects" className="btn btn-outline">
                                    Xem dự án của tôi
                                </Link>
                            </div>
                            <div className="flex items-center gap-4">
                                <a
                                    href="https://github.com/phamhoainam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition-colors"
                                    aria-label="GitHub"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://linkedin.com/in/phamhoainam"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="mailto:phamnam1449@gmail.com"
                                    className="social-icon bg-gray-200 dark:bg-gray-800 hover:bg-primary hover:text-white transition-colors"
                                    aria-label="Email"
                                >
                                    <FaEnvelope />
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex justify-center items-center"
                        >
                            <div className="relative w-full max-w-md aspect-square rounded-full overflow-hidden border-4 border-primary p-2">
                                <img
                                    src="https://res.cloudinary.com/derzqoidk/image/upload/v1743443174/profile/kg8ynouleuuhyadk1dei.jpg"
                                    alt="Phạm Hoài Nam"
                                    className="w-full h-full object-cover rounded-full"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Services Section Preview */}
            <section className="py-20 bg-light-100 dark:bg-dark-700">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-16"
                    >
                        <h2 className="section-title mx-auto">Dịch vụ</h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
                            Tôi cung cấp các dịch vụ phát triển web chuyên nghiệp
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="card p-6 md:p-8 group hover:shadow-lg transition-shadow"
                        >
                            <div className="w-14 h-14 mb-6 rounded-lg bg-primary/10 flex items-center justify-center text-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <i className="fas fa-code"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Phát triển Web</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Phát triển web full stack sử dụng công nghệ hiện đại và các phương pháp tốt nhất.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="card p-6 md:p-8 group hover:shadow-lg transition-shadow"
                        >
                            <div className="w-14 h-14 mb-6 rounded-lg bg-primary/10 flex items-center justify-center text-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <i className="fas fa-crop-alt"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Thiết kế UI/UX</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Tạo giao diện người dùng đẹp và trực quan với trải nghiệm người dùng tuyệt vời.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="card p-6 md:p-8 group hover:shadow-lg transition-shadow"
                        >
                            <div className="w-14 h-14 mb-6 rounded-lg bg-primary/10 flex items-center justify-center text-2xl text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <i className="fab fa-app-store"></i>
                            </div>
                            <h3 className="text-xl font-bold mb-3">Phát triển Ứng dụng</h3>
                            <p className="text-gray-600 dark:text-gray-400 mb-4">
                                Xây dựng ứng dụng web responsive và có khả năng mở rộng.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-20 bg-primary text-white">
                <div className="container">
                    <div className="text-center max-w-2xl mx-auto">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-3xl md:text-4xl font-bold mb-6"
                        >
                            Bạn có dự án cần thực hiện?
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-white/90 mb-8 text-lg"
                        >
                            Tôi hiện đang nhận các dự án freelance. Hãy liên hệ để chúng ta có thể bắt đầu làm việc cùng nhau!
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <Link to="/contact" className="btn bg-white text-primary hover:bg-white/90">
                                Liên hệ ngay
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home; 