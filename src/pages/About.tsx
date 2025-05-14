import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';

interface Skill {
    name: string;
    percentage: number;
}

interface Experience {
    period: string;
    position: string;
    company: string;
    description: string;
}

interface Education {
    year: string;
    degree: string;
    institution: string;
    description: string;
}

const About: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'skills' | 'experience' | 'education'>('skills');

    const frontendSkills: Skill[] = [
        { name: 'HTML', percentage: 90 },
        { name: 'CSS/SCSS', percentage: 85 },
        { name: 'JavaScript', percentage: 85 },
        { name: 'React', percentage: 80 },
        { name: 'Tailwind CSS', percentage: 75 },
    ];

    const backendSkills: Skill[] = [
        { name: 'Node.js', percentage: 75 },
        { name: 'Express', percentage: 70 },
        { name: 'MongoDB', percentage: 65 },
        { name: 'SQL', percentage: 60 },
    ];

    const otherSkills: Skill[] = [
        { name: 'Git', percentage: 80 },
        { name: 'RESTful APIs', percentage: 75 },
        { name: 'UI/UX Design', percentage: 65 },
    ];

    const experiences: Experience[] = [
        {
            period: '2022 - Hiện tại',
            position: 'Lập trình viên Full Stack',
            company: 'Công ty XYZ',
            description: 'Phát triển và bảo trì các ứng dụng web sử dụng React, Node.js và MongoDB. Tham gia vào tất cả các giai đoạn của vòng đời phát triển phần mềm, từ lên ý tưởng đến triển khai.'
        },
        {
            period: '2021 - 2022',
            position: 'Lập trình viên Frontend',
            company: 'Công ty ABC',
            description: 'Phát triển giao diện người dùng cho các ứng dụng web sử dụng HTML, CSS, JavaScript và React. Hợp tác chặt chẽ với các nhà thiết kế và backend developers.'
        },
        {
            period: '2020 - 2021',
            position: 'Thực tập sinh Web Development',
            company: 'Công ty DEF',
            description: 'Hỗ trợ team phát triển web trong việc tạo ra và bảo trì các trang web. Học hỏi các công nghệ web hiện đại và các phương pháp phát triển phần mềm.'
        }
    ];

    const educations: Education[] = [
        {
            year: '2020',
            degree: 'Cử nhân Khoa học Máy tính',
            institution: 'Đại học XYZ',
            description: 'Tốt nghiệp với số điểm GPA 3.8/4.0. Chuyên ngành về phát triển phần mềm và khoa học dữ liệu.'
        },
        {
            year: '2019',
            degree: 'Chứng chỉ Phát triển Web',
            institution: 'CodeCamp Academy',
            description: 'Hoàn thành khóa học 6 tháng về phát triển web full stack với các dự án thực tế.'
        }
    ];

    const SkillBar: React.FC<{ skill: Skill }> = ({ skill }) => (
        <div className="mb-6">
            <div className="flex justify-between mb-1">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                <motion.div
                    className="bg-primary h-2.5 rounded-full"
                    style={{ width: `${skill.percentage}%` }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                />
            </div>
        </div>
    );

    return (
        <section className="py-20 md:py-32">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="section-title mx-auto">Giới thiệu</h1>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4">
                        Tìm hiểu thêm về tôi, kinh nghiệm và các kỹ năng của tôi
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <img
                            src="https://res.cloudinary.com/derzqoidk/image/upload/v1743443174/profile/kg8ynouleuuhyadk1dei.jpg"
                            alt="Phạm Hoài Nam"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h2 className="text-3xl font-bold mb-4">Tôi là <span className="text-primary">Phạm Hoài Nam</span></h2>
                        <h3 className="text-xl text-gray-600 dark:text-gray-400 mb-6">Full Stack Developer</h3>

                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Tôi là một Kỹ sư phần mềm với niềm đam mê về phát triển phần mềm và công nghệ. Với kinh nghiệm trong việc phát triển Full Stack, tôi luôn tìm kiếm những thách thức mới và cơ hội để học hỏi, phát triển bản thân.
                        </p>

                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Tôi có kinh nghiệm làm việc với nhiều công nghệ web hiện đại và luôn tìm cách tối ưu hóa hiệu suất của các ứng dụng mà tôi xây dựng. Tôi tin rằng code chất lượng cao là nền tảng của mọi dự án thành công.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                            <div>
                                <p className="mb-2"><strong>Họ và tên:</strong> Phạm Hoài Nam</p>
                                <p className="mb-2"><strong>Email:</strong> phamnam1449@gmail.com</p>
                            </div>
                            <div>
                                <p className="mb-2"><strong>Vị trí:</strong> Full Stack Developer</p>
                                <p className="mb-2"><strong>Địa điểm:</strong> Việt Nam</p>
                            </div>
                        </div>

                        <a
                            href="/assets/cv.pdf"
                            download
                            className="btn btn-primary inline-flex items-center"
                        >
                            <FaDownload className="mr-2" /> Tải CV
                        </a>
                    </motion.div>
                </div>

                <div className="bg-white dark:bg-dark-800 rounded-lg shadow-lg p-8 mb-20">
                    <div className="tab-titles mb-8 border-b border-gray-200 dark:border-gray-700">
                        <div className="flex flex-wrap">
                            <button
                                className={`tab-link py-4 px-6 font-medium relative ${activeTab === 'skills' ? 'text-primary' : 'text-gray-600 dark:text-gray-400'}`}
                                onClick={() => setActiveTab('skills')}
                            >
                                Kỹ năng
                                {activeTab === 'skills' && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                                        layoutId="tab-indicator"
                                    />
                                )}
                            </button>

                            <button
                                className={`tab-link py-4 px-6 font-medium relative ${activeTab === 'experience' ? 'text-primary' : 'text-gray-600 dark:text-gray-400'}`}
                                onClick={() => setActiveTab('experience')}
                            >
                                Kinh nghiệm
                                {activeTab === 'experience' && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                                        layoutId="tab-indicator"
                                    />
                                )}
                            </button>

                            <button
                                className={`tab-link py-4 px-6 font-medium relative ${activeTab === 'education' ? 'text-primary' : 'text-gray-600 dark:text-gray-400'}`}
                                onClick={() => setActiveTab('education')}
                            >
                                Học vấn
                                {activeTab === 'education' && (
                                    <motion.div
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                                        layoutId="tab-indicator"
                                    />
                                )}
                            </button>
                        </div>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'skills' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                <div>
                                    <h3 className="text-xl font-bold mb-6 text-primary">Frontend</h3>
                                    {frontendSkills.map((skill, index) => (
                                        <SkillBar key={`frontend-${index}`} skill={skill} />
                                    ))}
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-6 text-primary">Backend</h3>
                                    {backendSkills.map((skill, index) => (
                                        <SkillBar key={`backend-${index}`} skill={skill} />
                                    ))}
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-6 text-primary">Khác</h3>
                                    {otherSkills.map((skill, index) => (
                                        <SkillBar key={`other-${index}`} skill={skill} />
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'experience' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="space-y-8">
                                    {experiences.map((experience, index) => (
                                        <div key={`exp-${index}`} className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                                            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{experience.period}</div>
                                                <h3 className="text-xl font-bold mb-1">{experience.position}</h3>
                                                <div className="text-primary mb-4">{experience.company}</div>
                                                <p className="text-gray-600 dark:text-gray-400">{experience.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {activeTab === 'education' && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="space-y-8">
                                    {educations.map((education, index) => (
                                        <div key={`edu-${index}`} className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700 last:border-0 last:pb-0">
                                            <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-0"></div>
                                            <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg">
                                                <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">{education.year}</div>
                                                <h3 className="text-xl font-bold mb-1">{education.degree}</h3>
                                                <div className="text-primary mb-4">{education.institution}</div>
                                                <p className="text-gray-600 dark:text-gray-400">{education.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About; 