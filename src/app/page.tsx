"use client";
import { useState, useEffect } from "react";
import {
  Github,
  Mail,
  Linkedin,
  ExternalLink,
  ArrowRight,
  Code2,
  Palette,
  Zap,
} from "lucide-react";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "풀스택 이커머스 플랫폼으로 실시간 결제, 재고 관리, 관리자 대시보드를 포함합니다.",
      tech: ["React", "Next.js", "Stripe", "PostgreSQL"],
      demo: "#",
      github: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "AI Chat Application",
      description:
        "OpenAI API를 활용한 실시간 AI 채팅 애플리케이션으로 컨텍스트 기반 대화가 가능합니다.",
      tech: ["TypeScript", "Node.js", "OpenAI", "WebSocket"],
      demo: "#",
      github: "#",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Design System",
      description:
        "재사용 가능한 컴포넌트 라이브러리와 디자인 토큰을 포함한 완전한 디자인 시스템입니다.",
      tech: ["React", "Storybook", "Tailwind", "Figma"],
      demo: "#",
      github: "#",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const skills = [
    { name: "Frontend Development", icon: Code2, level: 90 },
    { name: "UI/UX Design", icon: Palette, level: 85 },
    { name: "Performance Optimization", icon: Zap, level: 88 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
          style={{
            left: `${mousePosition.x - 192}px`,
            top: `${mousePosition.y - 192}px`,
            transform: `translate(-50%, -50%)`,
            transition: "all 0.3s ease-out",
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold">
              YN
            </div>
            <span className="font-bold text-lg">Your Name</span>
          </div>
          <div className="flex gap-8">
            {["Home", "Projects", "Skills", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item.toLowerCase())}
                className={`relative text-sm transition-all ${
                  activeSection === item.toLowerCase()
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500" />
                )}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main className="relative z-10">
        {/* Hero Section */}
        {activeSection === "home" && (
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-6xl w-full">
              <div
                className="space-y-8"
                style={{
                  transform: `translateY(${scrollY * 0.5}px)`,
                  transition: "transform 0.1s",
                }}
              >
                <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
                  <span className="text-sm text-purple-300">안녕하세요</span>
                </div>

                <h1 className="text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                    Pwner
                  </span>
                  <br />
                  <span className="text-white">Hacker</span>
                </h1>

                <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
                  사용자 경험과 아름다운 인터페이스를 중시하는 개발자입니다.
                  혁신적인 아이디어를 실현 가능한 제품으로 만듭니다.
                </p>

                <div className="flex gap-4 pt-4">
                  <button
                    onClick={() => setActiveSection("projects")}
                    className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
                  >
                    프로젝트 보기
                    <ArrowRight
                      size={20}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                  <button
                    onClick={() => setActiveSection("contact")}
                    className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-medium hover:bg-white/10 transition-all"
                  >
                    연락하기
                  </button>
                </div>

                <div className="flex gap-6 pt-8">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <Github size={24} />
                  </a>
                  <a
                    href="mailto:your@email.com"
                    className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <Mail size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <Linkedin size={24} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Projects Section */}
        {activeSection === "projects" && (
          <section className="min-h-screen py-32 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-5xl font-bold mb-4">Featured Projects</h2>
                <p className="text-gray-400 text-lg">
                  제가 작업한 프로젝트들을 소개합니다
                </p>
              </div>

              <div className="grid gap-8">
                {projects.map((project, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}
                    />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-3xl font-bold">{project.title}</h3>
                        <div className="flex gap-3">
                          <a
                            href={project.demo}
                            className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                          >
                            <ExternalLink size={20} />
                          </a>
                          <a
                            href={project.github}
                            className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all"
                          >
                            <Github size={20} />
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-400 mb-6 text-lg">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Skills Section */}
        {activeSection === "skills" && (
          <section className="min-h-screen py-32 px-6">
            <div className="max-w-6xl mx-auto">
              <div className="mb-16">
                <h2 className="text-5xl font-bold mb-4">Skills & Expertise</h2>
                <p className="text-gray-400 text-lg">
                  제가 자신있는 분야들입니다
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-16">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all"
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                        <Icon size={28} />
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{skill.name}</h3>
                      <div className="w-full bg-white/10 rounded-full h-2 mb-2">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-1000"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Tech Stack</h3>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Node.js",
                    "Python",
                    "PostgreSQL",
                    "MongoDB",
                    "Docker",
                    "AWS",
                    "Figma",
                    "Git",
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 transition-all"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        {activeSection === "contact" && (
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl w-full">
              <div className="text-center mb-16">
                <h2 className="text-6xl font-bold mb-6">Let's Work Together</h2>
                <p className="text-xl text-gray-400">
                  새로운 프로젝트나 협업에 관심이 있으시다면 언제든 연락주세요
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <a
                  href="mailto:your@email.com"
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Mail size={32} />
                  </div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-gray-400 text-sm">your@email.com</p>
                </a>

                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Github size={32} />
                  </div>
                  <h3 className="font-bold mb-2">GitHub</h3>
                  <p className="text-gray-400 text-sm">@yourusername</p>
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Linkedin size={32} />
                  </div>
                  <h3 className="font-bold mb-2">LinkedIn</h3>
                  <p className="text-gray-400 text-sm">Your Profile</p>
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
