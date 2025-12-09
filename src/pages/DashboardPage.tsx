import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft, User, Mail, Phone, Building2 } from "lucide-react";
import { SEO } from "@/components/seo/SEO";

export function DashboardPage() {
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    year: "",
    branch: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("User details submitted:", userDetails);
    // TODO: Save user details to backend
    // After saving, redirect to team registration or show success
  };

  const handleSignOut = () => {
    // TODO: Implement sign out logic
    navigate('/');
  };

  return (
    <>
      <SEO 
        title="Dashboard - SITNovate 24-Hour Hackathon"
        description="Complete your profile for SITNovate hackathon registration"
        url="https://sitnovate.vercel.app/dashboard"
      />
      
      <div className="min-h-screen bg-background px-4 py-8">
        <div className="w-full max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-[#b3b3b3] hover:text-foreground transition-colors font-body"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </button>
            <button
              onClick={handleSignOut}
              className="text-[#b3b3b3] hover:text-foreground transition-colors font-body text-sm"
            >
              Sign Out
            </button>
          </div>

          {/* Welcome Section */}
          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl md:text-5xl mb-4 text-foreground">
              Welcome to Your Dashboard
            </h1>
            <p className="font-body text-[#b3b3b3] text-lg">
              Complete your profile to continue with team registration
            </p>
          </div>

          {/* Profile Form */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-2xl text-foreground">Your Profile</h2>
                <p className="font-body text-sm text-[#b3b3b3]">Please fill in your details</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block font-body text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#b3b3b3]" />
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={userDetails.fullName}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Enter your full name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-body text-sm font-medium text-foreground mb-2">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#b3b3b3]" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={userDetails.email}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="email@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block font-body text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#b3b3b3]" />
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={userDetails.phone}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>

              {/* College */}
              <div>
                <label htmlFor="college" className="block font-body text-sm font-medium text-foreground mb-2">
                  College/Institution *
                </label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#b3b3b3]" />
                  <input
                    type="text"
                    id="college"
                    name="college"
                    required
                    value={userDetails.college}
                    onChange={handleChange}
                    className="w-full pl-11 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Enter your college name"
                  />
                </div>
              </div>

              {/* Year and Branch */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="year" className="block font-body text-sm font-medium text-foreground mb-2">
                    Year of Study *
                  </label>
                  <select
                    id="year"
                    name="year"
                    required
                    value={userDetails.year}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                  >
                    <option value="">Select year</option>
                    <option value="1">1st Year</option>
                    <option value="2">2nd Year</option>
                    <option value="3">3rd Year</option>
                    <option value="4">4th Year</option>
                    <option value="postgrad">Post Graduate</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="branch" className="block font-body text-sm font-medium text-foreground mb-2">
                    Branch/Department *
                  </label>
                  <input
                    type="text"
                    id="branch"
                    name="branch"
                    required
                    value={userDetails.branch}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="e.g., Computer Science"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-primary text-primary-foreground font-heading text-lg rounded-lg hover:opacity-90 transition-opacity"
              >
                SAVE & CONTINUE
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
