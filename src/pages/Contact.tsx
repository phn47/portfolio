import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaPaperPlane, FaGithub, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Contact: React.FC = () => {
    const { t } = useTranslation();
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [formStatus, setFormStatus] = useState<{
        type: 'success' | 'error' | null;
        message: string;
    }>({
        type: null,
        message: '',
    });

    const [sending, setSending] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormState((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSending(true);

        try {
            // Giả lập gửi form thành công - trong thực tế sẽ gọi API
            await new Promise((resolve) => setTimeout(resolve, 1500));

            setFormStatus({
                type: 'success',
                message: 'Cảm ơn! Tin nhắn của bạn đã được gửi thành công.',
            });

            // Reset form
            setFormState({
                name: '',
                email: '',
                subject: '',
                message: '',
            });
        } catch (error) {
            setFormStatus({
                type: 'error',
                message: 'Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau.',
            });
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="py-20 md:py-32">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="section-title mx-auto">{t('contact.title', 'Liên hệ')}</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
                        {t('contact.intro', 'Bạn có thể liên hệ với tôi qua các kênh sau hoặc gửi tin nhắn trực tiếp.')}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold mb-6">Thông tin liên hệ</h2>

                        <div className="space-y-6 mb-8">
                            <div className="flex items-start">
                                <div className="bg-primary/10 text-primary p-4 rounded-lg mr-4">
                                    <FaMapMarkerAlt size={20} />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Địa chỉ</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Hà Nội, Việt Nam
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary/10 text-primary p-4 rounded-lg mr-4">
                                    <FaPhoneAlt size={20} />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Số điện thoại</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        <a href="tel:0327898427" className="hover:text-primary transition-colors">
                                            0327898427
                                        </a>
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="bg-primary/10 text-primary p-4 rounded-lg mr-4">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h3 className="font-medium mb-1">Email</h3>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        <a href="mailto:phamnam1449@gmail.com" className="hover:text-primary transition-colors">
                                            phamnam1449@gmail.com
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-4">Theo dõi tôi</h3>
                        <div className="flex gap-4">
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
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="bg-white dark:bg-dark-800 rounded-lg shadow-md p-8">
                            <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn</h2>

                            {formStatus.type && (
                                <div
                                    className={`p-4 rounded-lg mb-6 ${formStatus.type === 'success'
                                        ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100'
                                        : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                                        }`}
                                >
                                    {formStatus.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block mb-2 font-medium">
                                        Họ và tên
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formState.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Nhập họ và tên của bạn"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block mb-2 font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formState.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Nhập địa chỉ email của bạn"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block mb-2 font-medium">
                                        Tiêu đề
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formState.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Nhập tiêu đề tin nhắn"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block mb-2 font-medium">
                                        Tin nhắn
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formState.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-transparent focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                                        placeholder="Nhập nội dung tin nhắn của bạn"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-primary w-full flex justify-center items-center"
                                    disabled={sending}
                                >
                                    {sending ? (
                                        <span>Đang gửi...</span>
                                    ) : (
                                        <>
                                            <FaPaperPlane className="mr-2" /> Gửi tin nhắn
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>

            <div className="container mt-20">
                <div className="rounded-lg overflow-hidden h-96">
                    <iframe
                        title="Bản đồ vị trí"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59587.97785449821!2d105.80194401105342!3d21.02277876303295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab9bd9861ca1%3A0xe7887f7b72ca17a9!2zSGFub2ksIEhvw6BuIEtp4bq_bSwgSMOgIE7hu5lpLCBWaWV0bmFt!5e0!3m2!1sen!2s!4v1683123456789!5m2!1sen!2s"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>
        </section>
    );
};

export default Contact; 