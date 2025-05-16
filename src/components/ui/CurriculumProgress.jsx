import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Milestone, Timer, CheckCircle } from 'lucide-react';

const CurriculumProgress = ({ items, activeIndex, onSelectItem, isInView }) => {
    const [animationComplete, setAnimationComplete] = useState(false);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => {
                setAnimationComplete(true);
            }, items.length * 200 + 500);

            return () => clearTimeout(timer);
        }
    }, [isInView, items.length]);

    const totalWeeks = items.reduce((sum, item) => {
        const durationMatch = item.title.match(/\((\d+)\s+tuần\)/);
        return sum + (durationMatch ? parseInt(durationMatch[1]) : 0);
    }, 0);

    const weekBlocks = [];
    let currentWeek = 0;

    items.forEach((item, index) => {
        const durationMatch = item.title.match(/\((\d+)\s+tuần\)/);
        const weeks = durationMatch ? parseInt(durationMatch[1]) : 0;

        for (let i = 0; i < weeks; i++) {
            weekBlocks.push({
                week: currentWeek + 1,
                moduleIndex: index,
                isFirst: i === 0,
                isLast: i === weeks - 1
            });
            currentWeek++;
        }
    });

    const getModuleInfo = (title) => {
        const moduleMatch = title.match(/([IVX]+)\.\s(.+?)\s\(/);
        return {
            number: moduleMatch ? moduleMatch[1] : '',
            name: moduleMatch ? moduleMatch[2] : title
        };
    };

    const gradients = [
        'from-blue-600 to-indigo-700',
        'from-purple-600 to-indigo-700',
        'from-emerald-600 to-teal-700',
        'from-amber-600 to-orange-700',
        'from-red-600 to-rose-700',
        'from-cyan-600 to-blue-700',
        'from-violet-600 to-purple-700',
        'from-fuchsia-600 to-pink-700',
        'from-green-600 to-emerald-700',
    ];

    return (
        <div className="relative">
            {/* Timeline bar */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2 rounded-full"></div>

            {/* Progress animation */}
            <motion.div
                className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 transform -translate-y-1/2 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: animationComplete ? "100%" : "0%" }}
                transition={{ duration: 1.5, ease: "easeInOut", delay: items.length * 0.2 }}
            />

            {/* Weeks indicators */}
            <div className="flex justify-between relative py-10">
                {weekBlocks.map((weekBlock, index) => {
                    const moduleInfo = getModuleInfo(items[weekBlock.moduleIndex].title);
                    const gradient = gradients[weekBlock.moduleIndex % gradients.length];
                    const isActive = weekBlock.moduleIndex === activeIndex;

                    return (
                        <div
                            key={`week-${index}`}
                            className="flex flex-col items-center relative group"
                            style={{ width: `${100 / weekBlocks.length}%` }}
                        >
                            {/* Module milestone */}
                            {weekBlock.isFirst && (
                                <motion.div
                                    className={`absolute top-1/2 transform -translate-y-10 w-8 h-8 rounded-full ${isActive ? `bg-gradient-to-r ${gradient} shadow-lg` : 'bg-white border-2 border-gray-300'
                                        } flex items-center justify-center cursor-pointer z-20`}
                                    style={{ top: '-5px' }}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ duration: 0.3, delay: 0.2 }}
                                    whileHover={{ scale: 1.2 }}
                                    onClick={() => onSelectItem(weekBlock.moduleIndex)}
                                >
                                    {isActive ? (
                                        <CheckCircle size={14} className="text-white" />
                                    ) : (
                                        <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient}`}></div>
                                    )}

                                    {/* Module tooltip */}
                                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-30 mt-[-10px]">
                                        <div className={`bg-gradient-to-r ${gradient} text-white text-xs rounded-lg py-2 px-3 shadow-lg whitespace-nowrap min-w-max`}>
                                            <div className="font-bold mb-1">Module {moduleInfo.number}</div>
                                            <div>{moduleInfo.name}</div>
                                        </div>
                                        <div className={`w-3 h-3 bg-gradient-to-r ${gradient} transform rotate-45 absolute top-full left-1/2 -translate-x-1/2 -mt-1.5`}></div>
                                    </div>
                                </motion.div>
                            )}

                            {/* Week dot */}
                            <motion.div
                                className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full ${weekBlock.moduleIndex === activeIndex ? `bg-gradient-to-r ${gradient}` : 'bg-gray-300'
                                    } z-10`}
                                style={{ top: '5px' }}
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.2, delay: 0.5 }}
                            />

                            {/* Week number below timeline */}
                            <motion.div
                                className="absolute top-[calc(50%+27px)] text-xs font-medium text-gray-500"
                                initial={{ opacity: 0, y: -5 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 + 0.3 }}
                            >
                                {weekBlock.week}
                            </motion.div>
                        </div>
                    );
                })}

                {/* Start and End markers */}
                <div className="absolute top-1/2 left-0 transform -translate-y-9 -translate-x-4 bg-gray-100 rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                    <div className="flex items-center text-xs font-medium text-gray-600">
                        <Timer size={12} className="mr-1" />
                        <span>Bắt đầu</span>
                    </div>
                </div>

                <div className="absolute top-1/2 right-0 transform -translate-y-9 translate-x-4 bg-indigo-600 text-white rounded-full px-3 py-1 shadow-md">
                    <div className="flex items-center text-xs font-medium">
                        <Milestone size={12} className="mr-1" />
                        <span>Tốt nghiệp</span>
                    </div>
                </div>
            </div>

            {/* Week labels */}
            <div className="flex justify-between mb-4">
                <div className="text-sm font-medium text-gray-500">Tuần 1</div>
                <div className="text-sm font-medium text-gray-500">Tuần {totalWeeks}</div>
            </div>
        </div>
    );
};

export default CurriculumProgress;
