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

### 🏆 Dashboard System
- **Google OAuth Integration** for secure authentication
- **Team Management** (create/join teams with 5-digit codes)
- **Project Submission** system with file uploads
- **Real-time Announcements** for participants
- **User Profiles** with complete registration details
- **Contact Support** system

### 🛠 Technical Stack
- **Frontend**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS 4.x with custom animations
- **3D Graphics**: Three.js + React Three Fiber + Spline
- **Animations**: Framer Motion + GSAP
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Google OAuth via Supabase Auth
- **Deployment**: Vercel
- **File Storage**: Supabase Storage

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Google OAuth credentials
- Supabase project

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

3. **Environment Setup**
Create a `.env` file in the root directory:
```env
VITE_GOOGLE_CLIENT_ID=your_google_client_id
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your_anon_key_here
```

4. **Database Setup**
- Create a Supabase project
- Run the SQL schema from `supabase-schema.sql`
- Configure storage buckets as per `SUPABASE_STORAGE_SETUP.md`

5. **Start Development Server**
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
│   ├── dashboard/      # Dashboard-specific components
│   └── ui/            # Base UI components
├── pages/              # Page components
│   ├── dashboard/     # Dashboard pages
│   └── ...           # Main website pages
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

### Team Management System
- Create teams with unique 5-digit codes
- Join existing teams (max 3 members)
- Real-time team updates via Supabase
- Team leader designation

### Project Submission
- File upload for presentations and reports
- Deadline tracking and warnings
- Submission status management
- Update capability for submitted projects

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**
```bash
npm i -g vercel
vercel
```

2. **Environment Variables**
Add the following in Vercel dashboard:
- `VITE_GOOGLE_CLIENT_ID`
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`

3. **Build Settings**
- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

## 📚 Documentation

- [`QUICK_START.md`](./QUICK_START.md) - Quick setup guide
- [`SUPABASE_SETUP.md`](./SUPABASE_SETUP.md) - Database configuration
- [`DASHBOARD_FEATURES.md`](./DASHBOARD_FEATURES.md) - Dashboard functionality
- [`GOOGLE_AUTH_SETUP.md`](./GOOGLE_AUTH_SETUP.md) - OAuth configuration
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
