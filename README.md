# monblanproject

A front-end test project built with modern tools and best practices.

## 📋 Project Description

**monblanproject** is a responsive web application developed as a technical test for a Frontend Developer position. It demonstrates:

- Pixel-perfect adaptive layout with responsive breakpoints
- Two view modes (list & grid) for content cards
- Custom date picker integration with Ant Design
- SVG sprite usage for all icons
- Clean code architecture with separated data, components, and types
- Mock data-driven card rendering
- Cross-browser support and mobile-first approach

The page represents a social media dashboard with header statistics, date filtering, and a dynamic card grid.

---

## 🛠 Tech Stack

| Technology      | Description                                          |
| --------------- | ---------------------------------------------------- |
| **React 18**    | Library for building user interfaces                 |
| **TypeScript**  | Strongly typed JavaScript superset                   |
| **Vite**        | Fast build tool and development server               |
| **Ant Design**  | UI library (used only for `DatePicker`)              |
| **CSS3**        | Custom styling with Flexbox, Grid, and media queries |
| **SVG Sprites** | Single sprite file for all icons                     |
| **Day.js**      | Lightweight date manipulation (used by Ant Design)   |

---

## 📁 Project Structure

monblanproject/
├── public/
│ └── sprite.svg
├── src/
│ ├── assets/
│ │ ├── images/
│ │ │ ├── Rectangle 20.jpg
│ │ │ ├── Rectangle 20-1.jpg
│ │ │ ├── Rectangle 20-2.jpg
│ │ │ ├── Rectangle 20-3.jpg
│ │ │ ├── Rectangle 20-4.jpg
│ │ │ ├── Rectangle 20-5.jpg
│ │ │ ├── Rectangle 20-6.jpg
│ │ │ └── Rectangle 20-7.jpg
│ │ ├── group1.svg
│ │ ├── vector1.svg
│ │ └── vector2.svg
│ ├── components/
│ │ └── DatePickerWithButtons.tsx
│ ├── data/
│ │ └── cards.ts
│ ├── types/
│ │ └── datePicker.ts
│ ├── App.css
│ ├── App.tsx
│ ├── index.css
│ └── main.tsx
├── .gitignore
├── index.html
├── package.json
├── README.md
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts

---

## ✨ Features

### Header

- **Brand section** – project name and start date
- **Statistics** – posts, followers, following counters
- **Custom DatePicker** – two inputs ("from" and "to") with custom buttons:
  - ✕ – clear the input
  - 📅 – open the calendar
- **Sticky header** – remains at the top on scroll

### Card Display Modes

- **List mode** (Group 23 icon) – cards displayed as vertical list
- **Grid mode** (Group 13 icon) – cards displayed as responsive grid
  - 4 columns on large screens
  - 3 columns on medium screens (≤1200px)
  - 2 columns on tablet (≤900px)
  - 1 column on mobile (≤600px)

### Card Content

- Image with `object-fit: cover`
- "Today" section – likes & comments
- Date-specific section – likes & comments
- "Image upload" section – label & upload date

### Decorative Elements

- Multiple SVG shapes positioned absolutely as background layers
- All icons loaded from a single SVG sprite

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation & Setup

```bash

# 1. Install dependencies
npm install

# 2. Start the development server
npm run dev
```
