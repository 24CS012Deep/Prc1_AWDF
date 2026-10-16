# Practical 1: Introduction to React and Component Architecture

**Student Name:** Deep Chauhan  
**Student ID:** 24CS012  
**Course:** ITUE301 / CSE304 — Advanced Web Development Frameworks  
**Institution:** Charotar University of Science and Technology (CHARUSAT) — CSPIT / DEPSTAR  

---

## 📌 Project Overview
A modular, single-page student portfolio built with **React** and **Vite**. The project demonstrates foundational component architecture: decomposing a UI into independent, single-responsibility functional components, structuring clean props data flow, and avoiding code duplication.

---

## 🏗️ Architecture & Component Tree
```text
App.jsx (Root Layout & State/Props Provider)
 ├── Header.jsx   (Profile landmark, accepts name, rollNo, role, tagline, themeColor)
 ├── NavBar.jsx   (Sticky navigation bar with scroll-based active section highlight)
 ├── About.jsx    (Academic background, specialization, and engineering ethos)
 ├── Skills.jsx   (Dynamic skill list rendering from props array with progress bars)
 ├── Projects.jsx (Featured project showcase rendered dynamically from props)
 └── Footer.jsx   (Contact links, social references, and copyright info)
```

---

## 🚀 Key Features Implemented

1. **Modular Component Architecture:**
   - Every UI section is encapsulated in its own file under `src/components/`, strictly adhering to the Single Responsibility Principle.
   - Zero duplicated JSX or inline business logic across components.

2. **Unidirectional Props Data Flow:**
   - **`Header`**: Receives `name`, `rollNo`, `role`, `tagline`, and `themeColor` (applied as a dynamic gradient inline style).
   - **`Skills`**: Receives an array of skill objects (`skillList`) and renders cards dynamically using `Array.prototype.map()` with unique `key` attributes.
   - **`Projects`**: Receives an array of project metadata (`projects`) and renders cards with tech stack tags and repository links.
   - **`Footer`**: Receives student and contact information for dynamic rendering.

3. **Active Navigation Indicator:**
   - `NavBar` monitors window scroll events and dynamically applies active styles to the corresponding section button.

4. **Modern Design System:**
   - Built with Vanilla CSS, CSS custom properties (tokens), responsive flexbox/grid, glassmorphism card styling, and custom typography.

---

## 🛠️ How to Run Locally

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Installation & Execution
```bash
# 1. Navigate to the project directory
cd prc1

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## 📝 Conceptual Analysis & Viva Q&A

### Q1: What is the role of each component in the overall UI structure?
In React, components act as independent, reusable building blocks:
- **`Header`** serves as the primary visual entry point, displaying developer identity and accepting customization props (`themeColor`).
- **`NavBar`** handles user orientation and smooth jump navigation across the single-page application.
- **`About`** provides static contextual background on education, domain specialization, and development ethos.
- **`Skills`** and **`Projects`** function as dynamic consumers, accepting raw data arrays via props and rendering consistent card-based UI structures without hardcoding markup.
- **`Footer`** encapsulates institutional credentials and external communication links.

### Q2: How does React re-render when props change?
When a parent component passes modified props to a child component, React triggers a reconciliation cycle for that child and its subtree. React constructs a new Virtual DOM tree representing the component's output, calculates the difference (diffing algorithm) between the previous and new Virtual DOM representations, and selectively updates only the affected real DOM nodes.

### Q3: Why is component reusability important in large-scale applications?
- **DRY Principle (Don't Repeat Yourself):** Prevents duplicate code across different screens and views.
- **Maintainability:** Modifying a shared component instantly updates all instances across the entire application.
- **Consistency:** Enforces uniform design tokens, accessibility attributes, and behavior.
- **Testability:** Reusable components can be isolated and verified through automated unit tests under varying prop scenarios.

---

## 🔍 Engineering Reflection
- **Vite Scaffolding:** Vite leverages native ES modules (ESM) during development, resulting in sub-millisecond hot module replacement (HMR) and instantaneous build performance compared to legacy Webpack setups.
- **Key Warnings:** Ensured all mapped elements inside `Skills.jsx` and `Projects.jsx` receive distinct, deterministic `key` props to enable efficient Virtual DOM reconciliation.
