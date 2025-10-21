"use client";
import { useState, useEffect } from "react";
import {
  Github,
  Mail,
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

// 첫 번째 useEffect - 마우스 움직임
useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
  };
}, []);

// 두 번째 useEffect - 스크롤
useEffect(() => {
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);
  

  const projects = [
    {
      title: "HACK-IN",
      description:
        "CTF 학습에 어려움을 느끼는 초보자들을 위한 웹 기반 CTF 플랫폼입니다.",
      tech: ["Pwnable", "C", "Docker", "AWS"],
      demo: "#",
      github: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "심전도 측정 AI를 통한 질병 예방 프로그램",
      description:
        "Python의 AI도구를 사용해 심전도 그래프를 분석하여 잠재적 심장 질환을 예측하는 프로그램입니다. Intel AI for Youth 한국 대표 3팀에 선정되었습니다.",
      tech: ["Pyhton", "Jupiter", "AI", "Machine Learning"],
      demo: "#",
      github: "#",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "JBU CTF Admin at 2025",
      description:
        "중부대학교 정보보호학과에서 개최하는 2025 JBU CTF 운영 및 문제 제작을 맡았습니다.",
      tech: ["C", "Pwnable", "Docker", "AWS"],
      demo: "#",
      github: "#",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  const skills = [
    { name: "C Dev", icon: Code2, level: 45 },
    { name: "Exploit Binary", icon: Palette, level: 85 },
    { name: "Educate", icon: Zap, level: 88 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white relative overflow-hidden">
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

      <nav className="fixed top-0 w-full bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center font-bold">
              Py0
            </div>
            <span className="font-bold text-lg">Pwny0</span>
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
                  중부대학교 24학번 김민준입니다.
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
                    href="mailto:alhabhonggu@email.com"
                    className="p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-white/20 transition-all"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

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
                    "C",
                    "Python",
                    "Assembly",
                    "Pwnable",
                    "Docker",
                    "AWS", // Changed 'Python' to 'AWS' to avoid redundancy and match project stack
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

        {activeSection === "contact" && (
          <section className="min-h-screen flex items-center justify-center px-6">
            <div className="max-w-4xl w-full">
              <div className="text-center mb-16">
                <h2 className="text-6xl font-bold mb-6">Let&apos;s Work Together</h2>
                <p className="text-xl text-gray-400">
                  새로운 프로젝트나 협업에 관심이 있으시다면 언제든 연락주세요
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <a
                  href="mailto:alhabhonggu@email.com"
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Mail size={32} />
                  </div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-gray-400 text-sm">alhabhonggu@email.com</p>
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
                  <p className="text-gray-400 text-sm">@honguu-ai</p>
                </a>

                {/* Placeholder for a third contact option (e.g., LinkedIn or a website) */}
                <a
                  href="https://f-pwny0.tistory.com/"
                  className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all text-center"
                >
                  <div className="w-16 h-16 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <ExternalLink size={32} className="text-gray-400 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-bold mb-2">Blog</h3>
                  <p className="text-gray-400 text-sm">https://f-pwny0.tistory.com/</p>
                </a>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
