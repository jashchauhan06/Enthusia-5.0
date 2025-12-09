import adminsConfig from '../../admins.json';

export const isAdmin = (googleId: string): boolean => {
  return adminsConfig.admins.includes(googleId);
};

export const checkAdminStatus = (): boolean => {
  try {
    const user = localStorage.getItem('user');
    if (!user) return false;
    
    const userData = JSON.parse(user);
    return isAdmin(userData.sub);
  } catch (error) {
    console.error('Error checking admin status:', error);
    return false;
  }
};
