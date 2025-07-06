"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import {
  Copy,
  Download,
  User,
  Link,
  Code,
  BarChart3,
  Target,
  Sparkles,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Globe,
  BookOpen,
  Check,
  X,
  Instagram,
  Youtube,
  MessageCircle,
  ImageIcon,
} from "lucide-react"
import ReactMarkdown from "react-markdown"
import rehypeRaw from "rehype-raw"

export default function GitHubReadmeGenerator() {
  const [currentStep, setCurrentStep] = useState(0)
  const [generatedMarkdown, setGeneratedMarkdown] = useState("")
  const [showPreview, setShowPreview] = useState(false)
  const [previewTab, setPreviewTab] = useState("rendered")

  const stepsContainerRef = useRef(null)

  const handleWheel = (e) => {
    // Only apply on small screens (mobile/tablet)
    if (window.innerWidth < 768 && stepsContainerRef.current) {
      e.preventDefault()
      stepsContainerRef.current.scrollLeft += e.deltaY
    }
  }

  // All available technologies with actual icons/logos
  const technologies = {
    frontend: [
      {
        name: "React",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
      },
      {
        name: "Vue.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
      },
      {
        name: "Angular",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/angularjs/angularjs-original.svg",
      },
      {
        name: "HTML5",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
      },
      { name: "CSS3", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" },
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      { name: "Sass", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" },
      { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
      {
        name: "Bootstrap",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain.svg",
      },
      { name: "Next.js", icon: "https://cdn.worldvectorlogo.com/logos/nextjs-2.svg" },
      { name: "Nuxt.js", icon: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg" },
    ],
    backend: [
      {
        name: "Node.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
      },
      { name: "Django", icon: "https://cdn.worldvectorlogo.com/logos/django.svg" },
      {
        name: "Flask",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
      },
      { name: "Spring Boot", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
      {
        name: "Laravel",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/laravel/laravel-original.svg",
      },
      {
        name: "Ruby on Rails",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rails/rails-original-wordmark.svg",
      },
      {
        name: "ASP.NET",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original.svg",
      },
      { name: "FastAPI", icon: "https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png" },
      {
        name: "NestJS",
        icon: "https://nestjs.com/img/logo-small.svg",
      },
    ],
    languages: [
      {
        name: "JavaScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
      },
      {
        name: "Python",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
      },
      { name: "Java", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" },
      {
        name: "C++",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
      },
      {
        name: "C#",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/csharp/csharp-original.svg",
      },
      { name: "Go", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/go/go-original.svg" },
      { name: "Rust", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg" },
      { name: "PHP", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg" },
      { name: "Ruby", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" },
      {
        name: "Swift",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/swift/swift-original.svg",
      },
      { name: "Kotlin", icon: "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg" },
    ],
    databases: [
      {
        name: "MongoDB",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
      },
      {
        name: "PostgreSQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
      },
      {
        name: "Redis",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
      },
      { name: "SQLite", icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg" },
      { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
      { name: "Supabase", icon: "https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg" },
    ],
    tools: [
      { name: "Git", icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" },
      {
        name: "Docker",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
      },
      { name: "Kubernetes", icon: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg" },
      {
        name: "AWS",
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      },
      { name: "Google Cloud", icon: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
      { name: "Azure", icon: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
      { name: "Vercel", icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg" },
      { name: "Netlify", icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg" },
      { name: "VS Code", icon: "https://www.vectorlogo.zone/logos/visualstudio_code/visualstudio_code-icon.svg" },
      { name: "Figma", icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg" },
    ],
  }

  // Comprehensive GIFs collection organized by categories
  const gifsCollection = {
    workCulture: [
      {
        name: "Multitasking",
        url: "https://user-images.githubusercontent.com/74038190/213910842-5a320d6b-e48f-4d41-a901-0e6a357e8dae.gif",
        description: "Multitasking developer",
      },
      {
        name: "Old Man Working",
        url: "https://user-images.githubusercontent.com/74038190/212746035-d5c61762-973c-44c0-aec7-887f3b7690e3.gif",
        description: "Experienced developer",
      },
      {
        name: "Client Vs Designer",
        url: "https://user-images.githubusercontent.com/74038190/212747919-84b68444-0d81-46db-a338-7ec50e9dd4cd.gif",
        description: "Client vs Designer",
      },
      {
        name: "Action Packed",
        url: "https://user-images.githubusercontent.com/74038190/235224431-e8c8c12e-6826-47f1-89fb-2ddad83b3abf.gif",
        description: "Action packed coding",
      },
      {
        name: "Self Management",
        url: "https://user-images.githubusercontent.com/74038190/236119160-976a0405-caa7-470c-9356-16d43402ea0a.gif",
        description: "Self management",
      },
      {
        name: "Animated Laptop Banner",
        url: "https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/80728820-e06b-4f96-9c9e-9df46f0cc0a5",
        description: "Animated laptop banner",
      },
      {
        name: "Girl Typing",
        url: "https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/85cb9521-97c0-4a65-9358-7db8099fac7f",
        description: "Girl typing on laptop",
      },
      {
        name: "Mario",
        url: "https://user-images.githubusercontent.com/74038190/225813708-98b745f2-7d22-48cf-9150-083f1b00d6c9.gif",
        description: "Mario coding",
      },
      {
        name: "Happy Coder",
        url: "https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/3b4607a1-1cc6-41f1-926f-892ae880e7a5",
        description: "Happy coder",
      },
      {
        name: "Curious Tech Geek",
        url: "https://user-images.githubusercontent.com/74038190/212747903-e9bdf048-2dc8-41f9-b973-0e72ff07bfba.gif",
        description: "Curious tech geek",
      },
      {
        name: "Night Chill",
        url: "https://user-images.githubusercontent.com/74038190/212748830-4c709398-a386-4761-84d7-9e10b98fbe6e.gif",
        description: "Night coding session",
      },
      {
        name: "Deep Thinking",
        url: "https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/8aa99f6c-267d-4977-9cd3-1a4c11675863",
        description: "Deep thinking",
      },
      {
        name: "Modern Work Environment",
        url: "https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/9d0fd0c4-5c7f-4122-b884-64a1e1685d2d",
        description: "Modern work environment",
      },
      {
        name: "Coding Vibe",
        url: "https://user-images.githubusercontent.com/74038190/212749447-bfb7e725-6987-49d9-ae85-2015e3e7cc41.gif",
        description: "Coding vibe",
      },
      {
        name: "Development Time",
        url: "https://user-images.githubusercontent.com/74038190/212749171-b84692a8-2b04-4e3b-93ca-ac14705da224.gif",
        description: "Development time",
      },
    ],
    funAndExtra: [
      {
        name: "Let's Catch",
        url: "https://user-images.githubusercontent.com/74038190/212747107-5b654ba5-31c6-4366-b42b-51b822e9bc52.gif",
        description: "Let's catch",
      },
      {
        name: "Pacman",
        url: "https://user-images.githubusercontent.com/74038190/212284158-e840e285-664b-44d7-b79b-e264b5e54825.gif",
        description: "Pacman game",
      },
      {
        name: "Cool Fire",
        url: "https://user-images.githubusercontent.com/74038190/213911110-aedbef38-a29f-4b6b-a65c-11608b4f75a5.gif",
        description: "Cool fire animation",
      },
      {
        name: "Code the Cool Stuff",
        url: "https://user-images.githubusercontent.com/74038190/212284068-b4ee9a5c-331c-4d18-9481-53dd6b9debd5.gif",
        description: "Code the cool stuff",
      },
      {
        name: "Skills",
        url: "https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif",
        description: "Skills animation",
      },
      {
        name: "Dinosaur Game",
        url: "https://user-images.githubusercontent.com/74038190/212284136-03988914-d899-44b4-b1d9-4eeccf656e44.gif",
        description: "Chrome dinosaur game",
      },
      {
        name: "Keep Moving Forward",
        url: "https://user-images.githubusercontent.com/74038190/236544207-c4f427b3-be04-4cfe-a3d2-2eabb0d2de73.gif",
        description: "Keep moving forward",
      },
      {
        name: "Hello World",
        url: "https://user-images.githubusercontent.com/74038190/226190894-18e959ba-d458-4a94-ac44-790190f2a947.gif",
        description: "Hello world in multiple languages",
      },
      {
        name: "Coffee Working",
        url: "https://user-images.githubusercontent.com/74038190/212284119-fbfd994d-8c2a-4a07-a75f-84e513833c1c.gif",
        description: "Coffee while working",
      },
      {
        name: "Ultra Fast Typing Cat",
        url: "https://user-images.githubusercontent.com/74038190/212284145-bf2c01a8-c448-4f1a-b911-996024c84606.gif",
        description: "Ultra fast typing cat",
      },
      {
        name: "Eat Sleep Code Repeat",
        url: "https://user-images.githubusercontent.com/74038190/212747657-7a8d59da-69c8-4110-8ea8-f8102fd0b413.gif",
        description: "Eat sleep code repeat",
      },
      {
        name: "Error 404",
        url: "https://user-images.githubusercontent.com/74038190/212897597-fd4c1add-ec1c-4669-9a8d-c37aaaf19044.gif",
        description: "Error 404",
      },
    ],
    programming: [
      {
        name: "Automatic Typing",
        url: "https://user-images.githubusercontent.com/74038190/212749168-86d6c7ab-98da-409b-998f-c5b74721badd.gif",
        description: "Automatic typing",
      },
      {
        name: "Designer Vs Developer",
        url: "https://user-images.githubusercontent.com/74038190/212749443-0810e511-4f46-4492-96aa-3c110d7bc41a.gif",
        description: "Designer vs Developer",
      },
      {
        name: "Typing",
        url: "https://user-images.githubusercontent.com/74038190/212751381-b0b2320e-6ef6-4041-a77a-de279fe5d3ae.gif",
        description: "Typing animation",
      },
      {
        name: "Pro Coder",
        url: "https://user-images.githubusercontent.com/74038190/212751818-13da6fd2-27ca-45c4-9c64-3940ccfa6fd3.gif",
        description: "Pro coder",
      },
      {
        name: "Hi There",
        url: "https://user-images.githubusercontent.com/74038190/213760705-0d5bf320-4f43-4352-b74b-0889ae726bf7.gif",
        description: "Hi there greeting",
      },
      {
        name: "She Codes",
        url: "https://user-images.githubusercontent.com/74038190/213760677-e45ca5f7-d1aa-4c2c-91e0-573819287304.gif",
        description: "She codes",
      },
      {
        name: "Working Girl",
        url: "https://user-images.githubusercontent.com/74038190/216644487-64767dbf-3ffd-4a5a-bb44-88f07ea5a31c.gif",
        description: "Working girl with 6 hands",
      },
      {
        name: "Web Development",
        url: "https://github.com/Anmol-Baranwal/Cool-GIFs-For-GitHub/assets/74038190/72903324-cf57-4e90-80a6-ed3c9734e0ed",
        description: "Web development banner",
      },
      {
        name: "Android Developer",
        url: "https://user-images.githubusercontent.com/74038190/215768208-3bf3dda8-eeea-40ee-a58b-f5ac529685bf.gif",
        description: "Android developer challenge",
      },
      {
        name: "JavaScript Boss",
        url: "https://user-images.githubusercontent.com/74038190/213910845-af37a709-8995-40d6-be59-724526e3c3d7.gif",
        description: "JavaScript is the boss",
      },
    ],
    workingStickers: [
      {
        name: "Working Sticker 1",
        url: "https://user-images.githubusercontent.com/74038190/216649417-9acc58df-9186-4132-ad43-819a57babb67.gif",
        description: "Cute working sticker",
      },
      {
        name: "Working Sticker 2",
        url: "https://user-images.githubusercontent.com/74038190/216649421-9e9387cc-b2d3-4375-97e2-f4c43373d3ae.gif",
        description: "Cute working sticker",
      },
      {
        name: "Working Sticker 3",
        url: "https://user-images.githubusercontent.com/74038190/216649426-0c2ee152-84d8-4707-85c4-27a378d2f78a.gif",
        description: "Cute working sticker",
      },
      {
        name: "Working Sticker 4",
        url: "https://user-images.githubusercontent.com/74038190/216649430-0a912dae-e61b-45cf-8f65-895bd6444f3a.gif",
        description: "Cute working sticker",
      },
      {
        name: "Working Sticker 5",
        url: "https://user-images.githubusercontent.com/74038190/216649436-05c6a71a-0566-45aa-bc3f-f258ab12e491.gif",
        description: "Cute working sticker",
      },
      {
        name: "Working Sticker 6",
        url: "https://user-images.githubusercontent.com/74038190/216649441-c7a4d602-5d9b-4c5b-99d4-697bddf6f8e0.gif",
        description: "Cute working sticker",
      },
    ],
  }

  // Social media platforms with icons
  const socialPlatforms = [
    { key: "github", name: "GitHub", icon: Github, placeholder: "https://github.com/username" },
    { key: "linkedin", name: "LinkedIn", icon: Linkedin, placeholder: "https://linkedin.com/in/username" },
    { key: "twitter", name: "Twitter", icon: Twitter, placeholder: "https://twitter.com/username" },
    { key: "instagram", name: "Instagram", icon: Instagram, placeholder: "https://instagram.com/username" },
    { key: "youtube", name: "YouTube", icon: Youtube, placeholder: "https://youtube.com/@username" },
    { key: "email", name: "Email", icon: Mail, placeholder: "your.email@example.com" },
    { key: "portfolio", name: "Portfolio", icon: Globe, placeholder: "https://yourportfolio.com" },
    { key: "devto", name: "Dev.to", icon: BookOpen, placeholder: "https://dev.to/username" },
    { key: "medium", name: "Medium", icon: BookOpen, placeholder: "https://medium.com/@username" },
    { key: "discord", name: "Discord", icon: MessageCircle, placeholder: "username#1234" },
  ]

  // State
  const [profile, setProfile] = useState({
    name: "",
    bio: "",
    location: "",
    githubUsername: "",
    bannerGif: "",
    aboutGif: "",
    socialLinks: {},
    selectedTechs: [],
    projects: [
      {
        name: "",
        description: "",
        githubLink: "",
        demoLink: "",
        technologies: [],
      },
    ],
    aboutPoints: [
      { emoji: "🔭", text: "", placeholder: "I'm currently working on..." },
      { emoji: "🌱", text: "", placeholder: "I'm currently learning..." },
      { emoji: "👯", text: "", placeholder: "I'm looking to collaborate on..." },
      { emoji: "🤔", text: "", placeholder: "I'm looking for help with..." },
      { emoji: "💬", text: "", placeholder: "Ask me about..." },
      { emoji: "📫", text: "", placeholder: "How to reach me..." },
      { emoji: "⚡", text: "", placeholder: "Fun fact..." },
    ],
    extras: {
      showTrophies: false,
      showVisitorCounter: false,
      showTypingAnimation: false,
    },
    githubStats: {
      showStats: true,
      showStreak: true,
      showLanguages: true,
    },
  })

  const steps = [
    { title: "Profile Info", icon: User },
    { title: "Social Links", icon: Link },
    { title: "Tech Stack", icon: Code },
    { title: "GIFs Gallery", icon: Sparkles },
    { title: "About Me", icon: Target },
    { title: "Extras", icon: Sparkles },
  ]

  const toggleTech = (tech) => {
    setProfile((prev) => ({
      ...prev,
      selectedTechs: prev.selectedTechs.find((t) => t.name === tech.name)
        ? prev.selectedTechs.filter((t) => t.name !== tech.name)
        : [...prev.selectedTechs, tech],
    }))
  }

  const addProject = () => {
    setProfile((prev) => ({
      ...prev,
      projects: [
        ...prev.projects,
        {
          name: "",
          description: "",
          githubLink: "",
          demoLink: "",
          technologies: [],
        },
      ],
    }))
  }

  const removeProject = (index) => {
    setProfile((prev) => ({
      ...prev,
      projects: prev.projects.filter((_, i) => i !== index),
    }))
  }

  const updateProject = (index, field, value) => {
    setProfile((prev) => ({
      ...prev,
      projects: prev.projects.map((project, i) => (i === index ? { ...project, [field]: value } : project)),
    }))
  }

  const updateAboutPoint = (index, text) => {
    setProfile((prev) => ({
      ...prev,
      aboutPoints: prev.aboutPoints.map((point, i) => (i === index ? { ...point, text } : point)),
    }))
  }

  const generateMarkdown = () => {
    let markdown = ""

    // Banner GIF
    if (profile.bannerGif) {
      markdown += `<!-- 🔝 Banner GIF -->\n<div align="center">\n  <img src="${profile.bannerGif}" width="100%" style="max-width:900px;" />\n</div>\n\n`
    }

    // Typing Animation
    if (profile.extras.showTypingAnimation && profile.name) {
      markdown += `<!-- ✨ Typing Animation -->\n<p align="center">\n  <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Code&pause=1000&color=2196F3&center=true&vCenter=true&width=1000&lines=Hi+%F0%9F%91%8B%2C+I'm+${encodeURIComponent(profile.name)};${encodeURIComponent(profile.bio || "")};Welcome+to+my+GitHub+profile!" alt="Typing SVG" width="100%" />\n</p>\n\n`
    }

    // About GIF (right aligned)
    if (profile.aboutGif) {
      markdown += `<!-- 👨‍💻 Coding GIF (right aligned) -->\n<img align="right" alt="coding" width="450" src="${profile.aboutGif}">\n\n`
    }

    // Visitor Counter
    if (profile.extras.showVisitorCounter && profile.githubUsername) {
      markdown += `<p align="left"> \n  <img src="https://komarev.com/ghpvc/?username=${profile.githubUsername}&label=Profile%20views&color=0e75b6&style=flat" alt="${profile.githubUsername}" /> \n</p>\n\n`
    }

    // About Points
    const filledPoints = profile.aboutPoints.filter((point) => point.text.trim())
    if (filledPoints.length > 0) {
      filledPoints.forEach((point) => {
        markdown += `- ${point.emoji} ${point.text}  \n`
      })
      markdown += "\n"
    }

    // Social Links
    const socialEntries = Object.entries(profile.socialLinks).filter(([_, value]) => value)
    if (socialEntries.length > 0) {
      markdown += `<h3 align="left">Connect with me:</h3>\n<p align="left">\n`
      socialEntries.forEach(([platform, link]) => {
        const platformData = {
          github: { name: "github", icon: "github.svg" },
          linkedin: { name: "linkedin", icon: "linked-in-alt.svg" },
          twitter: { name: "twitter", icon: "twitter.svg" },
          instagram: { name: "instagram", icon: "instagram.svg" },
          youtube: { name: "youtube", icon: "youtube.svg" },
          devto: { name: "dev-to", icon: "dev-to.svg" },
          medium: { name: "medium", icon: "medium.svg" },
          discord: { name: "discord", icon: "discord.svg" },
          portfolio: { name: "portfolio", icon: "globe.svg" },
        }
        const data = platformData[platform]
        if (data) {
          markdown += `<a href="${link}" target="blank"><img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/${data.icon}" alt="${data.name}" height="30" width="40" /></a>\n`
        }
      })
      markdown += `</p>\n\n`
    }

    // Languages and Tools (shields.io badges)
    if (profile.selectedTechs.length > 0) {
      markdown += `### Languages and Tools:\n`
      profile.selectedTechs.forEach((tech) => {
        // Generate shields.io badge for each tech
        const badgeName = tech.name
          .replace(/\./g, "")
          .replace(/\+/g, "plusplus")
          .replace(/#/g, "sharp")
          .replace(/\s+/g, "")
          .toLowerCase()
        markdown += `![${tech.name}](https://img.shields.io/badge/${encodeURIComponent(
          tech.name.replace(/\s+/g, "_"),
        )}-%23007ACC?style=for-the-badge&logo=${badgeName}&logoColor=white) `
      })
      markdown += `\n\n`
    }

    // GitHub Stats
    if (
      profile.githubUsername &&
      (profile.githubStats.showStats || profile.githubStats.showStreak || profile.githubStats.showLanguages)
    ) {
      markdown += `<h3 align="left">📊 GitHub Stats:</h3>\n<p>\n`
      if (profile.githubStats.showStats) {
        markdown += `  <img width="48%" src="https://github-readme-stats.vercel.app/api?username=${profile.githubUsername}&show_icons=true&locale=en" />\n`
      }
      if (profile.githubStats.showLanguages) {
        markdown += `  <img width="48%" src="https://github-readme-stats.vercel.app/api/top-langs?username=${profile.githubUsername}&show_icons=true&locale=en&layout=compact" />\n`
      }
      markdown += `</p>\n\n`
      if (profile.githubStats.showStreak) {
        markdown += `<p align="center">\n  <img src="https://github-readme-streak-stats.herokuapp.com/?user=${profile.githubUsername}&" alt="${profile.githubUsername}" />\n</p>\n\n`
      }
    }

    // GitHub Trophies
    if (profile.extras.showTrophies && profile.githubUsername) {
      markdown += `<h3 align="left">🏆 GitHub Trophies:</h3>\n<p align="left">\n  <img src="https://github-profile-trophy.vercel.app/?username=${profile.githubUsername}" alt="${profile.githubUsername}" />\n</p>\n\n`
    }

    setGeneratedMarkdown(markdown)
    setShowPreview(true)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedMarkdown)
    alert("Markdown copied to clipboard!")
  }

  const downloadMarkdown = () => {
    const element = document.createElement("a")
    const file = new Blob([generatedMarkdown], { type: "text/markdown" })
    element.href = URL.createObjectURL(file)
    element.download = "README.md"
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Profile Info
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Let's build your developer profile
              </h2>
              <p className="text-gray-400 text-sm md:text-base">Start with your basic information</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8">
              <Card className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <User className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-base md:text-lg">Personal Details</h3>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Your Name</label>
                    <Input
                      value={profile.name}
                      onChange={(e) => setProfile((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="Enter name"
                      className="text-base md:text-lg border-blue-300 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio / Tagline</label>
                    <Input
                      value={profile.bio}
                      onChange={(e) => setProfile((prev) => ({ ...prev, bio: e.target.value }))}
                      placeholder="Full Stack Developer passionate about creating amazing experiences"
                      className="text-base md:text-lg border-blue-300 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                    <Input
                      value={profile.location}
                      onChange={(e) => setProfile((prev) => ({ ...prev, location: e.target.value }))}
                      placeholder="Enter your location"
                      className="text-base md:text-lg border-blue-300 focus:border-blue-500"
                    />
                  </div>
                </div>
              </Card>

              <Card className="p-4 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-purple-600 rounded-full flex items-center justify-center">
                      <Github className="w-3 h-3 md:w-4 md:h-4 text-white" />
                    </div>
                    <h3 className="font-semibold text-base md:text-lg">GitHub Username</h3>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Username</label>
                    <Input
                      value={profile.githubUsername}
                      onChange={(e) => setProfile((prev) => ({ ...prev, githubUsername: e.target.value }))}
                      placeholder="Enter Github Username"
                      className="text-base md:text-lg border-purple-300 focus:border-purple-500"
                    />
                    <p className="text-xs md:text-sm text-gray-500 mt-2">
                      This will be used for GitHub stats and profile links
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        )

      case 1: // Social Links
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-2">
                Connect your social presence
              </h2>
              <p className="text-gray-400 text-sm md:text-base">Add your social media and professional links</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
              {socialPlatforms.map(({ key, name, icon: Icon, placeholder }) => (
                <Card
                  key={key}
                  className="p-3 md:p-4 hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    <h3 className="font-medium text-base md:text-lg">{name}</h3>
                  </div>
                  <Input
                    value={profile.socialLinks[key] || ""}
                    onChange={(e) =>
                      setProfile((prev) => ({
                        ...prev,
                        socialLinks: { ...prev.socialLinks, [key]: e.target.value },
                      }))
                    }
                    placeholder={placeholder}
                    className="border-blue-200 focus:border-blue-500 text-sm md:text-base"
                  />
                </Card>
              ))}
            </div>
          </div>
        )

      case 2: // Tech Stack
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Choose your tech arsenal
              </h2>
              <p className="text-gray-400 text-sm md:text-base">Select the technologies you work with</p>
            </div>

            <div className="mb-6">
              <h3 className="text-white text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
                <div className="w-5 h-5 md:w-6 md:h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                Selected Technologies ({profile.selectedTechs.length})
              </h3>
              <div className="flex flex-wrap gap-2 md:gap-3 min-h-[80px] p-4 md:p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-blue-300">
                {profile.selectedTechs.length === 0 ? (
                  <p className="text-gray-500 italic text-center w-full text-sm md:text-base">
                    🚀 No technologies selected yet. Click on the icons below to add them to your arsenal!
                  </p>
                ) : (
                  profile.selectedTechs.map((tech, index) => (
                    <div
                      key={index}
                      className="bg-white border-2 border-blue-200 rounded-lg p-2 md:p-3 flex items-center gap-2 md:gap-3 shadow-sm hover:shadow-md transition-shadow"
                    >
                      <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-6 h-6 md:w-8 md:h-8" />
                      <span className="font-medium text-gray-700 text-sm md:text-base">{tech.name}</span>
                      <button
                        onClick={() => toggleTech(tech)}
                        className="ml-1 md:ml-2 hover:bg-red-100 rounded-full p-1 transition-colors"
                      >
                        <X className="w-3 h-3 md:w-4 md:h-4 text-red-500" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            {Object.entries(technologies).map(([category, techs]) => (
              <Card key={category} className="p-4 md:p-6 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 capitalize flex items-center gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Code className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  {category === "frontend"
                    ? "Frontend Technologies"
                    : category === "backend"
                      ? "Backend Technologies"
                      : category === "languages"
                        ? "Programming Languages"
                        : category === "databases"
                          ? "Databases"
                          : "Tools & Platforms"}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4">
                  {techs.map((tech) => {
                    const isSelected = profile.selectedTechs.some((t) => t.name === tech.name)
                    return (
                      <button
                        key={tech.name}
                        onClick={() => toggleTech(tech)}
                        className={`group p-3 md:p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                          isSelected
                            ? "border-blue-500 bg-blue-50 shadow-lg ring-2 ring-blue-200"
                            : "border-gray-200 hover:border-gray-300 bg-white hover:shadow-md"
                        }`}
                      >
                        <div className="flex flex-col items-center gap-2">
                          <img
                            src={tech.icon || "/placeholder.svg"}
                            alt={tech.name}
                            className="w-8 h-8 md:w-12 md:h-12 group-hover:scale-110 transition-transform"
                          />
                          <div className="text-xs font-medium text-gray-700 text-center">{tech.name}</div>
                          {isSelected && (
                            <div className="w-4 h-4 md:w-5 md:h-5 bg-blue-500 rounded-full flex items-center justify-center">
                              <Check className="w-2 h-2 md:w-3 md:h-3 text-white" />
                            </div>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </Card>
            ))}
          </div>
        )

      case 3: // GIFs Gallery
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2">
                Choose your perfect GIFs
              </h2>
              <p className="text-gray-400 text-sm md:text-base">
                Select a banner GIF and an about me GIF for your profile
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 mb-6">
              {/* Banner GIF Selection */}
              <Card className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <ImageIcon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  Banner GIF (Top of README)
                </h3>
                <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border-2 border-dashed border-blue-300 min-h-[120px] md:min-h-[150px] flex items-center justify-center">
                  {profile.bannerGif ? (
                    <div className="text-center">
                      <img
                        src={profile.bannerGif || "/placeholder.svg"}
                        alt="Banner GIF"
                        className="max-w-full max-h-24 md:max-h-32 rounded-lg shadow-lg mx-auto mb-2"
                      />
                      <Button
                        onClick={() => setProfile((prev) => ({ ...prev, bannerGif: "" }))}
                        variant="outline"
                        size="sm"
                        className="border-red-300 text-red-600 hover:bg-red-50 text-xs md:text-sm"
                      >
                        <X className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic text-center text-sm md:text-base">🎬 No banner GIF selected</p>
                  )}
                </div>
              </Card>

              {/* About GIF Selection */}
              <Card className="p-4 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <h3 className="text-lg md:text-xl font-semibold mb-3 flex items-center gap-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-purple-500 rounded-full flex items-center justify-center">
                    <Target className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  About Me GIF (Side of About)
                </h3>
                <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-purple-50 rounded-xl border-2 border-dashed border-purple-300 min-h-[120px] md:min-h-[150px] flex items-center justify-center">
                  {profile.aboutGif ? (
                    <div className="text-center">
                      <img
                        src={profile.aboutGif || "/placeholder.svg"}
                        alt="About GIF"
                        className="max-w-full max-h-24 md:max-h-32 rounded-lg shadow-lg mx-auto mb-2"
                      />
                      <Button
                        onClick={() => setProfile((prev) => ({ ...prev, aboutGif: "" }))}
                        variant="outline"
                        size="sm"
                        className="border-red-300 text-red-600 hover:bg-red-50 text-xs md:text-sm"
                      >
                        <X className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <p className="text-gray-500 italic text-center text-sm md:text-base">🎭 No about GIF selected</p>
                  )}
                </div>
              </Card>
            </div>

            {Object.entries(gifsCollection).map(([category, gifs]) => (
              <Card key={category} className="p-4 md:p-6 bg-gradient-to-br from-white to-gray-50">
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 capitalize flex items-center gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  {category === "workCulture"
                    ? "Work Culture & Coding"
                    : category === "funAndExtra"
                      ? "Fun & Extra"
                      : category === "programming"
                        ? "Programming & Development"
                        : "Working Stickers"}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3 md:gap-4">
                  {gifs.map((gif, index) => {
                    const isBannerSelected = profile.bannerGif === gif.url
                    const isAboutSelected = profile.aboutGif === gif.url
                    return (
                      <div key={index} className="group relative">
                        <div
                          className={`rounded-xl border-2 transition-all duration-300 hover:scale-105 overflow-hidden ${
                            isBannerSelected || isAboutSelected
                              ? "border-purple-500 bg-purple-50 shadow-lg ring-2 ring-purple-200"
                              : "border-gray-200 hover:border-gray-300 bg-white hover:shadow-md"
                          }`}
                        >
                          <div className="aspect-square">
                            <img
                              src={gif.url || "/placeholder.svg"}
                              alt={gif.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                            {(isBannerSelected || isAboutSelected) && (
                              <div className="absolute top-2 right-2 w-5 h-5 md:w-6 md:h-6 bg-purple-500 rounded-full flex items-center justify-center">
                                <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                              </div>
                            )}
                          </div>
                          <div className="p-2 bg-white/90 backdrop-blur-sm">
                            <div className="text-xs font-medium text-gray-700 text-center truncate">{gif.name}</div>
                          </div>
                        </div>

                        {/* Selection buttons */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-1 md:gap-2">
                          <Button
                            onClick={() => setProfile((prev) => ({ ...prev, bannerGif: gif.url }))}
                            size="sm"
                            className="bg-blue-600 hover:bg-blue-700 text-white text-xs px-2 py-1"
                          >
                            Banner
                          </Button>
                          <Button
                            onClick={() => setProfile((prev) => ({ ...prev, aboutGif: gif.url }))}
                            size="sm"
                            className="bg-purple-600 hover:bg-purple-700 text-white text-xs px-2 py-1"
                          >
                            About
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </Card>
            ))}
          </div>
        )

      case 4: // About Me
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                Tell your story
              </h2>
              <p className="text-gray-400 text-sm md:text-base">Add bullet points about yourself with emojis</p>
            </div>

            <Card className="p-4 md:p-6 bg-gradient-to-br from-orange-50 to-yellow-50 border-orange-200">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-3">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                  <Target className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                About Me Points
              </h3>
              <div className="space-y-3 md:space-y-4">
                {profile.aboutPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-white rounded-lg border border-orange-200"
                  >
                    <div className="text-xl md:text-2xl">{point.emoji}</div>
                    <Input
                      value={point.text}
                      onChange={(e) => updateAboutPoint(index, e.target.value)}
                      placeholder={point.placeholder}
                      className="flex-1 border-orange-200 focus:border-orange-500 text-sm md:text-base"
                    />
                  </div>
                ))}
              </div>
              <div className="mt-4 md:mt-6 p-3 md:p-4 bg-orange-100 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">💡 Examples:</h4>
                <ul className="text-xs md:text-sm text-orange-700 space-y-1">
                  <li>🔭 I'm currently working on a React Native mobile app</li>
                  <li>🌱 I'm currently learning Machine Learning and AI</li>
                  <li>💬 Ask me about Web Development, React, and Node.js</li>
                  <li>📫 How to reach me: your.email@example.com</li>
                </ul>
              </div>
            </Card>
          </div>
        )

      case 5: // Extras
        return (
          <div className="space-y-6">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                Add some extra magic
              </h2>
              <p className="text-gray-400 text-sm md:text-base">Customize your profile with special features</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              <Card className="p-4 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200">
                <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <BarChart3 className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  GitHub Stats
                </h3>
                <div className="space-y-3">
                  {[
                    { key: "showStats", label: "GitHub Stats", desc: "Show your contribution stats" },
                    { key: "showStreak", label: "Streak Stats", desc: "Display your commit streak" },
                    { key: "showLanguages", label: "Language Stats", desc: "Show your top languages" },
                  ].map(({ key, label, desc }) => (
                    <label
                      key={key}
                      className="flex items-start space-x-3 p-3 border border-purple-200 rounded-lg cursor-pointer hover:bg-purple-50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={profile.githubStats[key]}
                        onChange={(e) =>
                          setProfile((prev) => ({
                            ...prev,
                            githubStats: { ...prev.githubStats, [key]: e.target.checked },
                          }))
                        }
                        className="w-4 h-4 md:w-5 md:h-5 mt-0.5"
                      />
                      <div>
                        <span className="font-medium text-purple-800 text-sm md:text-base">{label}</span>
                        <p className="text-xs md:text-sm text-purple-600">{desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </Card>

              <Card className="p-4 md:p-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
                <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center gap-3">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-3 h-3 md:w-4 md:h-4 text-white" />
                  </div>
                  Special Features
                </h3>
                <div className="space-y-3">
                  {[
                    { key: "showTrophies", label: "GitHub Trophies", desc: "Display your GitHub achievements" },
                    { key: "showVisitorCounter", label: "Visitor Counter", desc: "Track profile views" },
                    { key: "showTypingAnimation", label: "Typing Animation", desc: "Animated header text" },
                  ].map(({ key, label, desc }) => (
                    <label
                      key={key}
                      className="flex items-start space-x-3 p-3 border border-blue-200 rounded-lg cursor-pointer hover:bg-blue-50 transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={profile.extras[key]}
                        onChange={(e) =>
                          setProfile((prev) => ({
                            ...prev,
                            extras: { ...prev.extras, [key]: e.target.checked },
                          }))
                        }
                        className="w-4 h-4 md:w-5 md:h-5 mt-0.5"
                      />
                      <div>
                        <span className="font-medium text-blue-800 text-sm md:text-base">{label}</span>
                        <p className="text-xs md:text-sm text-blue-600">{desc}</p>
                      </div>
                    </label>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  if (showPreview) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-2 md:p-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">🎉 Your GitHub README is Ready!</h1>
            <p className="text-blue-200 text-sm md:text-base">
              Preview how it will look on GitHub and get your markdown code
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-6 md:mb-8">
            <Button onClick={copyToClipboard} size="lg" className="bg-green-600 hover:bg-green-700 text-white">
              <Copy className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Copy Markdown
            </Button>
            <Button onClick={downloadMarkdown} size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Download className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Download README.md
            </Button>
            <Button
              onClick={() => setShowPreview(false)}
              size="lg"
              variant="outline"
              className="bg-white text-black border-white hover:bg-black hover:text-white hover:border-black"
            >
              ← Edit Profile
            </Button>
          </div>

          {/* Preview Tabs */}
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
            <div className="border-b border-gray-200 bg-gray-50">
              <div className="flex">
                <button
                  onClick={() => setPreviewTab("rendered")}
                  className={`px-4 md:px-6 py-3 font-medium text-sm flex items-center gap-2 ${
                    previewTab === "rendered"
                      ? "border-b-2 border-blue-500 text-blue-600 bg-white"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  👁️ GitHub Preview
                </button>
                <button
                  onClick={() => setPreviewTab("markdown")}
                  className={`px-4 md:px-6 py-3 font-medium text-sm flex items-center gap-2 ${
                    previewTab === "markdown"
                      ? "border-b-2 border-blue-500 text-blue-600 bg-white"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  📝 Raw Markdown
                </button>
              </div>
            </div>

            <div className="p-3 md:p-6">
              {previewTab === "rendered" ? (
                // GitHub-style Rendered Preview
                <div className="prose prose-sm md:prose-lg max-w-none">
                  <ReactMarkdown rehypePlugins={[rehypeRaw]}>{generatedMarkdown}</ReactMarkdown>
                </div>
              ) : (
                // Markdown Code View
                <div className="relative">
                  <div className="absolute top-2 md:top-4 right-2 md:right-4 z-10">
                    <Button onClick={copyToClipboard} size="sm" variant="outline" className="bg-white/90">
                      <Copy className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="bg-gray-800 px-3 md:px-4 py-2 flex items-center gap-2">
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-red-500 rounded-full"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full"></div>
                      <span className="text-gray-300 text-xs md:text-sm ml-2">README.md</span>
                    </div>
                    <div className="p-3 md:p-6 overflow-x-auto max-h-80 md:max-h-96">
                      <pre className="text-green-400 text-xs md:text-sm leading-relaxed whitespace-pre-wrap font-mono">
                        {generatedMarkdown}
                      </pre>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Success Message */}
          <div className="mt-6 md:mt-8 text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 md:p-6 inline-block">
              <div className="flex items-center justify-center gap-3 text-green-800">
                <div className="w-6 h-6 md:w-8 md:h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm md:text-base">README Generated Successfully!</h3>
                  <p className="text-xs md:text-sm text-green-600">
                    Copy the markdown code and paste it into your GitHub profile README.md file
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 p-2 md:p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 md:mb-8">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            ⚡ GitHub Profile Builder
          </h1>
          <p className="text-blue-200 text-sm md:text-lg">
            Create an epic README for your GitHub profile like a pro developer
          </p>
          <div className="mt-4 flex justify-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 md:px-6 py-2 border border-white/20">
              <span className="text-white font-mono text-xs md:text-sm">{"<Developer Mode: ON />"}</span>
            </div>
          </div>
        </div>

        {/* Progress Steps - Mobile Responsive */}
        <div className="mb-6 md:mb-8">
          <div className="flex justify-center">
            <div className="flex items-center space-x-2 md:space-x-4 bg-white/10 backdrop-blur-sm rounded-full p-2 md:p-4 border border-white/20 overflow-x-auto hide-scrollbar">
              {steps.map((step, index) => {
                const Icon = step.icon
                const isActive = index === currentStep
                const isCompleted = index < currentStep

                return (
                  <div key={index} className="flex items-center shrink-0">
                    <button
                      onClick={() => setCurrentStep(index)}
                      className={`flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border-2 transition-all ${
                        isActive
                          ? "border-blue-400 bg-blue-500 text-white shadow-lg shadow-blue-500/50"
                          : isCompleted
                            ? "border-green-400 bg-green-500 text-white shadow-lg shadow-green-500/50"
                            : "border-white/30 bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      {isCompleted ? (
                        <Check className="w-3 h-3 md:w-5 md:h-5" />
                      ) : (
                        <Icon className="w-3 h-3 md:w-5 md:h-5" />
                      )}
                    </button>
                    <span
                      className={`ml-1 md:ml-2 text-xs md:text-sm font-medium hidden sm:block ${isActive ? "text-blue-400" : "text-white/70"}`}
                    >
                      {step.title}
                    </span>
                    {index < steps.length - 1 && (
                      <div
                        className={`w-4 md:w-8 h-0.5 mx-2 md:mx-4 ${isCompleted ? "bg-green-400" : "bg-white/30"}`}
                      />
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Step Content */}
        <div className="mb-6 md:mb-8" ref={stepsContainerRef} onWheel={handleWheel}>
          {renderStepContent()}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 md:gap-0">
          <Button
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
            variant="outline"
            className="bg-black border-black text-white hover:bg-white hover:text-black hover:border-black order-2 sm:order-1"
            size="lg"
          >
            ← Previous
          </Button>

          {currentStep === steps.length - 1 ? (
            <Button
              onClick={generateMarkdown}
              size="lg"
              className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white px-6 md:px-8 order-1 sm:order-2"
            >
              🚀 Generate README
            </Button>
          ) : (
            <Button
              onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white order-1 sm:order-2"
            >
              Next →
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
