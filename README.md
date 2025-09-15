# Triton Mining Co. Website

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge)](https://tritonmining.com)

> **A cutting-edge, minimalistic website showcasing the complete Triton ecosystem for sustainable ocean mining.** Built with modern web technologies and featuring Cursor.ai-inspired design principles with custom SVG icons and real-time data visualizations.

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Website-00b4d8?style=for-the-badge&logo=vercel&logoColor=white)](https://tritonmining.io)
[![Documentation](https://img.shields.io/badge/Documentation-Read_More-007ea7?style=for-the-badge&logo=gitbook&logoColor=white)](#documentation)
[![Contributing](https://img.shields.io/badge/Contributing-Guidelines-0096c7?style=for-the-badge&logo=github&logoColor=white)](#contributing)

## Overview

This enterprise-grade website presents **Triton Mining Co.'s** comprehensive ecosystem of cutting-edge technologies for sustainable deep-sea mining operations. Our platform demonstrates the future of responsible ocean resource extraction through:

### **Core Ecosystem Products**

| Product | Description | Technology Focus |
|---------|-------------|------------------|
| **DeepSeaGuard** | Real-time compliance monitoring & alert system | AI-powered regulatory adherence |
| **SeaLink** | Autonomous buoy mesh network for communication | IoT & wireless connectivity |
| **Shellby** | Coastal sentinel system for environmental protection | Environmental monitoring |
| **Luna AUV** | Deep-sea autonomous underwater vehicles | Robotics & autonomy |
| **CrabBots** | Precision nodule collectors with AI harvesting | Precision robotics |
| **Processing Stations** | Inland refineries for sustainable mineral processing | Industrial automation |
| **Data Infrastructure** | Secure databases, APIs, and cloud systems | Data management |
| **External Systems** | Integration with regulators, NGOs, and partners | System integration |
| **Triton Services** | Consulting services and open-source tools | Professional services |

## **Key Features & Capabilities**

### **Design Excellence**
- **Custom SVG icon system** for all ecosystem products with consistent styling
- **Smooth, fluid animations** powered by Framer Motion
- **Fully responsive design** optimized for desktop, tablet, and mobile
- **Scroll progress indicator** and seamless smooth scrolling
- **Professional typography** using Inter + Orbitron font pairing

### **Interactive Capabilities**
- **Live operations map** with Leaflet.js showing real-time AUV positions
- **Real-time data visualizations** using Chart.js with 6 interactive charts
- **Compliance dashboard** with live alerts and monitoring systems
- **Interactive ecosystem overview** with sophisticated hover effects
- **Advanced contact form** with real-time validation and submission handling
- **Global search functionality** with intelligent suggestions

### **Technology Stack**

| Technology | Version | Purpose | Status |
|------------|---------|---------|--------|
| **React** | 18.2.0 | Frontend framework | ✅ Production |
| **Vite** | 7.1.5 | Build tool & dev server | ✅ Production |
| **TailwindCSS** | 3.4.0 | Utility-first CSS framework | ✅ Production |
| **Framer Motion** | Latest | Animation library | ✅ Production |
| **Chart.js** | Latest | Data visualization | ✅ Production |
| **Leaflet** | Latest | Interactive maps | ✅ Production |
| **Lucide React** | Latest | Icon system | ✅ Production |

## **Development & Deployment**

### **Prerequisites**

| Requirement | Version | Purpose |
|-------------|---------|---------|
| **Node.js** | 16.0+ | JavaScript runtime |
| **npm** | 8.0+ | Package manager |
| **Git** | 2.0+ | Version control |

### **Quick Start**

```bash
# 1. Clone the repository
git clone https://github.com/tritonmining/website.git
cd triton-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser to http://localhost:5173
```

### **Build Commands**

| Command | Purpose | Output |
|---------|---------|--------|
| `npm run dev` | Start development server | `http://localhost:5173` |
| `npm run build` | Build for production | `dist/` folder |
| `npm run preview` | Preview production build | Local preview server |
| `npm run lint` | Run ESLint | Code quality report |

### **Deployment Options**

| Platform | Status | Command | Notes |
|----------|--------|---------|-------|
| **Vercel** | ✅ Recommended | `vercel --prod` | Zero-config deployment |
| **Netlify** | ✅ Supported | `netlify deploy --prod` | Drag & drop `dist/` folder |
| **AWS S3** | ✅ Supported | `aws s3 sync dist/ s3://bucket` | Static hosting |
| **GitHub Pages** | ✅ Supported | GitHub Actions | Automated deployment |

## **Project Architecture**

```
triton-website/
├── 📁 public/                   # Static assets
├── 📁 src/
│   ├── 📁 components/           # React components
│   │   ├── 📁 icons/
│   │   │   └── TritonIcons.jsx  # 🎨 Custom SVG icon system
│   │   ├── Hero.jsx             # 🌊 Hero section with animations
│   │   ├── Navigation.jsx       # 🧭 Top navigation with search
│   │   ├── EcosystemOverview.jsx # 🏗️ Product ecosystem grid
│   │   ├── InteractiveMap.jsx   # 🗺️ Live operations map
│   │   ├── DataInsights.jsx     # 📊 Charts & analytics
│   │   ├── ComplianceSection.jsx # 🛡️ DeepSeaGuard dashboard
│   │   ├── ArticlesSection.jsx  # 📰 Blog & articles
│   │   ├── ContactSection.jsx   # 📞 Contact form & info
│   │   ├── Footer.jsx           # 🦶 Footer with links
│   │   └── ScrollProgress.jsx   # 📊 Scroll progress indicator
│   ├── App.jsx                  # 🚀 Main application component
│   ├── main.jsx                 # ⚡ Application entry point
│   └── index.css                # 🎨 Global styles & Tailwind
├── 📄 package.json              # 📦 Dependencies & scripts
├── 📄 tailwind.config.js        # ⚙️ Tailwind configuration
├── 📄 vite.config.js            # ⚙️ Vite configuration
└── 📄 README.md                 # 📚 This documentation
```

### **Component Architecture**

| Component | Responsibility | Dependencies |
|-----------|----------------|--------------|
| **Hero** | Landing section with animations | Framer Motion |
| **Navigation** | Top nav with search functionality | React Router |
| **EcosystemOverview** | Product showcase grid | Custom icons |
| **InteractiveMap** | Live AUV operations map | Leaflet.js |
| **DataInsights** | Real-time data charts | Chart.js |
| **ComplianceSection** | DeepSeaGuard dashboard | Real-time data |
| **ArticlesSection** | Blog content display | Content management |
| **ContactSection** | Contact form & information | Form validation |

## **Design System & Brand Guidelines**

### **Color Palette**

| Color | Hex Code | Usage | CSS Variable |
|-------|----------|-------|--------------|
| **Ocean Dark** | `#0c1c2c` | Primary background | `--ocean-dark` |
| **Ocean Primary** | `#00b4d8` | Primary accent, CTAs | `--ocean-primary` |
| **Ocean Secondary** | `#007ea7` | Secondary elements | `--ocean-secondary` |
| **Ocean Text** | `#e0f7ff` | Primary text color | `--ocean-text` |
| **Ocean Accent** | `#0096c7` | Hover states, highlights | `--ocean-accent` |

### **Typography System**

| Element | Font Family | Weight | Size | Usage |
|---------|-------------|--------|------|-------|
| **H1** | Orbitron | 700 | 3.5rem | Main headlines |
| **H2** | Orbitron | 600 | 2.5rem | Section headers |
| **H3** | Orbitron | 600 | 1.875rem | Subsection headers |
| **Body** | Inter | 400 | 1rem | Body text |
| **Caption** | Inter | 300 | 0.875rem | Small text |

### **Icon System**

All ecosystem products feature custom SVG icons with:
- **Consistent 32x32px** base size
- **Ocean primary color scheme** (#00b4d8)
- **Circular border frame** for visual consistency
- **Minimalistic design** following Cursor.ai principles
- **Scalable vector format** for crisp rendering

## **Data Visualizations & Analytics**

The website features **6 sophisticated interactive charts** powered by Chart.js:

| Chart | Type | Data Source | Purpose |
|-------|------|-------------|---------|
| **Supply vs Demand** | Line Chart | Market data | Critical mineral market trends |
| **Environmental Impact** | Bar Chart | Comparative analysis | vs traditional mining methods |
| **Compliance Status** | Doughnut Chart | Real-time monitoring | ISA compliance dashboard |
| **Environmental Monitoring** | Radar Chart | Sensor data | Multi-metric environmental health |
| **AUV Fleet Status** | Bar Chart | Fleet telemetry | Live fleet performance metrics |
| **Sediment Plume Tracking** | Line Chart | Environmental sensors | 24-hour dispersion monitoring |

### **Interactive Operations Map**

Features a **Leaflet-powered map** centered on the Clarion-Clipperton Zone (CCZ):

- **Live AUV positions** with real-time status indicators
- **Sediment plume visualization** with concentration overlays
- **Real-time telemetry data** in interactive popups
- **Custom markers** with status-specific color coding
- **Zoom and pan controls** for detailed exploration

### **Responsive Design System**

| Breakpoint | Screen Size | Layout | Features |
|------------|-------------|--------|----------|
| **Mobile** | < 768px | Single column | Touch-optimized navigation |
| **Tablet** | 768px - 1024px | Two column | Optimized grid layouts |
| **Desktop** | > 1024px | Multi-column | Full feature set |

## **Customization & Extension**

### **Adding New Ecosystem Products**

```bash
# 1. Create new icon component
src/components/icons/TritonIcons.jsx

# 2. Add to ecosystem products array
src/components/EcosystemOverview.jsx

# 3. Update navigation if needed
src/components/Navigation.jsx
```

### **Modifying Data Visualizations**

```javascript
// Edit chart data and configurations
src/components/DataInsights.jsx

// Available chart types:
// - Line charts for time series data
// - Bar charts for comparisons
// - Doughnut charts for percentages
// - Radar charts for multi-metric analysis
```

### **Styling & Theme Customization**

```bash
# Tailwind configuration
tailwind.config.js

# Global styles and CSS variables
src/index.css

# Component-specific styles
src/components/[ComponentName].jsx
```

## **Production Deployment**

### **Recommended Deployment Platforms**

| Platform | Setup Time | Cost | Features | Status |
|----------|------------|------|----------|--------|
| **Vercel** | 2 minutes | Free tier | Zero-config, CDN | ✅ Recommended |
| **Netlify** | 5 minutes | Free tier | Drag & drop, forms | ✅ Supported |
| **AWS S3 + CloudFront** | 15 minutes | Pay-per-use | Enterprise-grade | ✅ Supported |
| **GitHub Pages** | 10 minutes | Free | Automated CI/CD | ✅ Supported |

### **Deployment Checklist**

- [ ] Run `npm run build` successfully
- [ ] Test production build locally with `npm run preview`
- [ ] Verify all assets load correctly
- [ ] Test responsive design on multiple devices
- [ ] Validate all interactive features work
- [ ] Check performance with Lighthouse
- [ ] Configure custom domain (if applicable)

## **License & Legal**

[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)

This project is **proprietary to Triton Mining Co.** All rights reserved.

## **Contributing Guidelines**

[![Contributing](https://img.shields.io/badge/Contributing-Guidelines-blue?style=for-the-badge)](CONTRIBUTING.md)

### **Development Standards**

- Follow established component patterns
- Ensure all components are properly documented
- Write clean, maintainable code
- Test on multiple devices and browsers
- Follow the established design system

### **Pull Request Process**

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request with detailed description

## **Support & Contact**

| Contact Type | Information | Response Time |
|--------------|-------------|---------------|
| **Technical Support** | dev@tritonmining.io | 24 hours |
| **General Inquiries** | info@tritonmining.io | 48 hours |
| **Press & Media** | press@tritonmining.io | 24 hours |
| **Partnerships** | partnerships@tritonmining.io | 72 hours |

---

<div align="center">

**Built with passion for the future of sustainable ocean mining**

[![Triton Mining Co.](https://img.shields.io/badge/Triton_Mining_Co.-2024-00b4d8?style=for-the-badge&logo=react&logoColor=white)](https://tritonmining.io)

</div>