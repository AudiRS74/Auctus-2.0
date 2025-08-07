import React, { createContext, useContext, useState, useEffect } from "react";
// import * as Google from "expo-auth-session/providers/google";
// import { supabase } from "../lib/supabase";
const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  // TODO: Add real Google and Supabase integration
  const signUpWithEmail = async (email, password) => {
    setLoading(true);
    setTimeout(() => {
      setUser({ email });
      setLoading(false);
    }, 1000);
    return { data: { user: { email } }, error: null };
  };
  const signInWithEmail = async (email, password) => {
    setLoading(true);
    setTimeout(() => {
      setUser({ email });
      setLoading(false);
    }, 1000);
    return { data: { user: { email } }, error: null };
  };
  const signInWithGoogle = async () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ email: "googleuser@example.com" });
      setLoading(false);
    }, 1000);
  };
  return (
    <AuthContext.Provider value={{
      user, loading,
      signUpWithEmail, signInWithEmail, signInWithGoogle,
      setUser
    }}>
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);