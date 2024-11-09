import { useAuth } from '@/context/AuthProvider';
import { useRouter } from 'next/navigation';
import React, { useRef, useState } from 'react';

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setErrorMsg('');
      setLoading(true);
      if (!passwordRef.current?.value || !emailRef.current?.value) {
        setErrorMsg('Please fill in the fields');
        setLoading(false);
        return;
      }
      const {
        data: { user, session },
        error,
      } = await login({
        email: emailRef.current.value,
        password: passwordRef.current.value,
      });
      if (error) setErrorMsg(error.message);
      if (user && session) router.push('/admin');
    } catch (error) {
      setErrorMsg('Email or Password Incorrect');
    }
    setLoading(false);
  };

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-8">
      <section className="flex w-1/3 items-center justify-center">
        <h2 className="text-4xl">Admin Login</h2>
      </section>
      <form onSubmit={handleSubmit} className="flex w-1/3 flex-col gap-6">
        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" ref={emailRef} required />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" ref={passwordRef} required />
        </div>
        <button
          className="mt-4 w-full rounded-lg border-2 border-white p-2"
          type="submit"
          disabled={loading}
        >
          Login
        </button>
      </form>
    </main>
  );
};

export default Login;
