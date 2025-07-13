import React from 'react'
import Link from 'next/link';
const Page = () => {
    const skills = [
        { name: 'React', level: 85 },
        { name: 'JavaScript', level: 85 },
        { name: 'TypeScript', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'Python', level: 90 },
        { name: 'Next.js', level: 80 },
        { name: 'HTML/CSS', level: 90 },
        { name: "Java", level: 60 },
        { name: "C++", level: 50 },

        { name: 'CSS/Tailwind', level: 88 }
    ]

    const achievements = [
        { number: '10+', label: 'Projects Completed' },
        { number: 'NA', label: 'Years Experience' },
        { number: '24/7', label: 'Problem Solving' }
    ]

    return (
        <main className=" w-full py-8  h-1/2 px-4 bg-gradient-to-br from-gray-900 via-black to-gray-900">
            <div className="container mx-auto max-w-6xl h-1/2">
                <div className="bg-black/50 backdrop-blur-sm rounded-3xl border border-gray-800 overflow-hidden shadow-2xl">
                    <div className="grid lg:grid-cols-2 gap-0 min-h-3/4">

                        {/* Left Side - About Me */}
                        <div className=" flex h-1/2  flex-col justify-center p-8 lg:p-12 bg-gradient-to-br from-blue-900/20 to-purple-900/20 relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5"></div>
                            <div className="relative z-10">
                                <div className="mb-6">
                                    <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                                        About Me
                                    </h1>
                                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                </div>

                                <div className="space-y-6 text-gray-300 leading-relaxed">
                                    <p className="text-lg">
                                        I am a passionate <span className="text-blue-400 font-semibold">Full Stack Developer/Software Developer</span> with
                                        a love for creating innovative digital solutions. My journey in tech started with curiosity
                                        and has evolved into a dedicated pursuit of excellence.
                                    </p>

                                    <p>
                                        I specialize in building modern web applications using cutting-edge technologies.
                                        From crafting pixel-perfect user interfaces to architecting robust backend systems,
                                        I bring ideas to life with clean, efficient code.
                                    </p>


                                </div>

                                <div className="mt-8 flex flex-wrap gap-4">
                                    <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500
                                     text-white rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all 
                                     duration-300 transform hover:scale-105">
                                        <Link href='/myprojects'>My Projects</Link>
                                    </button>
                                    <button className="px-6 py-3 border border-gray-600 text-gray-300 rounded-xl font-semibold
                                     hover:border-gray-400 hover:text-white transition-all duration-300">
                                        Download CV
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Right Side - Skills & Stats */}
                        <div className=" h-1/2 overscroll-y-scrollflex flex-col justify-center p-8 lg:p-12 bg-gradient-to-br from-gray-900/50 to-black/50">
                            <div className="space-y-8">

                                {/* Skills Section */}
                                <div>
                                    <h2 className="text-3xl font-bold text-white mb-6">
                                        Skills & Expertise
                                    </h2>
                                    <div className="space-y-4">
                                        {skills.map((skill, index) => (
                                            <div key={index} className="group">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="text-gray-300 font-medium">{skill.name}</span>
                                                    <span className="text-blue-400 text-sm">{skill.level}%</span>
                                                </div>
                                                <div className="w-full bg-gray-800 rounded-full h-2">
                                                    <div
                                                        className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                                                        style={{ width: `${skill.level}%` }}
                                                    ></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Stats Section */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Achievements</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {achievements.map((achievement, index) => (
                                            <div key={index} className="text-center p-4 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                                                <div className="text-2xl font-bold text-blue-400 mb-1">
                                                    {achievement.number}
                                                </div>
                                                <div className="text-gray-400 text-sm">
                                                    {achievement.label}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tech Stack */}
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Git'].map((tech, index) => (
                                            <span key={index} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Page