import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    vi: {
        translation: {
            home: 'Trang chủ',
            about: 'Giới thiệu',
            projects: 'Dự án',
            contact: 'Liên hệ',
            notFound: {
                title: 'Oops! Trang không tồn tại',
                description: 'Có vẻ như trang bạn đang tìm kiếm không tồn tại hoặc đã bị di chuyển.',
                backHome: 'Quay về trang chủ',
            },
            // Thêm các key khác nếu cần
        },
    },
    en: {
        translation: {
            home: 'Home',
            about: 'About',
            projects: 'Projects',
            contact: 'Contact',
            notFound: {
                title: 'Oops! Page not found',
                description: 'The page you are looking for does not exist or has been moved.',
                backHome: 'Back to Home',
            },
            // Add more keys as needed
        },
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'vi',
        fallbackLng: 'vi',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n; 