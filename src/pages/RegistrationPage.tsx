import { useState } from "react";
import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { SEO } from "@/components/seo/SEO";

interface TeamMember {
  name: string;
  email: string;
  phone: string;
}

export function RegistrationPage() {
  const navigate = useNavigate();
  const [memberCount, setMemberCount] = useState(1);
  const [formData, setFormData] = useState({
    teamName: "",
    college: "",
    projectIdea: "",
    members: [
      { name: "", email: "", phone: "" }
    ] as TeamMember[]
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleMemberCountChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const count = parseInt(e.target.value);
    setMemberCount(count);
    
    // Adjust members array
    const newMembers = [...formData.members];
    if (count > newMembers.length) {
      // Add new empty members
      for (let i = newMembers.length; i < count; i++) {
        newMembers.push({ name: "", email: "", phone: "" });
      }
    } else {
      // Remove extra members
      newMembers.splice(count);
    }
    
    setFormData({
      ...formData,
      members: newMembers
    });
  };

  const handleMemberChange = (index: number, field: keyof TeamMember, value: string) => {
    const newMembers = [...formData.members];
    newMembers[index] = {
      ...newMembers[index],
      [field]: value
    };
    setFormData({
      ...formData,
      members: newMembers
    });
  };

  return (
    <>
      <SEO 
        title="Register for SITNovate 24-Hour Hackathon"
        description="Register your team for the SITNovate 24-Hour Hackathon. Join us for an intensive innovation challenge."
        url="https://sitnovate.vercel.app/register"
      />
      
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#b3b3b3] hover:text-foreground transition-colors mb-6 font-body"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="text-center mb-8">
            <h1 className="font-heading text-4xl md:text-5xl mb-4 text-foreground">
              TEAM REGISTRATION
            </h1>
            <p className="font-body text-[#b3b3b3] text-lg mb-2">
              SITNovate 24-Hour Hackathon
            </p>
            <p className="font-body text-sm text-[#b3b3b3]">
              Teams can have 1, 2, or 3 members
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-2xl p-8">
            {/* Team Name */}
            <div>
              <label htmlFor="teamName" className="block font-body text-sm font-medium text-foreground mb-2">
                Team Name *
              </label>
              <input
                type="text"
                id="teamName"
                name="teamName"
                required
                value={formData.teamName}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="Enter your team name"
              />
            </div>

            {/* Member Count */}
            <div>
              <label htmlFor="memberCount" className="block font-body text-sm font-medium text-foreground mb-2">
                Number of Team Members * <span className="text-[#b3b3b3] font-normal">(Maximum 3)</span>
              </label>
              <select
                id="memberCount"
                name="memberCount"
                required
                value={memberCount}
                onChange={handleMemberCountChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
              >
                <option value="1">1 Member (Solo)</option>
                <option value="2">2 Members</option>
                <option value="3">3 Members</option>
              </select>
            </div>

            {/* Dynamic Team Member Fields */}
            {formData.members.map((member, index) => (
              <div key={index} className="space-y-4 p-6 bg-background border border-border rounded-xl">
                <h3 className="font-heading text-lg text-foreground mb-4">
                  {index === 0 ? "Team Leader" : `Member ${index + 1}`}
                </h3>
                
                {/* Member Name */}
                <div>
                  <label htmlFor={`member-name-${index}`} className="block font-body text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id={`member-name-${index}`}
                    required
                    value={member.name}
                    onChange={(e) => handleMemberChange(index, 'name', e.target.value)}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="Enter full name"
                  />
                </div>

                {/* Member Email */}
                <div>
                  <label htmlFor={`member-email-${index}`} className="block font-body text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id={`member-email-${index}`}
                    required
                    value={member.email}
                    onChange={(e) => handleMemberChange(index, 'email', e.target.value)}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="email@example.com"
                  />
                </div>

                {/* Member Phone */}
                <div>
                  <label htmlFor={`member-phone-${index}`} className="block font-body text-sm font-medium text-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id={`member-phone-${index}`}
                    required
                    value={member.phone}
                    onChange={(e) => handleMemberChange(index, 'phone', e.target.value)}
                    className="w-full px-4 py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
              </div>
            ))}

            {/* College */}
            <div>
              <label htmlFor="college" className="block font-body text-sm font-medium text-foreground mb-2">
                College/Institution *
              </label>
              <input
                type="text"
                id="college"
                name="college"
                required
                value={formData.college}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground"
                placeholder="Enter your college name"
              />
            </div>

            {/* Project Idea */}
            <div>
              <label htmlFor="projectIdea" className="block font-body text-sm font-medium text-foreground mb-2">
                Project Idea (Optional)
              </label>
              <textarea
                id="projectIdea"
                name="projectIdea"
                value={formData.projectIdea}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-foreground resize-none"
                placeholder="Brief description of your project idea"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-4 bg-primary text-primary-foreground font-heading text-lg rounded-lg hover:opacity-90 transition-opacity"
            >
              REGISTER TEAM
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
