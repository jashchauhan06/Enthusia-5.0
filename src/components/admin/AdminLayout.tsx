import { useState, useEffect, useRef } from "react";
import { useNavigate, Outlet, useLocation } from "react-router";
import { 
  Users, 
  Bell, 
  Mail, 
  LogOut, 
  Menu, 
  X,
  Shield,
  FileText,
  User,
  ChevronDown
} from "lucide-react";

export function AdminLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    if (isProfileOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isProfileOpen]);

  const handleSignOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('userProfile');
    navigate('/');
  };

  const navItems = [
    { path: '/admin/teams', label: 'Teams', icon: Users },
    { path: '/admin/announcements', label: 'Announcements', icon: Bell },
    { path: '/admin/submissions', label: 'Submissions', icon: FileText },
    { path: '/admin/messages', label: 'Messages', icon: Mail },
  ];

  const isActive = (path: string) => {
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation Bar */}
      <nav className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-red-500" />
              </div>
              <div>
                <h1 className="font-heading text-xl text-foreground">
                  Admin Dashboard
                </h1>
                <p className="text-xs text-[#b3b3b3]">SITNovate Hackathon</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.path}
                    onClick={() => navigate(item.path)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm transition-colors ${
                      isActive(item.path)
                        ? 'bg-red-500 text-white'
                        : 'text-[#b3b3b3] hover:text-foreground hover:bg-background'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </button>
                );
              })}
              
              {/* User Profile Dropdown */}
              <div className="relative ml-4" ref={profileDropdownRef}>
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-background transition-colors"
                >
                  {user?.picture ? (
                    <img 
                      src={user.picture} 
                      alt={user.name}
                      className="w-8 h-8 rounded-full"
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-red-500" />
                    </div>
                  )}
                  <div className="hidden lg:block text-left">
                    <p className="font-body text-sm text-foreground">{user?.name || 'Admin'}</p>
                    <p className="font-body text-xs text-[#b3b3b3]">Administrator</p>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-[#b3b3b3] transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown Menu */}
                {isProfileOpen && (
                  <div className="absolute right-0 mt-2 w-72 bg-card border border-border rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-3 border-b border-border">
                      <p className="font-body text-sm font-medium text-foreground truncate" title={user?.name}>
                        {user?.name}
                      </p>
                      <p className="font-body text-xs text-[#b3b3b3] break-all" title={user?.email}>
                        {user?.email}
                      </p>
                      <div className="mt-2 px-2 py-1 bg-red-500/10 rounded text-xs text-red-400 inline-flex items-center">
                        <Shield className="w-3 h-3 mr-1" />
                        Admin Access
                      </div>
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center gap-2 px-4 py-2 font-body text-sm text-[#b3b3b3] hover:text-foreground hover:bg-background transition-colors"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[#b3b3b3] hover:text-foreground hover:bg-background"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.path}
                    onClick={() => {
                      navigate(item.path);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-body text-sm transition-colors ${
                      isActive(item.path)
                        ? 'bg-red-500 text-white'
                        : 'text-[#b3b3b3] hover:text-foreground hover:bg-background'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
              <button
                onClick={handleSignOut}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-lg font-body text-sm text-[#b3b3b3] hover:text-foreground hover:bg-background transition-colors"
              >
                <LogOut className="w-5 h-5" />
                Sign Out
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
    </div>
  );
}
