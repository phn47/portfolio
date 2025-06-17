import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    demoLink: string;
    codeLink: string;
    tags: string[];
    category: 'all' | 'web' | 'app' | 'design';
}

const Projects: React.FC = () => {
    const { t } = useTranslation();
    const [filter, setFilter] = useState<'all' | 'web' | 'app' | 'design'>('all');

    const projects: Project[] = [
        {
            id: 1,
            title: 'E-commerce Website',
            description: 'Một website bán hàng trực tuyến với đầy đủ tính năng từ giỏ hàng đến thanh toán.',
            image: 'https://placehold.co/800x600/0088cc/FFFFFF/png?text=E-commerce+Website',
            demoLink: 'https://example.com/project1',
            codeLink: 'https://github.com/phamhoainam/project1',
            tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            category: 'web'
        },
        {
            id: 2,
            title: 'Task Management App',
            description: 'Ứng dụng quản lý công việc với các tính năng kéo thả, nhắc nhở và thống kê.',
            image: 'https://placehold.co/800x600/27ae60/FFFFFF/png?text=Task+Management+App',
            demoLink: 'https://example.com/project2',
            codeLink: 'https://github.com/phamhoainam/project2',
            tags: ['React', 'Firebase', 'Tailwind CSS', 'React DnD'],
            category: 'app'
        },
        {
            id: 3,
            title: 'Blog Platform',
            description: 'Nền tảng blog với hệ thống CMS, hỗ trợ Markdown và tìm kiếm nâng cao.',
            image: 'https://placehold.co/800x600/e74c3c/FFFFFF/png?text=Blog+Platform',
            demoLink: 'https://example.com/project3',
            codeLink: 'https://github.com/phamhoainam/project3',
            tags: ['Next.js', 'Sanity CMS', 'TypeScript', 'Tailwind CSS'],
            category: 'web'
        },
        {
            id: 4,
            title: 'Portfolio Template',
            description: 'Mẫu portfolio hiện đại và chuyên nghiệp cho các nhà phát triển web.',
            image: 'https://placehold.co/800x600/3498db/FFFFFF/png?text=Portfolio+Template',
            demoLink: 'https://example.com/project4',
            codeLink: 'https://github.com/phamhoainam/project4',
            tags: ['HTML', 'CSS', 'JavaScript', 'SCSS'],
            category: 'design'
        },
        {
            id: 5,
            title: 'Weather App',
            description: 'Ứng dụng thời tiết với dự báo 7 ngày và hiển thị bản đồ thời tiết trực quan.',
            image: 'https://placehold.co/800x600/9b59b6/FFFFFF/png?text=Weather+App',
            demoLink: 'https://example.com/project5',
            codeLink: 'https://github.com/phamhoainam/project5',
            tags: ['React', 'Weather API', 'Leaflet Maps', 'Chart.js'],
            category: 'app'
        },
        {
            id: 6,
            title: 'Travel Agency Website',
            description: 'Website cho công ty du lịch với tính năng đặt tour và thanh toán online.',
            image: 'https://placehold.co/800x600/f1c40f/FFFFFF/png?text=Travel+Agency',
            demoLink: 'https://example.com/project6',
            codeLink: 'https://github.com/phamhoainam/project6',
            tags: ['WordPress', 'PHP', 'MySQL', 'Bootstrap'],
            category: 'web'
        }
    ];

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    const projectVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
            }
        })
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
                    <h1 className="section-title mx-auto">{t('projects.title', 'Dự án của tôi')}</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
                        {t('projects.intro', 'Khám phá các dự án tôi đã làm việc. Mỗi dự án là một cơ hội để học hỏi và phát triển kỹ năng.')}
                    </p>
                </motion.div>

                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    <button
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all'
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                        onClick={() => setFilter('all')}
                    >
                        Tất cả
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'web'
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                        onClick={() => setFilter('web')}
                    >
                        Website
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'app'
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                        onClick={() => setFilter('app')}
                    >
                        Ứng dụng
                    </button>
                    <button
                        className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'design'
                            ? 'bg-primary text-white'
                            : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
                            }`}
                        onClick={() => setFilter('design')}
                    >
                        UI/UX
                    </button>
                </div>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    initial="hidden"
                    animate="visible"
                >
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            custom={index}
                            variants={projectVariants}
                            className="card overflow-hidden group"
                        >
                            <div className="relative overflow-hidden h-56">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="flex gap-4">
                                        <a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center"
                                            aria-label="View Demo"
                                        >
                                            <FaExternalLinkAlt />
                                        </a>
                                        <a
                                            href={project.codeLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-white text-primary flex items-center justify-center"
                                            aria-label="View Code"
                                        >
                                            <FaGithub />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-4">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="text-xs bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600 dark:text-gray-400">Không có dự án nào phù hợp với bộ lọc của bạn.</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Projects; 