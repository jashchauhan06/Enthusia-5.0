import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import { useGoogleLogin } from '@react-oauth/google';
import { SEO } from "@/components/seo/SEO";
import { supabase } from "@/lib/supabase";
import { isAdmin } from "@/lib/admin";

export function SignInPage() {
  const navigate = useNavigate();

  const handleGoogleSignIn = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log('Google Sign In Success:', tokenResponse);
      
      // Get user info from Google
      try {
        const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        });
        
        const userInfo = await userInfoResponse.json();
        console.log('User Info:', userInfo);
        
        // Store user info in localStorage
        localStorage.setItem('user', JSON.stringify(userInfo));
        
        // Check if user is admin
        if (isAdmin(userInfo.sub)) {
          console.log('Admin user detected, redirecting to admin dashboard');
          navigate('/admin/teams');
          return;
        }
        
        // Check if user exists in Supabase
        const { data: existingUser } = await supabase
          .from('users')
          .select('*')
          .eq('google_id', userInfo.sub)
          .single();
        
        if (existingUser) {
          // User exists, store their data
          localStorage.setItem('userProfile', JSON.stringify(existingUser));
          
          // If user has a team, redirect to teams page, otherwise to dashboard
          if (existingUser.team_code) {
            navigate('/dashboard/teams');
          } else {
            navigate('/dashboard');
          }
        } else {
          // New user, redirect to complete profile
          navigate('/dashboard');
        }
      } catch (error) {
        console.error('Error fetching user info:', error);
      }
    },
    onError: (error) => {
      console.error('Google Sign In Error:', error);
    },
  });

  return (
    <>
      <SEO 
        title="Sign In - ENTHUSIA 5.0"
        description="Sign in to register for ENTHUSIA 5.0"
        url="https://sitnovate.vercel.app/signin"
      />
      
      <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md">
          {/* Back Button */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-[#b3b3b3] hover:text-foreground transition-colors mb-6 font-body"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="bg-card border border-border rounded-2xl p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="font-heading text-3xl md:text-4xl mb-3 text-foreground">
                Welcome to SITNovate
              </h1>
              <p className="font-body text-[#b3b3b3]">
                Sign in to register for the hackathon
              </p>
            </div>

            {/* Google Sign In Button */}
            <button
              onClick={() => handleGoogleSignIn()}
              className="w-full flex items-center justify-center gap-3 bg-white hover:bg-gray-50 text-gray-800 font-body font-medium py-3 px-4 rounded-lg border border-gray-300 transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </button>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-card text-[#b3b3b3] font-body">
                  Secure authentication
                </span>
              </div>
            </div>

            {/* Info Text */}
            <p className="text-center text-sm text-[#b3b3b3] font-body">
              By signing in, you agree to our{' '}
              <a href="/privacy-policy" className="text-primary hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
