import { useSelector } from "react-redux"
import { RootState } from "../redux/store"
import { Button } from "../components/ui/Button"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import { Input } from "../components/ui/Input"

interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
}
export const Dashboard = () => {
    const {token} = useSelector((state: RootState) => state.auth)
    const [balance, setBalance] = useState(0)      
    const [input, setInput]= useState('')
    const [users, setUser] = useState<User[]>([])
    if(!token){
        return <div className="flex justify-center items-center flex-col">
            LogIn First
            <Link to={'/sigin'}><Button variant="secondary" name='LogIn' /></Link>
        </div>
    }

    useEffect(()=> {
        if (!token) return;
        const fetchUser = async () => {
            const res = await axios.get(`http://localhost:8080/api/v1/getuser?filter=${input}`,{
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type' : 'application/json'
                }
            })
            setUser(Array.isArray(res.data.user) ? res.data.user : []);
        }
        fetchUser();
    },[input, token])
    useEffect(()=> {
        if (!token) return;
        const fetchBalance = async () => {
            const res = await axios.get('http://localhost:8080/api/v1/get-balance',
                {headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type' : 'application/json'
                }},
            )
            setBalance(res.data.getBal.amount)
        }
        fetchBalance()
    },[token])
    return <div className="bg-gradient-to-br text-white flex flex-col p-10 to-blue-900 from-purple-800 w-full h-screen">
        <div className="mb-10">
        <span className="text-3xl font-medium pr-2">Your Balance </span><span className="text-5xl font-bold">
         ${balance}
        </span>
        </div>
        <div className="text-2xl flex flex-col gap-4 font-semibold">
            <span className="">Users</span>
            <Input placeholder="Search users..." onChange={(e)=> setInput(e.target.value)}/>
        </div>
        {
            users.map(user => (
                <div key={user.id}>{user.username}</div>
            ))
        }
    </div>
}