import { useState } from "react"
import { Button } from "../components/ui/Button"
import { Card } from "../components/ui/Card"
import { Input } from "../components/ui/Input"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { setToken } from "../redux/authSlice"

export const Signin = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError('');
      setLoading(true);
  
      const formData = new FormData(e.currentTarget);
      
      try {
        const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signin`,{
          email: formData.get('email') as string,
          password: formData.get('password') as string,
        });
        dispatch(setToken(response.data.token))
        navigate('/dashboard');
      } catch (err: any) {
        setError(err.response?.data?.message || 'Invalid credentials');
      } finally {
        setLoading(false);
      }
    };
    return <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-6">
    <Card className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
        <p className="mt-2 text-gray-600">
          Enter your credentials to access your account
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input 
          name="email"
          label="Email" 
          type="email" 
          placeholder="john@example.com"
          required 
        />
        <Input 
          name="password"
          label="Password" 
          type="password"
          required 
        />

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button variant="primary" onClick={() => console.log('hi')} name={loading ? 'Signing In...' : 'Sign In'} className="w-full" disabled={loading} />
      </form>

      <p className="text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <Link to="/signup" className="font-medium text-violet-600 hover:text-violet-500">
          Sign Up
        </Link>
      </p>
    </Card>
  </div>
}