import { createContext, useContext, useState, useEffect } from 'react';
import { createSupabaseClient } from '@/utils/supabase/client';

const supabase = createSupabaseClient();
const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

const login = async ({ email, password }) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

const logout = async () => {
  await supabase.auth.signOut();
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        setUser(session.user);
        setAuth(true);
        setLoadingAuth(false);
      } else {
        setLoadingAuth(false);
      }
    };

    // Run the session check
    checkSession();

    // Listen for authentication state changes
    const { data: subscription } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'SIGNED_IN') {
          setUser(session.user);
          setAuth(true);
          setLoadingAuth(false);
        } else if (event === 'SIGNED_OUT') {
          setUser(null);
          setAuth(false);
          setLoadingAuth(false);
        }
      },
    );

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, loadingAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
