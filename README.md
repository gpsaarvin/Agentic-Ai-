<h1 align="center">NEXA — Agentic AI</h1>

<p align="center">
  <img src="https://readme-typing-svg.demolab.com/?font=Inter&size=22&pause=1500&color=00D4FF&center=true&vCenter=true&width=600&lines=AI+that+thinks.;AI+that+plans.;AI+that+acts.;Build+autonomous+workflows." alt="Typing SVG" />
</p>

<p align="center">
  NEXA is a premium, futuristic Agentic AI platform interface. It is designed to act as an operating system where users can create autonomous AI agents that understand goals, plan tasks, use tools, execute actions, and report results.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" />
</p>

---

## 🏗️ System Architecture

NEXA's Multi-Agent architecture is designed to orchestrate complex tasks through specialized autonomous agents.

```mermaid
graph TD
    classDef core fill:#0c0c10,stroke:#00d4ff,stroke-width:2px,color:#e8e8ec
    classDef agent fill:#16161c,stroke:#4a4a5a,stroke-width:1px,color:#e8e8ec
    classDef data fill:#111116,stroke:#00e676,stroke-width:1px,color:#e8e8ec

    User([👤 User Request]) --> Core{NEXA Command Core}
    class Core core
    
    Core -->|Delegates to| Planner[🧠 Planner Agent]
    class Planner agent
    
    subgraph "Autonomous Agent Swarm"
        Planner -->|Assigns Sub-task| Researcher[🔍 Research Agent]
        Planner -->|Assigns Sub-task| Coder[💻 Code Agent]
        Planner -->|Assigns Sub-task| Analyst[📊 Analysis Agent]
        
        Researcher <--> Memory[(🗄️ Memory Bank)]
        Coder <--> Memory
        Analyst <--> Memory
        
        Researcher --> Executor[⚡ Executor Agent]
        Coder --> Executor
        Analyst --> Executor
        class Researcher,Coder,Analyst,Executor agent
    end
    
    class Memory data
    
    Executor -->|Validates| Verifier[🛡️ Verification Agent]
    class Verifier agent
    
    Verifier -->|Verification Failed| Planner
    Verifier -->|Verification Passed| Output([✅ Final Output])
```

## ✨ Features

- 🧠 **Agent Command Core**: Interactive network visualization of orbital agent nodes.
- 🎛️ **Agent Dashboard**: A real-time command center workspace to orchestrate autonomous agents.
- 🛠️ **Agent Builder**: Configure capabilities, assign tools, and deploy agents instantly.
- 🔀 **Workflow Canvas**: Visually design complex multi-step pipelines with connected nodes.
- ⚡ **Multi-Agent Runtime**: Display active agent clusters (Researcher, Planner, Coder, Analyst, Executor).
- 🔌 **Tool Ecosystem**: Integration grids showing connected services (GitHub, Slack, Databases, APIs).
- 📈 **Real-Time Monitoring**: Live activity timeline tracking agent reasoning, extraction, and validation.

## 🚀 Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, React 19)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

## 🎨 UI/UX Design Principles

- **Premium & Futuristic**: Deep black/near-black backgrounds with sophisticated cyan accents.
- **Glassmorphism**: Subtle ambient glows and frosted glass panels.
- **Micro-Interactions**: Magnetic CTA buttons, scroll reveals, data flow particles, and pulse animations.
- **Typography**: Clean, robust hierarchy powered by the *Geist* sans-serif font.

## 📦 Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/gpsaarvin/Agentic-Ai-.git
   cd Agentic-Ai-/nexa-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **View the application:**
   Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

## 📁 Project Structure

```text
src/
├── app/                  # Next.js app router & global layouts
│   ├── globals.css       # Global theme, variables & custom keyframes
│   ├── layout.tsx        # Root layout with font configuration
│   └── page.tsx          # Main assembly page
├── components/           # Reusable UI components
│   ├── agents/           # Agent Builder & Multi-Agent UI
│   ├── dashboard/        # Command Center Dashboard
│   ├── landing/          # Hero, Navbar, Tools, Metrics, Timeline, Pricing
│   └── workflows/        # Workflow Canvas Engine
└── lib/                  # Utilities (e.g., classname merger)
```

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---
<p align="center"><i>Built for the agentic era.</i></p>
