import React from 'react';
import { Award, Briefcase, GraduationCap, Code, Database, PenTool, UserCheck } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';
import { INSTRUCTOR } from '../../constants/data';

const InstructorSection = () => {
    return (
        <AnimatedSection
            id="instructor"
            className="py-20 bg-gray-50"
            animation="fade-in"
        >
            <div className="container mx-auto px-6">
                <div className="mb-16 text-center">
                    <AnimatedSection animation="fade-up">
                        <h2 className="section-title">Giảng viên</h2>
                        <p className="section-subtitle">
                            Học từ chuyên gia có kinh nghiệm thực tiễn trong ngành
                        </p>
                    </AnimatedSection>
                </div>

                <AnimatedSection animation="fade-up" delay={200}>
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/3 bg-gradient-to-br from-indigo-600 to-purple-700 text-white p-8">
                                <div className="text-center">
                                    <img
                                        src={INSTRUCTOR.avatar || "/api/placeholder/200/200"}
                                        alt={INSTRUCTOR.name}
                                        className="w-48 h-48 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
                                    />
                                    <h3 className="text-2xl font-bold mb-2">{INSTRUCTOR.name}</h3>
                                    <p className="text-indigo-200 mb-4">{INSTRUCTOR.title}</p>

                                    <div className="mt-6 text-left">
                                        <div className="flex items-center mb-3 opacity-90">
                                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                                            </svg>
                                            <span className='text-sm'>August 24, 1999</span>
                                        </div>
                                        <div className="flex items-center mb-3 opacity-90">
                                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                                <circle cx="12" cy="8" r="5" />
                                                <path d="M12 13c-3.314 0-6 2.686-6 6v1h12v-1c0-3.314-2.686-6-6-6z" />
                                            </svg>
                                            <span className='text-sm'>Nam</span>
                                        </div>
                                        <div className="flex items-center mb-3 opacity-90">
                                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                            </svg>
                                            <span className='text-sm'>0772589922</span>
                                        </div>
                                        <div className="flex items-center mb-3 opacity-90">
                                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                            </svg>
                                            <span className="text-sm">ngonhattoan99@gmail.com</span>
                                        </div>
                                        <div className="flex items-center mb-3 opacity-90">
                                            <svg className="w-5 h-5 mr-3" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm">78 Pham Dinh Ho, District 6, Ho Chi Minh city, Vietnam</span>
                                        </div>

                                    </div>

                                    <div className="flex items-center justify-center space-x-2 text-white mt-4">
                                        <a href="https://www.linkedin.com/in/ngonhattoan" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                                            <svg width="20" height="20" fill="currentColor">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                            </svg>
                                        </a>
                                        <a href="mailto:ngonhattoan99@gmail.com" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                                <polyline points="22,6 12,13 2,6"></polyline>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-2/3 p-8">
                                <blockquote className="italic text-gray-600 border-l-4 border-indigo-500 pl-4 mb-8">
                                    "{INSTRUCTOR.motto}"
                                </blockquote>

                                <div className="mb-8 bg-gray-50 rounded-lg p-5 border-l-4 border-indigo-500">
                                    <h4 className="font-bold text-lg mb-3 flex items-center">
                                        <UserCheck className="text-indigo-600 mr-2" size={22} />
                                        <span>Tóm tắt chuyên môn</span>
                                    </h4>
                                    <ul className="space-y-2">
                                        <li className="flex items-start">
                                            <span className="inline-block bg-indigo-500 rounded-full w-1.5 h-1.5 mt-2 mr-2"></span>
                                            <span className="text-gray-700">4 năm kinh nghiệm phát triển phần mềm với kiến thức tốt về giải quyết vấn đề, phân tích hướng đối tượng, thiết kế cơ sở dữ liệu và mô hình thiết kế.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block bg-indigo-500 rounded-full w-1.5 h-1.5 mt-2 mr-2"></span>
                                            <span className="text-gray-700">Sử dụng Java Virtual Machine - Vert.x cho ứng dụng hướng sự kiện đa luồng.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block bg-indigo-500 rounded-full w-1.5 h-1.5 mt-2 mr-2"></span>
                                            <span className="text-gray-700">Kinh nghiệm phát triển phần mềm và ứng dụng web sử dụng Java.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block bg-indigo-500 rounded-full w-1.5 h-1.5 mt-2 mr-2"></span>
                                            <span className="text-gray-700">Kinh nghiệm tích hợp kiểm thử tự động và triển khai CI/CD.</span>
                                        </li>
                                        <li className="flex items-start">
                                            <span className="inline-block bg-indigo-500 rounded-full w-1.5 h-1.5 mt-2 mr-2"></span>
                                            <span className="text-gray-700">Dẫn dắt dự án với 4 lập trình viên.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                                    <div className="flex">
                                        <div className="mr-4">
                                            <div className="bg-indigo-100 p-3 rounded-full">
                                                <GraduationCap className="text-indigo-600" size={24} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Học vấn</h4>
                                            <p className="text-gray-700 mb-1">{INSTRUCTOR.education.university}</p>
                                            <p className="text-gray-600 mb-1">Chuyên ngành: {INSTRUCTOR.education.major}</p>
                                            <p className="text-indigo-600">{INSTRUCTOR.education.scholarship}</p>
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="mr-4">
                                            <div className="bg-green-100 p-3 rounded-full">
                                                <Code className="text-green-600" size={24} />
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2">Kỹ năng</h4>
                                            {INSTRUCTOR.technical_skills.map((content, index) => (
                                                <p className="text-gray-600 mb-2" key={index}>{content}</p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 border-t border-gray-100">
                            <div className="grid grid-cols-1 gap-8">
                                <div>
                                    <h3 className="text-xl font-bold mb-6 text-indigo-700 border-b border-gray-200 pb-2">Công nghệ & Công cụ</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                        <div className="bg-white rounded-lg shadow-md p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="bg-green-100 p-3 rounded-full mr-4">
                                                    <Code className="text-green-600" size={24} />
                                                </div>
                                                <h4 className="font-bold text-lg">Ngôn ngữ lập trình</h4>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {INSTRUCTOR.skills.languages.map((lang, index) => (
                                                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                                        {lang}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-lg shadow-md p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                                                    <PenTool className="text-yellow-600" size={24} />
                                                </div>
                                                <h4 className="font-bold text-lg">Công cụ</h4>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {INSTRUCTOR.skills.tools.map((tool, index) => (
                                                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                                        {tool}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="bg-white rounded-lg shadow-md p-6">
                                            <div className="flex items-center mb-4">
                                                <div className="bg-red-100 p-3 rounded-full mr-4">
                                                    <Database className="text-red-600" size={24} />
                                                </div>
                                                <h4 className="font-bold text-lg">Cơ sở dữ liệu</h4>
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                {INSTRUCTOR.skills.databases.map((db, index) => (
                                                    <span key={index} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                                                        {db}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-xl font-bold mb-6 text-indigo-700 border-b border-gray-200 pb-2">Kinh nghiệm làm việc</h3>
                                    <div className="space-y-8">
                                        {INSTRUCTOR.experience_details.map((exp, index) => (
                                            <div key={index} className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
                                                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
                                                    <div>
                                                        <h4 className="text-lg font-bold text-gray-800">{exp.company}</h4>
                                                        <p className="text-indigo-600 font-medium">{exp.position}</p>
                                                    </div>
                                                    <span className="inline-block bg-indigo-100 text-indigo-800 px-4 py-1 rounded-full text-sm font-medium">
                                                        {exp.period}
                                                    </span>
                                                </div>

                                                <p className="text-gray-700 mb-4">{exp.description}</p>

                                                {exp.achievements && exp.achievements.length > 0 && (
                                                    <div>
                                                        <h5 className="font-semibold text-gray-800 mb-2">Thành tựu nổi bật:</h5>
                                                        <ul className="space-y-2 ml-1">
                                                            {exp.achievements.map((achievement, i) => (
                                                                <li key={i} className="flex items-start">
                                                                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                                        </svg>
                                                                    </div>
                                                                    <span className="text-gray-600">{achievement}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </AnimatedSection>
    );
};

export default InstructorSection;