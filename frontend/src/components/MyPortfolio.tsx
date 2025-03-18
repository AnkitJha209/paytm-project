import { useEffect, useState } from "react";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";
import axios from "axios";

export const MyPortfolio = () => {
    const {token} = useSelector((state: RootState) => state.auth)
    const [balance, setBalance] = useState(0)  
    useEffect(()=> {
        if (!token) return;
        const fetchBalance = async () => {
            const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/get-balance`,
                {headers:{
                    'Authorization': `Bearer ${token}`,
                    'Content-Type' : 'application/json'
                }},
            )
            setBalance(res.data.getBal.amount)
        }
        fetchBalance()
    },[token])
    return <div className="mb-10">
            <span className="text-3xl font-medium pr-2">Your Balance </span><span className="text-5xl font-bold">
             ${balance}
            </span>
            </div>
}