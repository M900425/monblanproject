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

src/
├── assets/
│ ├── images/ # Card images
│ │ ├── Rectangle 20.jpg
│ │ └── ...
│ ├── vector1.svg # Large decorative shape
│ ├── vector2.svg # Additional decorative shape
│ ├── group1.svg # Secondary decorative shape
│ └── sprite.svg # SVG sprite with all icons
├── components/
│ └── DatePickerWithButtons.tsx # Custom date picker component
├── data/
│ └── cards.ts # Mock card data with types
├── types/
│ └── datePicker.ts # Type definitions for DatePicker
├── App.tsx # Main application component
├── App.css # Application styles
├── main.tsx # Application entry point
└── index.css # Global CSS reset & fonts

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
