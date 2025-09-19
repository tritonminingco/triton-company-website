# Triton Mining Co. Website

[![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.0-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)
[![Status](https://img.shields.io/badge/Status-Production%20Ready-brightgreen?style=for-the-badge)](https://tritonmining.com)

> **Triton Mining Co.'s official company website featuring our vision for sustainable ocean mining, technology ecosystem, and team.** Built with React and featuring smooth animations, interactive data visualizations, and comprehensive company information.

[![Live Demo](https://img.shields.io/badge/Live_Demo-View_Website-00b4d8?style=for-the-badge&logo=vercel&logoColor=white)](https://tritonmining.io)
[![Documentation](https://img.shields.io/badge/Documentation-Read_More-007ea7?style=for-the-badge&logo=gitbook&logoColor=white)](#documentation)
[![Contributing](https://img.shields.io/badge/Contributing-Guidelines-0096c7?style=for-the-badge&logo=github&logoColor=white)](#contributing)

## Overview

This is **Triton Mining Co.'s official company website** - a comprehensive digital presence that introduces our company, showcases our innovative technology ecosystem, and highlights our team's expertise in sustainable deep-sea mining operations. The website serves as our primary online platform for:

- **Company Introduction** - Who we are and our mission in sustainable ocean mining
- **Technology Ecosystem** - Our comprehensive suite of innovative products and solutions
- **Team Showcase** - Meet our diverse team of engineers, scientists, and industry experts
- **Company News** - Latest updates, articles, and insights from Triton Mining Co.
- **Contact & Partnerships** - How to reach us and explore collaboration opportunities

### **Our Technology Ecosystem**

| Product | Description | Technology Focus |
|---------|-------------|------------------|
| **DeepSeaGuard** | Real-time compliance monitoring & alert system | Automated regulatory adherence |
| **SeaLink** | Autonomous buoy mesh network for communication | IoT & wireless connectivity |
| **Shellby** | Coastal sentinel system for environmental protection | Environmental monitoring |
| **Luna AUV** | Deep-sea autonomous underwater vehicles | Robotics & autonomy |
| **CrabBots** | Precision nodule collectors with automated harvesting | Precision robotics |
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
- **Ocean-themed color palette** with modern gradients and effects

### **Company Website Features**
- **Hero section** with company introduction and mission statement
- **Interactive ecosystem overview** showcasing our technology products with detailed modals
- **Comprehensive team section** with member profiles, expertise filtering, and detailed bios
- **Company data visualizations** using Chart.js with 6 interactive charts showing our capabilities
- **Operations map** with Leaflet.js displaying AUV operations and environmental data
- **Compliance dashboard** showcasing our DeepSeaGuard monitoring capabilities
- **Company news & articles** with modal-based content display
- **Contact & partnership information** with form validation and submission handling

### **Technology Stack**

| Technology | Version | Purpose | Status |
|------------|---------|---------|--------|
| **React** | 19.1.1 | Frontend framework | ✅ Production |
| **Vite** | 7.1.2 | Build tool & dev server | ✅ Production |
| **TailwindCSS** | 3.4.0 | Utility-first CSS framework | ✅ Production |
| **Framer Motion** | 12.23.12 | Animation library | ✅ Production |
| **Chart.js** | 4.5.0 | Data visualization | ✅ Production |
| **Leaflet** | 1.9.4 | Interactive maps | ✅ Production |
| **Lucide React** | 0.544.0 | Icon system | ✅ Production |

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
- **Minimalistic design** following modern web standards
- **Scalable vector format** for crisp rendering

## **Website Sections & Content**

### **Company Website Structure**
- **Hero Section** - Welcome message, company mission, and primary call-to-action
- **Ecosystem Overview** - Interactive showcase of our technology products and solutions
- **Operations Map** - Visual representation of our AUV operations and environmental monitoring
- **Data Insights** - Interactive charts demonstrating our capabilities and environmental impact
- **Compliance Dashboard** - Showcase of our DeepSeaGuard monitoring and regulatory compliance
- **Team Section** - Meet our team with detailed profiles, expertise areas, and backgrounds
- **Company News** - Latest articles, updates, and insights from Triton Mining Co.
- **Contact Section** - Company contact information, partnership inquiries, and communication

### **Data Visualizations**

The website features **6 interactive charts** powered by Chart.js:

| Chart | Type | Purpose |
|-------|------|---------|
| **Supply vs Demand** | Line Chart | Critical mineral market trends |
| **Environmental Impact** | Bar Chart | Comparison with traditional mining methods |
| **Compliance Status** | Doughnut Chart | ISA compliance dashboard |
| **Environmental Monitoring** | Radar Chart | Multi-metric environmental health |
| **AUV Fleet Status** | Bar Chart | Fleet performance metrics |
| **Sediment Plume Tracking** | Line Chart | 24-hour dispersion monitoring |

### **Interactive Map**

Features a **Leaflet-powered map** centered on the Clarion-Clipperton Zone (CCZ):

- **AUV positions** with status indicators
- **Environmental data** visualization
- **Interactive popups** with telemetry information
- **Custom markers** with status-specific styling
- **Zoom and pan controls** for exploration

### **Responsive Design System**

| Breakpoint | Screen Size | Layout | Features |
|------------|-------------|--------|----------|
| **Mobile** | < 768px | Single column | Touch-optimized navigation |
| **Tablet** | 768px - 1024px | Two column | Optimized grid layouts |
| **Desktop** | > 1024px | Multi-column | Full feature set |

## **Customization & Extension**

### **Adding New Team Members**

```javascript
// Add new team member to the company team
src/data/teamData.js

// Team members are automatically categorized by role
// Update roleCategories in TeamSection.jsx if needed
```

### **Updating Company Information**

```javascript
// Edit company product information and descriptions
src/data/productData.js

// Update ecosystem overview display
src/components/EcosystemOverview.jsx

// Modify company news and articles
src/components/ArticlesSection.jsx
```

### **Customizing Data Visualizations**

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

## **About This Website**

This is **Triton Mining Co.'s official company website** - our primary digital presence and corporate identity platform. The website serves multiple purposes:

- **Corporate Identity** - Establishes Triton Mining Co. as a leader in sustainable ocean mining
- **Technology Showcase** - Demonstrates our comprehensive ecosystem of innovative products
- **Team Introduction** - Presents our diverse team of experts and their expertise
- **Company Information** - Provides essential business details, contact information, and news
- **Partnership Platform** - Facilitates connections with potential partners and stakeholders
- **Industry Education** - Shares insights about sustainable ocean mining practices

The website is built as a **modern single-page application (SPA)** with smooth scrolling navigation and interactive elements that engage visitors while presenting our company professionally.

## **License & Legal**

[![License](https://img.shields.io/badge/License-Proprietary-red?style=for-the-badge)](LICENSE)

This project is **proprietary to Triton Mining Co.** All rights reserved.

## **Development Guidelines**

### **Code Standards**

- Follow established component patterns
- Write clean, maintainable React code
- Use consistent naming conventions
- Test on multiple devices and browsers
- Follow the established design system

### **File Organization**

- Components in `src/components/`
- Data in `src/data/`
- Icons in `src/components/icons/`
- Global styles in `src/index.css`

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