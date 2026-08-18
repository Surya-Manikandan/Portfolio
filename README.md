# Suryaprakash Manikandasamy - Portfolio Website

A modern, responsive, and professional personal portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Frontend:** React 19, Vite, Tailwind CSS, Framer Motion
- **Icons:** React Icons
- **Contact Form:** EmailJS Integration
- **Styling:** Tailwind CSS with custom animations
- **Deployment:** Vercel / Netlify ready

## ✨ Features

- 🎨 **Modern UI/UX** - Glassmorphism design with gradient backgrounds
- 🌓 **Dark/Light Mode** - Toggle between themes
- ⚡ **Smooth Animations** - Framer Motion powered animations
- 📱 **Fully Responsive** - Works on all devices
- 🎯 **SEO Friendly** - Optimized meta tags
- ⏱️ **Loading Screen** - Animated loading experience
- 📊 **Scroll Progress Bar** - Visual scroll indicator
- 🔝 **Back to Top Button** - Smooth scroll to top
- 📬 **Contact Form** - EmailJS integration
- 📄 **Resume Download** - One-click PDF download

## 📋 Sections

1. **Home** - Hero section with typing effect
2. **About** - Biography and career objective
3. **Skills** - Categorized skills with progress bars
4. **Education** - Timeline design education history
5. **Projects** - Project showcase cards
6. **Internship** - Internship experience details
7. **Certifications** - Certification gallery
8. **Achievements** - Awards and extracurricular
9. **Resume** - Download/View resume
10. **Contact** - Contact form with social links

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 🔧 Configuration

### EmailJS Setup (Contact Form)
1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Update the `Contact.jsx` component with your credentials:
   ```javascript
   await emailjs.send(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     { ... },
     'YOUR_PUBLIC_KEY'
   );
   ```

### Customize Portfolio Data
Edit `src/data/portfolioData.js` to update:
- Personal information
- Education details
- Skills
- Projects
- Social links
- etc.

## 📦 Dependencies

### Core
- `react` - UI library
- `react-dom` - React DOM rendering
- `vite` - Build tool

### UI & Animation
- `framer-motion` - Animations
- `react-icons` - Icon library
- `@emailjs/browser` - Email service

### Styling
- `tailwindcss` - CSS framework
- `@tailwindcss/vite` - Tailwind CSS Vite plugin

### Development
- `@vitejs/plugin-react` - React plugin for Vite
- `oxlint` - Linter

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── images/
│   │   ├── resume.pdf
│   │   └── ...
│   ├── favicon.svg
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Internship.jsx
│   │   │   ├── Certifications.jsx
│   │   │   ├── Achievements.jsx
│   │   │   ├── Resume.jsx
│   │   │   └── Contact.jsx
│   │   └── ui/
│   │       ├── LoadingScreen.jsx
│   │       ├── ScrollProgress.jsx
│   │       └── ScrollToTop.jsx
│   ├── data/
│   │   └── portfolioData.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

## 🌐 Deployment

### Deploy to Vercel
1. Push code to GitHub
2. Import repository to Vercel
3. Default settings work out of the box

### Deploy to Netlify
1. Push code to GitHub
2. Import repository to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## 🎨 Customization

### Theme Colors
Edit `src/index.css` to change CSS variables:
```css
:root {
  --primary: #3b82f6;
  --primary-dark: #2563eb;
  --accent: #8b5cf6;
}
```

### Animations
Adjust animation durations and delays in Framer Motion components.

## 📄 License

This project is open source and available for personal and commercial use.

## 👤 Author

**Suryaprakash Manikandasamy**
- GitHub: [@Surya-Manikandan](https://github.com/Surya-Manikandan)
- LinkedIn: [Suryaprakash Manikandasamy](https://www.linkedin.com/in/suryaprakash-manikandasamy-467436296)
- Email: suryaprakashmanikandan2107@gmail.com

