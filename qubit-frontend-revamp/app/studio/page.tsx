"use client";
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { Play, BookOpen, Calendar, Award, Clock, ThumbsUp } from 'lucide-react';

type Video = {
  id: number;
  title: string;
  url: string;
  duration: string;
  category: string;
  likes: number;
};

type Resource = {
  id: number;
  title: string;
  url: string;
  imageUrl: string;
  author: string;
};

type Course = {
  id: number;
  title: string;
  description: string;
  category: string;
  level: string;
  lessons: number;
  duration: string;
  progress?: number;
};

const TechLearning = () => {
  const videos: Video[] = [
    { id: 1, title: "Introduction to React Hooks", url: "https://www.youtube.com/embed/dpw9EHDh2bM", duration: "10:15", category: "React", likes: 1243 },
    { id: 2, title: "Building a REST API with Node.js", url: "https://www.youtube.com/embed/pKd0Rpw7O48", duration: "15:32", category: "Node.js", likes: 987 },
    { id: 3, title: "TypeScript Crash Course", url: "https://www.youtube.com/embed/BCg4U1FzODs", duration: "20:45", category: "TypeScript", likes: 1562 },
    { id: 4, title: "Docker for Beginners", url: "https://www.youtube.com/embed/fqMOX6JJhGo", duration: "25:10", category: "DevOps", likes: 1876 },
    { id: 5, title: "Next.js 13 Tutorial", url: "https://www.youtube.com/embed/Y6KDk5iyrYE", duration: "12:20", category: "Next.js", likes: 2134 },
    { id: 6, title: "Mastering Git & GitHub", url: "https://www.youtube.com/embed/RGOj5yH7evk", duration: "08:45", category: "Git", likes: 3267 },
    { id: 7, title: "Data Structures & Algorithms in JavaScript", url: "https://www.youtube.com/embed/t2CEgPsws3U", duration: "31:15", category: "JavaScript", likes: 1598 },
  ];

  const resources: Resource[] = [
    {
      id: 1,
      title: "Modern JavaScript Cheat Sheet",
      url: "https://github.com/mbeaudru/modern-js-cheatsheet",
      imageUrl: "https://img.icons8.com/?size=100&id=108784&format=png",
      author: "GitHub",
    },
    {
      id: 2,
      title: "React Design Patterns",
      url: "https://reactpatterns.com/",
      imageUrl: "https://img.icons8.com/?size=100&id=123603&format=png",
      author: "ReactPatterns",
    },
    {
      id: 3,
      title: "System Design Primer",
      url: "https://github.com/donnemartin/system-design-primer",
      imageUrl: "https://img.icons8.com/?size=100&id=55494&format=png",
      author: "GitHub",
    },
  ];

  const courses: Course[] = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, Express, and MongoDB in this comprehensive course.",
      category: "Web Development",
      level: "Intermediate",
      lessons: 12,
      duration: "8 weeks",
      progress: 65,
    },
    {
      id: 2,
      title: "Cloud Architecture with AWS",
      description: "Learn how to design, deploy, and manage applications on AWS cloud infrastructure.",
      category: "Cloud Computing",
      level: "Advanced",
      lessons: 8,
      duration: "6 weeks",
      progress: 30,
    },
    {
      id: 3,
      title: "Machine Learning Fundamentals",
      description: "Discover the core concepts of machine learning and build your first ML models with Python and TensorFlow.",
      category: "Data Science",
      level: "Beginner",
      lessons: 10,
      duration: "10 weeks",
      progress: 10,
    },
  ];

  const [mainVideo, setMainVideo] = useState<Video>(videos[0]);
  const [otherVideos, setOtherVideos] = useState<Video[]>(videos.slice(1));
  const [randomResources, setRandomResources] = useState<Resource[]>([]);
  const [activeTab, setActiveTab] = useState<string>("videos");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterCategory, setFilterCategory] = useState<string>("All");

  const handleVideoClick = (selectedVideo: Video) => {
    setMainVideo(selectedVideo);
    setOtherVideos(videos.filter((video) => video.id !== selectedVideo.id));
  };

  const getRandomResources = () => {
    const shuffled = [...resources].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  const filteredVideos = otherVideos.filter(video => 
    (filterCategory === "All" || video.category === filterCategory) &&
    video.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = ["All", ...Array.from(new Set(videos.map(v => v.category)))];

  useEffect(() => {
    setRandomResources(getRandomResources());
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-gray-100">
      {/* Header */}
      <header className="bg-[#121230] py-4 border-b border-[#2a2a50] sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <h1 className="text-2xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4facfe] to-[#00f2fe]">
                QuBIT
              </span>
              <span className="text-gray-400 text-sm ml-2">Academy</span>
            </h1>
            
            <div className="flex space-x-2 items-center">
              <button 
                onClick={() => setActiveTab("videos")}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === "videos" 
                    ? "bg-[#4facfe] text-white" 
                    : "bg-[#1a1a35] text-gray-300 hover:bg-[#2a2a50]"
                }`}
              >
                Videos
              </button>
              <button 
                onClick={() => setActiveTab("courses")}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === "courses" 
                    ? "bg-[#4facfe] text-white" 
                    : "bg-[#1a1a35] text-gray-300 hover:bg-[#2a2a50]"
                }`}
              >
                Courses
              </button>
              <button 
                onClick={() => setActiveTab("resources")}
                className={`px-4 py-2 rounded-md transition-all ${
                  activeTab === "resources" 
                    ? "bg-[#4facfe] text-white" 
                    : "bg-[#1a1a35] text-gray-300 hover:bg-[#2a2a50]"
                }`}
              >
                Resources
              </button>
            </div>
            
            <div className="relative">
              <input
                type="text"
                placeholder="Search content..."
                className="bg-[#1a1a35] border border-[#2a2a50] rounded-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-[#4facfe] w-full md:w-64"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        {activeTab === "videos" && (
          <div className="flex flex-col lg:flex-row gap-6">
            <section className="w-full lg:w-3/4">
              {/* Filter Categories */}
              <div className="mb-6 flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setFilterCategory(category)}
                    className={`px-3 py-1 rounded-full text-sm transition-all ${
                      filterCategory === category
                        ? "bg-[#4facfe] text-white"
                        : "bg-[#1a1a35] text-gray-300 hover:bg-[#2a2a50]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Main Video */}
              <div className="rounded-lg overflow-hidden shadow-lg bg-[#1a1a35] border border-[#2a2a50] mb-6">
                <div className="relative">
                  <iframe
                    className="w-full h-64 md:h-96"
                    src={mainVideo.url}
                    title={mainVideo.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                  ></iframe>
                  <div className="absolute bottom-4 right-4 bg-black/70 px-3 py-1 rounded-full flex items-center">
                    <Clock className="w-4 h-4 mr-1 text-[#4facfe]" />
                    <span className="text-sm">{mainVideo.duration}</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs px-2 py-1 rounded-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-black font-semibold mb-2 inline-block">
                        {mainVideo.category}
                      </span>
                      <h2 className="text-2xl font-bold mt-2">{mainVideo.title}</h2>
                      <p className="text-gray-400 mt-1">Software Development Tutorial</p>
                    </div>
                    <div className="flex items-center">
                      <ThumbsUp className="w-4 h-4 mr-1 text-[#4facfe]" />
                      <span className="text-sm text-gray-300">{mainVideo.likes}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Video Grid */}
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <Play className="w-5 h-5 mr-2 text-[#4facfe]" />
                  More Tech Tutorials
                </h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {filteredVideos.map((video) => (
                    <div
                      key={video.id}
                      className="bg-[#1a1a35] p-3 rounded-lg shadow-lg border border-[#2a2a50] cursor-pointer transition-transform hover:scale-105 hover:shadow-[0_0_15px_rgba(79,172,254,0.3)]"
                      onClick={() => handleVideoClick(video)}
                    >
                      <div className="relative">
                        <iframe
                          className="w-full h-40 rounded-md"
                          src={video.url}
                          title={video.title}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                          allowFullScreen
                        ></iframe>
                        <div className="absolute bottom-2 right-2 bg-black/70 px-2 py-0.5 rounded-full flex items-center">
                          <Clock className="w-3 h-3 mr-1 text-[#4facfe]" />
                          <span className="text-xs">{video.duration}</span>
                        </div>
                        <div className="absolute top-2 left-2 bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-black text-xs px-2 py-0.5 rounded-full">
                          {video.category}
                        </div>
                      </div>
                      <div className="mt-3">
                        <p className="font-semibold text-sm text-white">{video.title}</p>
                        <div className="flex justify-between items-center mt-2 text-xs text-gray-400">
                          <span>{video.category}</span>
                          <div className="flex items-center">
                            <ThumbsUp className="w-3 h-3 mr-1 text-[#4facfe]" />
                            <span>{video.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
            
            {/* Sidebar */}
            <aside className="w-full lg:w-1/4 space-y-6">
              {/* Articles */}
              <div className="bg-[#1a1a35] rounded-lg shadow-lg border border-[#2a2a50]">
                <h3 className="p-4 font-semibold text-lg border-b border-[#2a2a50] flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-[#4facfe]" />
                  Tech Articles
                </h3>
                <ul className="divide-y divide-[#2a2a50]">
                  <li className="p-4 text-sm hover:bg-[#2a2a50]/30 transition-colors">
                    <a href="https://www.freecodecamp.org/news/clean-code-javascript/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4facfe] hover:text-[#00f2fe] transition-colors">
                      `Clean Code Principles in JavaScript`
                    </a>
                    <p className="text-gray-400 mt-1">by FreeCodeCamp • 2.3K Views</p>
                  </li>
                  <li className="p-4 text-sm hover:bg-[#2a2a50]/30 transition-colors">
                    <a href="https://www.smashingmagazine.com/2021/01/build-react-app-typescript/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4facfe] hover:text-[#00f2fe] transition-colors">
                    `Building React Apps with TypeScript`
                    </a>
                    <p className="text-gray-400 mt-1">by SmashingMag • 1.7K Views</p>
                  </li>
                  <li className="p-4 text-sm hover:bg-[#2a2a50]/30 transition-colors">
                    <a href="https://css-tricks.com/modern-css-techniques/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4facfe] hover:text-[#00f2fe] transition-colors">
                      `Modern CSS Techniques to Know in 2023`
                    </a>
                    <p className="text-gray-400 mt-1">by CSS-Tricks • 1.2K Views</p>
                  </li>
                  <li className="p-4 text-sm hover:bg-[#2a2a50]/30 transition-colors">
                    <a href="https://www.digitalocean.com/community/tutorials/how-to-set-up-a-ci-cd-pipeline-with-github-actions" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4facfe] hover:text-[#00f2fe] transition-colors">
                      `Setting Up CI/CD with GitHub Actions`
                    </a>
                    <p className="text-gray-400 mt-1">by DigitalOcean • 1.8K Views</p>
                  </li>
                </ul>
              </div>
              
              {/* Resources */}
              <div className="bg-[#1a1a35] rounded-lg shadow-lg border border-[#2a2a50]">
                <h3 className="p-4 font-semibold text-lg border-b border-[#2a2a50]">Developer Resources</h3>
                <ul className="divide-y divide-[#2a2a50]">
                  {randomResources.map((resource) => (
                    <li key={resource.id} className="p-4 flex items-center text-sm hover:bg-[#2a2a50]/30 transition-colors">
                      <div className="rounded-full p-2 bg-[#2a2a50] mr-3">
                        <Image
                          src={resource.imageUrl}
                          alt={resource.title}
                          className="rounded-full"
                          width={40}
                          height={40}
                        />
                      </div>
                      <div>
                        <a href={resource.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4facfe] hover:text-[#00f2fe] transition-colors">
                          {resource.title}
                        </a>
                        <p className="text-gray-400 mt-1">by {resource.author}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        )}

        {activeTab === "courses" && (
          <div className="mb-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center">
                <Award className="text-[#4facfe] mr-2" />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4facfe] to-[#00f2fe]">
                  Developer Learning Path
                </span>
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
                    <div 
                        key={course.id} 
                        className="bg-[#1a1a35] border border-[#2a2a50] rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_15px_rgba(79,172,254,0.3)] transition-all"
                    >
                    <div className="h-3 bg-gradient-to-r from-[#4facfe] to-[#00f2fe]" style={{ width: `${course.progress ?? 0}%` }}></div>
                    <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <span className="px-3 py-1 bg-[#2a2a50] rounded-full text-xs font-medium">
                        {course.category}
                      </span>
                      <span className="px-3 py-1 bg-[#2a2a50] rounded-full text-xs font-medium">
                        {course.level}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 text-white">{course.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                    
                    <div className="flex justify-between text-sm text-gray-300">
                      <div className="flex items-center">
                        <BookOpen className="w-4 h-4 mr-1 text-[#4facfe]" />
                        <span>{course.lessons} Lessons</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1 text-[#4facfe]" />
                        <span>{course.duration}</span>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                    <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-400">Progress</span>
                    <span className="text-xs text-gray-400">{course.progress ?? 0}%</span>
                    </div>
                    <div className="w-full bg-[#0a0a1f] rounded-full h-2">
                    <div 
                        className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] h-2 rounded-full" 
                        style={{ width: `${course.progress ?? 0}%` }}>
                    </div>
                    </div>
                </div>
                
                <button className="mt-6 w-full py-2 rounded-md bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-black font-semibold hover:opacity-90 transition-opacity">
                    {(course.progress ?? 0) > 0 ? "Continue Learning" : "Start Course"}
                </button>
                </div>
            </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "resources" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Articles Section */}
            <div className="bg-[#1a1a35] rounded-lg shadow-lg border border-[#2a2a50] p-6">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-[#4facfe]" />
                Developer Articles
              </h3>
              <ul className="space-y-4">
                <li className="hover:bg-[#2a2a50]/30 p-3 rounded-lg transition-colors">
                  <a href="https://www.freecodecamp.org/news/microservices-architecture-for-beginners/" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4facfe] hover:text-[#00f2fe] transition-colors">
                    `Microservices Architecture for Beginners`
                  </a>
                  <p className="text-gray-400 mt-1 text-sm">Learn how to design and implement microservices architecture for scalable and maintainable applications.</p>
                  <p className="text-gray-500 mt-2 text-xs">by FreeCodeCamp • 2.3K Views • 10 min read</p>
                </li>
                <li className="hover:bg-[#2a2a50]/30 p-3 rounded-lg transition-colors">
                  <a href="https://web.dev/articles/performance-optimizing-content-efficiency" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4facfe] hover:text-[#00f2fe] transition-colors">
                    `Web Performance Optimization Techniques`
                  </a>
                  <p className="text-gray-400 mt-1 text-sm">Discover how to optimize your web applications for better performance and user experience.</p>
                  <p className="text-gray-500 mt-2 text-xs">by web.dev • 1.7K Views • 8 min read</p>
                </li>
                <li className="hover:bg-[#2a2a50]/30 p-3 rounded-lg transition-colors">
                  <a href="https://martinfowler.com/articles/practical-test-pyramid.html" target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4facfe] hover:text-[#00f2fe] transition-colors">
                    `The Practical Test Pyramid`
                  </a>
                  <p className="text-gray-400 mt-1 text-sm">A comprehensive guide to implementing effective testing strategies for your software projects.</p>
                  <p className="text-gray-500 mt-2 text-xs">by Martin Fowler • 1.2K Views • 12 min read</p>
                </li>
              </ul>
            </div>
            
            {/* Tools Section */}
            <div className="bg-[#1a1a35] rounded-lg shadow-lg border border-[#2a2a50] p-6">
              <h3 className="text-xl font-semibold mb-6">Developer Tools Collection</h3>
              <div className="space-y-4">
                {resources.map((resource) => (
                  <div key={resource.id} className="flex bg-[#2a2a50]/30 p-4 rounded-lg hover:bg-[#2a2a50]/50 transition-colors">
                    <div className="rounded-lg overflow-hidden mr-4 bg-[#2a2a50] p-2">
                      <Image
                        src={resource.imageUrl}
                        alt={resource.title}
                        width={60}
                        height={60}
                        className="rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="font-semibold text-[#4facfe] hover:text-[#00f2fe] transition-colors">
                        {resource.title}
                      </a>
                      <p className="text-gray-400 mt-1 text-sm">Essential reference material for modern software developers to improve coding practices.</p>
                      <div className="flex justify-between items-center mt-2">
                        <p className="text-gray-500 text-xs">by {resource.author}</p>
                        <span className="text-xs px-2 py-1 bg-[#4facfe]/20 text-[#4facfe] rounded-full">
                          Open Source
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                <a href="#" className="block text-center mt-4 text-[#4facfe] hover:text-[#00f2fe] transition-colors text-sm">
                  View All Resources →
                </a>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default TechLearning;