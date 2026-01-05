# SITNovate - Enthusia 5.0 Official Website

A modern, interactive website for SITNovate's Enthusia 5.0 - the premier techno-cultural fest of Symbiosis Institute of Technology, Nagpur.

## 🚀 Features

### 🎯 Main Website
- **Interactive 3D Hero Section** with Spline animations
- **Responsive Design** optimized for all devices
- **Modern UI/UX** with smooth animations using Framer Motion
- **Event Information** for both TechFest and Cultural Fest
- **Sponsors Showcase** with 3D carousel displays
- **Gallery** with past event highlights
- **Contact Information** and venue details
- **Registration System** for event participation

### 🛠 Technical Stack
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 4.x with custom animations
- **3D Graphics**: Three.js + React Three Fiber + Spline
- **Animations**: Framer Motion + GSAP
- **Deployment**: Vercel

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/sitnovate.git
cd sitnovate
```

2. **Install dependencies**
```bash
npm install
```

3. **Start Development Server**
```bash
npm run dev
```

Visit `http://localhost:5173` to see the application.

## 🏗 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── navigation/     # Navigation components
│   ├── sponsors/       # Sponsor showcase components
│   └── ui/            # Base UI components
├── pages/              # Page components
├── sections/           # Page sections
│   ├── hero/          # Hero sections
│   ├── how-i-work/    # Event information sections
│   └── footer/        # Footer components
├── hooks/              # Custom React hooks
├── lib/               # Utility libraries
├── stores/            # Zustand state management
└── utils/             # Helper functions
```

## 🎨 Key Features

### 3D Interactive Elements
- Spline-powered hero animations
- Three.js sponsor carousels
- Smooth scroll animations with Lenis
- GSAP-powered micro-interactions

### Responsive Design
- Mobile-first approach
- Breakpoint-specific layouts
- Touch-friendly interactions
- Optimized performance across devices

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**
```bash
npm i -g vercel
vercel
```

2. **Build Settings**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## 📚 Documentation

- [`DEPLOYMENT_GUIDE.md`](./DEPLOYMENT_GUIDE.md) - Production deployment

## 🛠 Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
npm run analyze      # Analyze bundle size
```

## 🎯 Event Information

**Enthusia 5.0** - The ultimate techno-cultural extravaganza featuring:

### TechFest
- Hackathons and coding competitions
- Technical workshops and seminars
- Innovation showcases
- Industry expert sessions

### Cultural Fest
- Music and dance performances
- Art and literary competitions
- Cultural showcases
- Entertainment events

**Venue**: Symbiosis Institute of Technology, Nagpur, Maharashtra, India
**Contact**: enthusia@sitnagpur.edu.in

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Symbiosis Institute of Technology, Nagpur
- All sponsors and partners
- The amazing development team
- Event organizers and volunteers

---

**Built with ❤️ for Enthusia 5.0**
