import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../styles/not-found.css';
import { useTranslation } from 'react-i18next';

const STAR_COUNT = 100;
const COMET_COUNT = 3;

const NotFound = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (!containerRef.current) return;

        const container = containerRef.current;
        const stars: HTMLElement[] = [];
        const comets: HTMLElement[] = [];

        // Tạo sao
        for (let i = 0; i < STAR_COUNT; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.setProperty('--duration', `${Math.random() * 3 + 2}s`);
            star.style.width = `${Math.random() * 3 + 1}px`;
            star.style.height = star.style.width;
            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;
            star.style.animationDelay = `${Math.random() * 5}s`;
            container.appendChild(star);
            stars.push(star);
        }

        // Tạo sao băng
        for (let i = 0; i < COMET_COUNT; i++) {
            const comet = document.createElement('div');
            comet.className = 'comet';
            comet.style.setProperty('--duration', `${Math.random() * 10 + 5}s`);
            comet.style.left = `${Math.random() * 100}%`;
            comet.style.top = `${Math.random() * 100}%`;
            comet.style.animationDelay = `${Math.random() * 10}s`;
            container.appendChild(comet);
            comets.push(comet);
        }

        // Tối ưu hiệu năng với Intersection Observer
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const element = entry.target as HTMLElement;
                    element.style.animationPlayState = entry.isIntersecting ? 'running' : 'paused';
                });
            },
            { threshold: 0.1 }
        );

        [...stars, ...comets].forEach((element) => observer.observe(element));

        // Cleanup
        return () => {
            observer.disconnect();
            stars.forEach((star) => star.remove());
            comets.forEach((comet) => comet.remove());
        };
    }, []);

    return (
        <div className="not-found" ref={containerRef}>
            <div className="not-found__container">
                <h1 className="not-found__error-code">404</h1>
                <h2 className="not-found__title">{t('notFound.title')}</h2>
                <p className="not-found__description">
                    {t('notFound.description')}
                </p>
                <Link to="/" className="not-found__button">
                    {t('notFound.backHome')}
                </Link>
            </div>
            <footer className="not-found__footer">
                © {new Date().getFullYear()} Portfolio. All rights reserved.
            </footer>
        </div>
    );
};

export default NotFound; 