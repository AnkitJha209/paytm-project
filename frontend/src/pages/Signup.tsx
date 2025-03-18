import { Link, useNavigate } from "react-router-dom";
import { Card } from "../components/ui/Card"
import { Input } from "../components/ui/Input"
import { useState } from "react";
import { Button } from "../components/ui/Button";
import axios from 'axios'

export const Signup  = ( ) => {
    const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/signup`,
        {firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            username: formData.get('username') as string,
            confirmPassword: formData.get('confirmPassword') as string
        }
      );
      console.log(response)
      navigate('/signin');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };
    return <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-violet-50 via-white to-indigo-50 p-6">
    <Card className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
        <p className="mt-1 text-gray-600">
          Enter your information to create an account
        </p>
      </div>

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="grid gap-5 md:grid-cols-2">
          <Input 
            name="firstName"
            label="First Name" 
            placeholder="John"
            required 
          />
          <Input 
            name="lastName"
            label="Last Name" 
            placeholder="Doe"
            required 
          />
        </div>
        <Input 
          name="username"
          label="Username" 
          type="text" 
          placeholder="Username"
          required 
        />
        <Input 
          name="email"
          label="Email" 
          type="email" 
          placeholder="john@example.com"
          required 
        />
        <div className="grid gap-5 md:grid-cols-2">
        <Input 
          name="password"
          label="Password" 
          type="password"
          required 
        />
        <Input 
          name="confirmPassword"
          label="Confirm Password" 
          type="password"
          required 
        />
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <Button name={loading ? "Creating Account..." : "Sign Up"} variant={'primary'} onClick={()=>(console.log('hello'))} className="w-full" disabled={loading}/>
      </form>

      <p className="text-center text-sm text-gray-600">
        Already have an account?{' '}
        <Link to="/signin" className="font-medium text-violet-600 hover:text-violet-500">
          Sign In
        </Link>
      </p>
    </Card>
  </div>
}