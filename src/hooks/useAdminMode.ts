import { useState, useEffect } from 'react';

export function useAdminMode() {
  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return localStorage.getItem('bhope_admin_mode') === 'true';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check URL parameters
    const params = new URLSearchParams(window.location.search);
    if (params.get('edit') === 'true' || params.get('admin') === 'true' || params.get('key') === 'varun') {
      localStorage.setItem('bhope_admin_mode', 'true');
      setIsAdmin(true);
      // Clean up the URL query params without reloading the page
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    } else if (params.get('edit') === 'false' || params.get('admin') === 'false') {
      localStorage.removeItem('bhope_admin_mode');
      setIsAdmin(false);
      const newUrl = window.location.pathname;
      window.history.replaceState({}, '', newUrl);
    }

    // Listener for storage and custom event changes
    const handleStorageChange = () => {
      setIsAdmin(localStorage.getItem('bhope_admin_mode') === 'true');
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('bhope_admin_toggle', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('bhope_admin_toggle', handleStorageChange);
    };
  }, []);

  const toggleAdmin = () => {
    const next = !isAdmin;
    if (next) {
      localStorage.setItem('bhope_admin_mode', 'true');
    } else {
      localStorage.removeItem('bhope_admin_mode');
    }
    setIsAdmin(next);
    window.dispatchEvent(new Event('bhope_admin_toggle'));
  };

  return { isAdmin, toggleAdmin };
}
