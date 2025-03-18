import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Input } from "./ui/Input";
import { Card } from "./ui/Card";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";

interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
}

export const Users = () => {
    const {token} = useSelector((state: RootState) => state.auth)
        const [input, setInput]= useState('')
        const [users, setUser] = useState<User[]>([])
        const {id} = useSelector((state: RootState) => state.auth)
        const navigate = useNavigate()
        const filteredUsers = users.filter(user => user.id !== id);
    useEffect(()=> {
        if (!token) return;
        const fetchUser = async () => {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/getuser?filter=${input}`,{
                headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type' : 'application/json'
                }
            })
            setUser(Array.isArray(res.data.user) ? res.data.user : []);
        }
        fetchUser();
    },[input, token])
    return <><div className="text-2xl flex flex-col gap-4 font-semibold">
                <span className="">Users</span>
                <Input placeholder="Search users..." onChange={(e)=> setInput(e.target.value)}/>
            </div>
            {
                filteredUsers.map(user => ( 
                    <Card className="text-black flex w-full justify-between items-center  h-[70px] mt-5" key={user.id}>
                        <div>{user.username.toUpperCase()}</div>
                        <div><Button variant="primary" name='Send Money' onClick={() => navigate("/send-money?id=" + user.id + "&name=" + user.firstName)}/></div>
                    </Card>
                ))
            }
            </>
}